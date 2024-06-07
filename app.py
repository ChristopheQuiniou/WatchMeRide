from flask import Flask, render_template
#from flask.ext.mysql import MySQL
from flask_restful import Api
from flask_migrate import Migrate

from functions.uploadFile import uploadFileResource
from models import db, Cavalier
from resource import CavalierResource, CompetitionResource, ClubResource, ChevalResource, CoachResource, EpreuveResource, PhotoResource, ParticipantResource
from schemas import ma
import requests


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///watchMeRide.db'

db.init_app(app)
ma.init_app(app)

api = Api(app)

api.add_resource(CavalierResource, '/cavaliers', '/cavaliers/<int:cavalier_id>')
api.add_resource(CompetitionResource, '/competitions', '/competitions/<int:competition_id>')
api.add_resource(ClubResource, '/clubs', '/clubs/<int:club_id>')
api.add_resource(ChevalResource, '/chevaux', '/chevaux/<int:Cheval_id>')
api.add_resource(CoachResource, '/coach', '/coach/<int:coach_id>')
api.add_resource(EpreuveResource, '/epreuves', '/epreuves/<int:epreuve_id>')
api.add_resource(PhotoResource, '/photos', '/photos/<int:photo_id>')
api.add_resource(ParticipantResource, '/participants')

api.add_resource(uploadFileResource, '/uploadFile')

migrate = Migrate(app, db)



with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run()