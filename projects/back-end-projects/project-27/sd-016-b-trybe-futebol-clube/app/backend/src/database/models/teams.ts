import { Model, DataTypes } from 'sequelize';
import db from '.';
import Matches from './matches';

export default class Teams extends Model {
  id: number;
  teamName: string;
}

Teams.init(
  {
    teamName: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: 'teams',
    underscored: true,
    timestamps: false,
  },
);

Matches.belongsTo(Teams, { foreignKey: 'homeTeam', as: 'teamHome' });
Matches.belongsTo(Teams, { foreignKey: 'awayTeam', as: 'teamAway' });

Teams.hasMany(Matches, { foreignKey: 'homeTeam', as: 'teamHome' });
Teams.hasMany(Matches, { foreignKey: 'awayTeam', as: 'teamAway' });
