import pandas as pd
import re
import fitz
import json

from flask import request
from flask_restful import Resource
from marshmallow import ValidationError

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
        return getEpreuvesFromFile(data)

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

    return df

def getEpreuvesFromFile(df):
    epreuve_schema = EpreuveSchema()

    epreuves = {
        "id": df.Num_Epreuve.unique().tolist(),
        "nom": df.Nom_Epreuve.unique().tolist(),
    }

    epreuves = pd.DataFrame(epreuves)
    epreuves['id_competition'] = df.iloc[0,8]

    for i in range(0, epreuves.id.shape[0]):
        epreuves.id[i] = epreuves.id[i][-1]

        for i in range(0, epreuves.shape[0]):
            epreuve_data = epreuves.iloc[i:i + 1, :]
            new_epreuve = Epreuve(
                id=epreuve_data['id'],
                nom=epreuve_data['nom'],
                id_competition=epreuve_data['id_competition'],
            )
            #db.session.add(new_epreuve)
            #db.session.commit()
    return {"message":"Epreuve(s) enregistrées avec succès"}

