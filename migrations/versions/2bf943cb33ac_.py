"""empty message

Revision ID: 2bf943cb33ac
Revises: 6f99212e22d0
Create Date: 2024-06-09 11:08:03.679677

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2bf943cb33ac'
down_revision = '6f99212e22d0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('participant', schema=None) as batch_op:
        batch_op.add_column(sa.Column('id_epreuve', sa.Integer(), nullable=False))
        batch_op.create_foreign_key('Epreuve_ID_FK', 'epreuve', ['id_epreuve'], ['id'])
        batch_op.create_foreign_key('Coach_ID_FK', 'coach', ['id_coach'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('participant', schema=None) as batch_op:
        batch_op.drop_constraint('Coach_ID_FK', type_='foreignkey')
        batch_op.drop_constraint('Epreuve_ID_FK', type_='foreignkey')
        batch_op.drop_column('id_epreuve')

    # ### end Alembic commands ###
