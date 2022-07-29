import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import LeaderboardServices from '../services/Leaderboard.services';

export default class LeaderboardController {
  //
  static async leaderboardAll(req: Request, res: Response, next: NextFunction) {
    const leaderboard = new LeaderboardServices();

    try {
      const result = await leaderboard.leaderboardHome();

      return res.status(StatusCodes.OK).json(result);
    } catch (err) {
      next(err);
    }
  }
}
