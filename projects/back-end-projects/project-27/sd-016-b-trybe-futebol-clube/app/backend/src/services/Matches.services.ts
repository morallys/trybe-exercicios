import { StatusCodes } from 'http-status-codes';

import Matches from '../database/models/matches';
import Teams from '../database/models/teams';
import Err from '../utils/Err';
import errorMessage from '../utils/errorMessages';
import addMatch from '../types/addMatch';
import updateMatch from '../types/updateMatch';

const include = [
  { model: Teams, as: 'teamHome', attributes: ['teamName'] },
  { model: Teams, as: 'teamAway', attributes: ['teamName'] },
];

export default class MatchesService {
  //
  static async matchesFindAll(inProgress: boolean | undefined) {
    //
    if (inProgress === undefined) return Matches.findAll({ include });

    return Matches.findAll({ where: { inProgress }, include });
  }

  static async createMatch(body: addMatch) { return Matches.create(body); }

  static async matchFinish(id: number) {
    //
    console.log(id);
    const [match] = await Matches.update(
      { inProgress: false },
      { where: { id, inProgress: true } },
    );

    if (!match) throw new Err(StatusCodes.BAD_REQUEST, errorMessage.matchNotFound);

    return { message: 'Finished' };
  }

  static async updateMatch(id: number, body: updateMatch) {
    const { homeTeamGoals, awayTeamGoals } = body;

    const [match] = await Matches.update(
      { homeTeamGoals, awayTeamGoals },
      { where: { id, inProgress: true } },
    );

    if (!match) throw new Err(StatusCodes.BAD_REQUEST, errorMessage.matchNotFound);

    return { message: 'Update game' };
  }
}
