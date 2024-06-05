from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Float, Integer, String
from sqlalchemy.orm import declarative_base

Base = declarative_base()

db = SQLAlchemy(model_class=Base)


class Competition(Base):

    __tablename__ = 'competition'

    id = Column(Integer, primary_key=True, index=True)
    nom = Column(String, nullable=False)
    date = Column(String, nullable=False)
    lieu = Column(String, nullable=False)
    nb_Participant = Column(Integer, nullable=False)
    debut = Column(Integer, nullable=True)
    fin = Column(Integer, nullable=True)

class Cavalier(Base):

    __tablename__ = 'cavalier'

    id = Column(Integer, primary_key=True, index=True)
    firstname = Column(String, nullable=False)
    lastname = Column(String, nullable=False)
    #Club = Column(String, nullable=True)

class Club(Base):

    __tablename__ = 'club'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)

class Cheval(Base):

    __tablename__ = 'cheval'

    id = Column(Integer, primary_key=True, index=True)
    nom = Column(String, nullable=False)
    race = Column(String, nullable=False)

class Coach(Base):

    __tablename__ = 'coach'

    id = Column(String, primary_key=True, index=True)
    nom = Column(String, nullable=False)
    prenoms = Column(String, nullable=False)

class Epreuve(Base):
    __tablename__ = 'epreuve'

    id = Column(Integer, primary_key=True, index=True)
    nom = Column(String, nullable=False)

class Photo(Base):
    __tablename__ = 'photo'

    id_photo = Column(Integer, primary_key=True, index=True)
    id_cavalier = Column(Integer, index=True)
    url_photo = Column(String, nullable=False)