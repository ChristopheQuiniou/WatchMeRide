from tkinter import Image

from flask import request
from flask_restful import Resource
from marshmallow import ValidationError

from models import Cavalier, Competition, db, Club, Cheval, Coach, Epreuve, Photo, Participant
from schemas import CavalierSchema, CompetitionSchema, ClubSchema, ChevalSchema, CoachSchema, EpreuveSchema, PhotoSchema, ParticipantSchema


class CavalierResource(Resource):

    cavalier_schema = CavalierSchema()
    cavalier_list_schema = CavalierSchema(many=True)
    cavalier_patch_schema = CavalierSchema(partial=True)

    def get(self, cavalier_id=None):
        if cavalier_id:
            cavalier = Cavalier.query.get_or_404(cavalier_id)
            return self.cavalier_schema.dump(cavalier)
        else:
            all_cavalier = Cavalier.query.all()
            return self.cavalier_list_schema.dump(all_cavalier)

    def post(self):
        try:
            new_cavalier_data = self.cavalier_schema.load(request.json)
        except ValidationError as err:
            return {"Message": "Validation error", "errors": err.messages}, 404
        new_cavalier = Cavalier(
            id = new_cavalier_data['id'],
            firstname = new_cavalier_data['firstname'],
            lastname = new_cavalier_data['lastname'],
            #Club = new_cavalier_data['Club']
        )
        db.session.add(new_cavalier)
        db.session.commit()
        return self.cavalier_schema.dump(new_cavalier)

    def put(self, cavalier_id):
        try:
            new_cavalier_data = self.cavalier_schema.load(request.json)
        except ValidationError as err:
            return {"Message": "Validation error", "errors": err.messages}, 404

        cavalier = Cavalier.query.get_or_404(cavalier_id)
        for key, value in new_cavalier_data.items():
            if value is not None:
                setattr(cavalier, key, value)
        db.session.commit()
        return self.cavalier_schema.dump(cavalier)

    def patch(self, cavalier_id):
        try:
            new_cavalier_data = self.cavalier_patch_schema.load(request.json)
        except ValidationError as err:
            return {"Message": "Validation error", "errors": err.messages}, 404

        cavalier = Cavalier.query.get_or_404(cavalier_id)
        for key, value in new_cavalier_data.items():
            if value is not None:
                setattr(cavalier, key, value)
        db.session.commit()
        return self.cavalier_schema.dump(cavalier)

    def delete(self, cavalier_id):
        cavalier = Cavalier.query.get_or_404(cavalier_id)
        db.session.delete(cavalier)
        db.session.commit()
        return '', 204

class CompetitionResource(Resource):

    competition_schema = CompetitionSchema()
    competition_list_schema = CompetitionSchema(many=True)
    competition_patch_schema = CompetitionSchema(partial=True)

    def get(self, competition_id=None):
        if competition_id:
            competition = Competition.query.get_or_404(competition_id)
            return self.competition_schema.dump(competition)
        else:
            all_competitions = Competition.query.all()
            return self.competition_list_schema.dump(all_competitions)

    def post(self):
        try:
            new_competition_data = self.competition_schema.load(request.json)
        except ValidationError as err:
            return {"Message": "Validation error", "errors": err.messages}, 404
        new_competition = Competition(
            id=new_competition_data['id'],
            nom=new_competition_data['nom'],
            date=new_competition_data['date'],
            lieu=new_competition_data['lieu'],
            nb_Participant=new_competition_data['nb_Participant'],
            Image=new_competition_data['Image']
        )
        db.session.add(new_competition)
        db.session.commit()
        return self.competition_schema.dump(new_competition)

    def put(self, competition_id):
        try:
            new_competition_data = self.competition_schema.load(request.json)
        except ValidationError as err:
            return {"Message": "Validation error", "errors": err.messages}, 404

        competition = Competition.query.get_or_404(competition_id)
        for key, value in new_competition_data.items():
            if value is not None:
                setattr(competition, key, value)
        db.session.commit()
        return self.competition_schema.dump(competition)

    def patch(self, competition_id):
        try:
            new_competition_data = self.competition_patch_schema.load(request.json)
        except ValidationError as err:
            return {"Message": "Validation error", "errors": err.messages}, 404
        competition = Competition.query.get_or_404(competition_id)
        for key, value in new_competition_data.items():
            if value is not None:
                setattr(competition, key, value)
        db.session.commit()
        return self.competition_schema.dump(competition)


    def delete(self, competition_id):
        competition = Competition.query.get_or_404(competition_id)
        db.session.delete(competition)
        db.session.commit()
        return '', 204

class ClubResource(Resource):
    club_schema = ClubSchema()
    club_list_schema = ClubSchema(many=True)
    club_pacth_schema = ClubSchema(partial=True)

    def get(self, club_id=None):
        if club_id:
            club = Club.query.get_or_404(club_id)
            return self.club_schema.dump(club)
        else:
            all_clubs = Club.query.all()
            return self.club_list_schema.dump(all_clubs)

    def post(self):
        try:
            new_club_data = self.club_schema.load(request.json)
        except ValidationError as err:
            return {"Message": "Validation error", "errors": err.messages}, 404
        new_club = Club(
            id=new_club_data['id'],
            name=new_club_data['name'],
        )
        db.session.add(new_club)
        db.session.commit()
        return self.club_schema.dump(new_club)

    def delete(self, club_id):
        club = Club.query.get_or_404(club_id)
        db.session.delete(club)
        db.session.commit()
        return '', 204

class ChevalResource(Resource):

    Cheval_schema = ChevalSchema()
    Cheval_list_schema = ChevalSchema(many=True)
    Cheval_patch_schema = ChevalSchema(partial=True)

    def get(self, Cheval_id=None):
        if Cheval_id:
            cheval = Cheval.query.get_or_404(Cheval_id)
            return self.Cheval_schema_schema.dump(cheval)
        else:
            all_Cheval = Cheval.query.all()
            return self.Cheval_list_schema.dump(all_Cheval)

    def post(self):
        try:
            new_Cheval_data = self.Cheval_schema.load(request.json)
        except ValidationError as err:
            return {"Message": "Validation error", "errors": err.messages}, 404
        new_Cheval = Cheval(
            id = new_Cheval_data['id'],
            nom = new_Cheval_data['nom'],
            race = new_Cheval_data['race'],
            #Club = new_cavalier_data['Club']
        )
        db.session.add(new_Cheval)
        db.session.commit()
        return self.Cheval_schema.dump(new_Cheval)

    def put(self, Cheval_id):
        try:
            new_Cheval_data = self.Cheval_schema.load(request.json)
        except ValidationError as err:
            return {"Message": "Validation error", "errors": err.messages}, 404

        cheval = Cheval.query.get_or_404(Cheval_id)
        for key, value in new_Cheval_data.items():
            if value is not None:
                setattr(cheval, key, value)
        db.session.commit()
        return self.Cheval_schema.dump(cheval)

    def patch(self, Cheval_id):
        try:
            new_Cheval_data = self.Cheval_patch_schema.load(request.json)
        except ValidationError as err:
            return {"Message": "Validation error", "errors": err.messages}, 404

        cheval = Cheval.query.get_or_404(Cheval_id)
        for key, value in new_Cheval_data.items():
            if value is not None:
                setattr(cheval, key, value)
        db.session.commit()
        return self.Cheval_schema.dump(cheval)

    def delete(self, Cheval_id):
        cheval = Cheval.query.get_or_404(Cheval_id)
        db.session.delete(cheval)
        db.session.commit()
        return '', 204

class CoachResource(Resource):
    coach_schema  = CoachSchema()
    coach_list_schema = CoachSchema(many=True)
    coach_pacth_schema = CoachSchema(partial=True)

    def get(self, coach_id=None):
        if coach_id:
            coach = Coach.query.get_or_404(coach_id)
            return self.coach_schema.dump(coach)
        else:
            all_coach = Coach.query.all()
            return self.coach_list_schema.dump(all_coach)

    def post(self):
        try:
            new_coach_data = self.coach_schema.load(request.json)
        except ValidationError as err:
            return {"Message": "Validation error", "errors": err.messages}, 404
        new_coach = Coach(
            id=new_coach_data['id'],
            nom=new_coach_data['nom'],
            prenoms=new_coach_data['prenoms']
        )
        db.session.add(new_coach)
        db.session.commit()
        return self.coach_schema.dump(new_coach)

    def put(self, coach_id):
        try:
            new_coach_data = self.coach_schema.load(request.json)
        except ValidationError as err:
            return {"Message": "Validation error", "errors": err.messages}, 404
        coach = Coach.query.get_or_404(coach_id)
        for key, value in new_coach_data.items():
            if value is not None:
                setattr(coach, key, value)
        db.session.commit()
        return self.coach_schema.dump(coach)

    def patch(self, coach_id):
        try:
            new_coach_data = self.coach_schema.load(request.json)
        except ValidationError as err:
            return {"Message": "Validation error", "errors": err.messages}, 404
        coach = Coach.query.get_or_404(coach_id)
        for key, value in new_coach_data.items():
            if value is not None:
                setattr(coach, key, value)
        db.session.commit()
        return self.coach_schema.dump(coach)

    def delete(self, coach_id):
        coach = Coach.query.get_or_404(coach_id)
        db.session.delete(coach)
        db.session.commit()
        return '', 204

class EpreuveResource(Resource):
    epreuve_schema = EpreuveSchema()
    epreuve_list_schema = EpreuveSchema(many=True)
    epreuve_pacth_schema = EpreuveSchema(partial=True)

    def get(self, epreuve_id=None):
        if epreuve_id:
            epreuve = Epreuve.query.get_or_404(epreuve_id)
            return self.epreuve_schema.dump(epreuve)
        else:
            all_epreuve = Epreuve.query.all()
            return self.epreuve_list_schema.dump(all_epreuve)

    def post(self):
        try:
            new_epreuve_data = self.epreuve_schema.load(request.json)
        except ValidationError as err:
            return {"Message": "Validation error", "errors": err.messages}, 404
        for epreuve_data in new_epreuve_data:
            new_epreuve = Epreuve(
                id=epreuve_data['id'],
                nom=epreuve_data['nom'],
                id_competition=epreuve_data['id_competition'],
            )
            db.session.add(new_epreuve)
            db.session.commit()
        return self.epreuve_schema.dump("Epreuve(s) Enregistrée(s) avec succès")

    def put(self, epreuve_id):
        try:
            new_epreuve_data = self.epreuve_schema.load(request.json)
        except ValidationError as err:
            return {"Message": "Validation error", "errors": err.messages}, 404
        epreuve = Epreuve.query.get_or_404(epreuve_id)
        for key, value in new_epreuve_data.items():
            if value is not None:
                setattr(epreuve, key, value)
        db.session.commit()
        return self.epreuve_schema.dump(epreuve)

    def patch(self, epreuve_id):
        try:
            new_epreuve_data = self.epreuve_schema.load(request.json)
        except ValidationError as err:
            return {"Message": "Validation error", "errors": err.messages}, 404
        epreuve = Epreuve.query.get_or_404(epreuve_id)
        for key, value in new_epreuve_data.items():
            if value is not None:
                setattr(epreuve, key, value)
        db.session.commit()
        return self.epreuve_schema.dump(epreuve)

    def delete(self, epreuve_id):
        epreuve = Epreuve.query.get_or_404(epreuve_id)
        db.session.delete(epreuve)
        db.session.commit()
        return '', 204


class PhotoResource(Resource):
    photos_schema = PhotoSchema()
    photos_list_schema = PhotoSchema(many=True)
    photo_pacth_schema = PhotoSchema(partial=True)

    def get(self, id_photo=None):
        if id_photo:
            photo = Image.query.get_or_404(id_photo)
            return self.photos_schema.dump(photo)
        else:
            all_photo = Photo.query.all()
            return self.photos_list_schema.dump(all_photo)


class PhotoResource(Resource):
    photos_schema = PhotoSchema()
    photos_list_schema = PhotoSchema(many=True)
    photo_pacth_schema = PhotoSchema(partial=True)

    def get(self, id_photo=None):
        if id_photo:
            photo = Image.query.get_or_404(id_photo)
            return self.photos_schema.dump(photo)
        else:
            all_photo = Photo.query.all()
            return self.photos_list_schema.dump(all_photo)

    def post(self):
        try:
            new_photo = self.photos_schema.load(request.json)
        except ValidationError as err:
            return {"Message": "Validation error", "errors": err.messages}, 404
        new_photo = Photo(
            id_photo = new_photo['id_photo'],
            id_cavalier = new_photo['id_cavalier'],
            url_photo = new_photo['url_photo'],
        )
        db.session.add(new_photo)
        db.session.commit()
        return self.photos_schema.dump(new_photo)


class ParticipantResource(Resource):
    participant_schema = ParticipantSchema()
    participant_list_schema = ParticipantSchema(many=True)
    participant_pacth_schema = ParticipantSchema(partial=True)

    def get(self):
        participants = Participant.query.all()
        return self.participant_schema.dump(participants)

    def post(self):
        try:
            new_participant_data = self.participant_schema.load(request.json)
        except ValidationError as err:
            return {"Message": "Validation error", "errors": err.messages}, 404
        new_participant = Participant(
            id_cavalier = new_participant_data['id_cavalier'],
            id_cheval = new_participant_data['id_cheval'],
            id_coach = new_participant_data['id_coach'],
            id_club = new_participant_data['id_club']
        )
        db.session.add(new_participant)
        db.session.commit()
        return self.participant_schema.dump(new_participant)
