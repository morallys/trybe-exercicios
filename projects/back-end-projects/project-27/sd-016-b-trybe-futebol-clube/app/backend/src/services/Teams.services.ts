import { StatusCodes } from 'http-status-codes';

import Err from '../utils/Err';
import Teams from '../database/models/teams';
import errorMessage from '../utils/errorMessages';

export default class TeamsServices {
  //
  static async teamsFindAll() {
    const result = await Teams.findAll();

    if (!result) throw new Err(StatusCodes.NOT_FOUND, errorMessage.teamsNotFound);

    return result;
  }

  static async teamFindByPk(id: string) {
    const convertId = Number(id);

    if (Number.isNaN(convertId)) throw new Err(StatusCodes.BAD_REQUEST, errorMessage.number);

    const result = await Teams.findByPk(id);

    if (!result) throw new Err(StatusCodes.BAD_REQUEST, errorMessage.teamNotFound);

    return result;
  }
}
