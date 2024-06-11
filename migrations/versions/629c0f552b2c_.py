"""empty message

Revision ID: 629c0f552b2c
Revises: 
Create Date: 2024-06-11 23:05:05.887844

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '629c0f552b2c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('photo', schema=None) as batch_op:
        batch_op.alter_column('date_photo',
               existing_type=sa.DATE(),
               type_=sa.String(),
               existing_nullable=False)
        batch_op.alter_column('heure_photo',
               existing_type=sa.TIME(),
               type_=sa.String(),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('photo', schema=None) as batch_op:
        batch_op.alter_column('heure_photo',
               existing_type=sa.String(),
               type_=sa.TIME(),
               existing_nullable=False)
        batch_op.alter_column('date_photo',
               existing_type=sa.String(),
               type_=sa.DATE(),
               existing_nullable=False)

    # ### end Alembic commands ###
