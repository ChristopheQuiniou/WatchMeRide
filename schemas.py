from flask_marshmallow import Marshmallow

from models import Cavalier,Competition, Club, Cheval, Coach, Epreuve, Photo

ma = Marshmallow()


class CavalierSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Cavalier()

class CompetitionSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Competition()

class ClubSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Club()

class ChevalSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Cheval()

class CoachSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Coach()

class EpreuveSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Epreuve()

class PhotoSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Photo()
