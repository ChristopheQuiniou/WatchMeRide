import pandas as pd
import re
import fitz
import json

from flask import request
from flask_restful import Resource
from marshmallow import ValidationError
from sqlalchemy.exc import SQLAlchemyError

from models import Cavalier, Competition, db, Club, Cheval, Coach, Epreuve, Photo, Participant
from schemas import CavalierSchema, CompetitionSchema, ClubSchema, ChevalSchema, CoachSchema, EpreuveSchema, PhotoSchema, ParticipantSchema

class uploadFileResource(Resource):

    def post(self):
        try:
            new_epreuve_data = request.json
        except ValidationError as err:
            return {"Message": "Validation error", "errors": err.messages}, 404

        filename = new_epreuve_data['filename']
        competition_id = new_epreuve_data['competition_id']

        data = uploadFile(filename, competition_id)

        #return epreuves
        try:
            insertCoach(data)
            insertClub(data)
            insertCheval(data)
            insertCavaliers(data)
            getEpreuvesFromFile(data)
        except SQLAlchemyError as err:
            return {"Message": "Erreur de traitement du fichier", "errors": err._message()}, 404

        return "Fichier traité avec succès"

def uploadFile(filename, competition_id):
    # Chemin vers votre fichier PDF
    pdf_path = filename

    # Ouvrir le document PDF
    pdf_document = fitz.open(pdf_path)

    # Nombre de pages dans le PDF
    num_pages = pdf_document.page_count
    print(f"Nombre de pages : {num_pages}")

    # Motif à rechercher
    titre_pattern = r"Epreuve n°\d+ : .+"
    exclusion_pattern = "Num\nCouple\nClub / Race Équidé"

    # Créer une liste pour stocker les données extraites
    data = []

    # Extraire le texte de chaque page après le titre spécifié
    for page_num in range(num_pages):
        page = pdf_document.load_page(page_num)
        text = page.get_text()

        # Supprimer les lignes contenant le motif d'exclusion
        text = text.replace(exclusion_pattern, "")

        # Rechercher le motif d'épreuve
        matches = re.finditer(titre_pattern, text)

        for match in matches:
            epreuve = match.group()
            start_index = match.end()

            # Extraire le texte après le motif de l'épreuve
            remaining_text = text[start_index:]

            # Séparer les lignes de cavaliers
            lines = remaining_text.split('\n')

            for i in range(0, len(lines) - 5, 6):
                try:
                    num = lines[i].strip()
                    cavalier = lines[i + 1].strip()
                    team = lines[i + 2].strip()
                    coach = lines[i + 3].strip()
                    club = lines[i + 4].strip()
                    race = lines[i + 5].strip()

                    # Ajouter les données au tableau
                    data.append([epreuve, num, cavalier, team, coach, club, race])
                except IndexError:
                    continue

    # Créer un DataFrame pandas
    columns = ['Num_Epreuve', 'Cavalier', 'Team', 'Coach', 'Club', 'Race', 'Num']
    df = pd.DataFrame(data, columns=columns)

    # Decaller les éléments de la  colonne Race d'une ligne vers le bas
    df["Num"] = df["Num"].shift(1)
    # Supprimer toutes les ligne scontenant le most page
    df = df[~df['Coach'].str.contains('page')]

    # Convertir explicitement la colonne en chaînes de caractères
    df['Num_Epreuve'] = df['Num_Epreuve'].astype(str)

    # Splitter la colonne Num_Epreuve suivant le motif ':'
    df[['Num_Epreuve', 'Nom_Epreuve']] = df['Num_Epreuve'].str.split(' : ', expand=True)

    df['Comptition_id'] = competition_id

    # Fonction pour séparer le premier mot et le reste
    def split_name(name):
        parts = name.split()
        first = parts[0]
        last = ' '.join(parts[1:]) if len(parts) > 1 else ''
        return pd.Series([first, last])

    # Appliquer la fonction à la colonne 'firstname' et créer deux nouvelles colonnes
    df[['firstname', 'lastname']] = df['Cavalier'].apply(split_name)

    return df


def insertCavaliers(data):
    Cavalier.query.delete()
    cavalier = {
        "id": data.Num,
        "fullname": data['Cavalier'],
    }
    cavaliers = pd.DataFrame(cavalier)
    j = 1
    for i in range(cavaliers.shape[0]):
        cavalier_data = cavaliers.iloc[i]
        new_cavalier = Cavalier(
            id=j,
            fullname=cavalier_data['fullname'],
        )
        db.session.add(new_cavalier)
        j=j+1

    db.session.commit()
    return {"message": "Cavalier(s) enregistré(s) avec succès"}


def getEpreuvesFromFile(data):
    Epreuve.query.delete()

    competition = Competition.query.get_or_404(data.iloc[0, 8])

    epreuves = {
        "id": data.Num_Epreuve.unique().tolist(),
        "nom": data.Nom_Epreuve.unique().tolist(),
        "id_competition": data.iloc[0, 8],
        "lieu": competition.lieu,
    }

    epreuves = pd.DataFrame(epreuves)
    epreuves['id_competition'] = data.iloc[0, 8]

    epreuves['id'] = epreuves['id'].apply(lambda x: x[-1] if isinstance(x, str) else x)

    for i in range(epreuves.shape[0]):
        epreuve_data = epreuves.iloc[i]
        new_epreuve = Epreuve(
            id=epreuve_data['id'],
            nom=epreuve_data['nom'],
            id_competition=epreuve_data['id_competition'],
            lieu = epreuve_data['lieu'],
        )
        db.session.add(new_epreuve)

    db.session.commit()
    return {"message": "Epreuve(s) enregistrées avec succès"}


def insertClub(data):
    Club.query.delete()
    club = {
        "name": data.Club.unique().tolist(),
    }
    clubs = pd.DataFrame(club)

    j=1
    for i in range(clubs.shape[0]):
        club_data = clubs.iloc[i]
        new_club = Club(
            id=j,
            name=club_data['name'],
        )
        db.session.add(new_club)
        j=j+1
    db.session.commit()
    return  {"message": "Club(s) enregistré(s) avec succès"}


def insertCheval(data):
    Cheval.query.delete()

    cheval = {
        "Cheval": data.Team,
        "Race": data.Race
    }
    chevaux = pd.DataFrame(cheval).drop_duplicates(subset='Cheval')

    j=1
    for i in range(chevaux.shape[0]):
        chevaux_data = chevaux.iloc[i]
        new_cheval = Cheval(
            id=j,
            nom=chevaux_data['Cheval'],
            race=chevaux_data['Race'],
        )
        db.session.add(new_cheval)
        j=j+1
    db.session.commit()
    return  {"message": "Cheval(aux) enregistré(s) avec succès"}


def insertCoach(data):
    Coach.query.delete()

    coach = {
        "fullname": data.Coach
    }
    coachs = pd.DataFrame(coach)

    coachs.iloc[0].fullname
    j = 1
    for i in range(coachs.shape[0]):
        coach_data = coachs.iloc[i]
        new_coach = Coach(
            id=j,
            nom_complet = coach_data.fullname.replace('Coach : ','')
        )
        db.session.add(new_coach)
        j=j+1
    db.session.commit()
    return  {"message": "Coach(s) enregistré(es) avec succès"}


