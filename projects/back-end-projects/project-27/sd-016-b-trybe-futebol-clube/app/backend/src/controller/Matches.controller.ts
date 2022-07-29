import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import MatchesService from '../services/Matches.services';

export default class MatchesController {
  //
  static async matches(req: Request, res: Response, next: NextFunction) {
    try {
      const { inProgress } = req.query;
      let query;

      if (inProgress === 'true') query = true;
      else if (inProgress === 'false') query = false;

      const matches = await MatchesService.matchesFindAll(query);

      return res.status(StatusCodes.OK).json(matches);
    } catch (err) {
      next(err);
    }
  }

  static async createMatch(req: Request, res: Response, next: NextFunction) {
    try {
      const match = await MatchesService.createMatch(req.body);

      return res.status(StatusCodes.CREATED).json(match);
    } catch (err) {
      next(err);
    }
  }

  static async matchFinish(req: Request, res: Response, next: NextFunction) {
    console.log('matches.controller matchFinish');

    try {
      const { id } = req.params;

      const update = await MatchesService.matchFinish(Number(id));

      return res.status(StatusCodes.OK).json(update);
    } catch (err) {
      next(err);
    }
  }

  static async updateMatch(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    try {
      const update = await MatchesService.updateMatch(Number(id), req.body);

      return res.status(StatusCodes.OK).json(update);
    } catch (err) {
      next(err);
    }
  }
}
