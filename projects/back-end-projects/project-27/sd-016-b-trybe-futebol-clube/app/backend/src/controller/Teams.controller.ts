import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import TeamsServices from '../services/Teams.services';

export default class TeamsController {
  private _teamsServices: TeamsServices;

  constructor() {
    this._teamsServices = new TeamsServices();
  }

  static async teamsFindAll(req: Request, res: Response, next: NextFunction) {
    try {
      const teams = await TeamsServices.teamsFindAll();

      return res.status(StatusCodes.OK).json(teams);
    } catch (err) {
      next(err);
    }
  }

  static async teamsFindByPk(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const team = await TeamsServices.teamFindByPk(id);

      return res.status(StatusCodes.OK).json(team);
    } catch (err) {
      next(err);
    }
  }
}
