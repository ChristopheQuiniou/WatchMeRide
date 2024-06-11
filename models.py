from typing import List

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, Float, Integer, String, ForeignKey, Date, Time
from sqlalchemy.orm import declarative_base, backref, relationship, Mapped, mapped_column, Relationship

Base = declarative_base()

db = SQLAlchemy(model_class=Base)


class Competition(Base):

    __tablename__ = 'competition'

    id = Column(Integer, primary_key=True, index=True)
    nom = Column(String, nullable=False)
    date = Column(String, nullable=False)
    lieu = Column(String, nullable=False)
    Image = Column(String, nullable=True)
    #fin = Column(Integer, nullable=True)

class Cavalier(Base):

    __tablename__ = 'cavalier'

    id = Column(Integer, primary_key=True, index=True)
    fullname = Column(String, nullable=False)
    #lastname = Column(String, nullable=False)

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
    nom_complet = Column(String, nullable=False)
    #prenoms = Column(String, nullable=False)


class Epreuve(Base):
    __tablename__ = 'epreuve'

    id = Column(Integer, primary_key=True, index=True)
    nom = Column(String, nullable=False)
    id_competition = Column(Integer, nullable=False, )
    lieu = Column(String, nullable=False)


class Photo(Base):
    __tablename__ = 'photo'

    id_photo = Column(Integer, primary_key=True, index=True, autoincrement=True)
    id_cavalier = Column(Integer, index=True)
    url_photo = Column(String, nullable=False)
    date_photo = Column(Date, nullable=False)
    heure_photo = Column(Time, nullable=False)
    id_epreuve = Column(Integer, nullable=False)

class Participant(Base):
    __tablename__ = 'participant'

    id_cavalier = Column(Integer, primary_key=True, index=True)
    id_cheval = Column(Integer, primary_key=True, index=True)
    id_coach = Column(Integer, primary_key=True, index=True)
    id_club = Column(Integer, primary_key=True, index=True)
    id_epreuve = Column(Integer, primary_key=True, nullable=False)