import { Request, Response, NextFunction } from 'express';

import validate from '../services/validate';

const checkBody = (req: Request, res: Response, next: NextFunction) => {
  //
  console.log(req.body);
  const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;

  const testNumber = [homeTeam, awayTeam, homeTeamGoals, awayTeamGoals];
  try {
    validate.isNumber(testNumber);

    next();
  } catch (err) {
    next(err);
  }
};

const checkId = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    validate.validateId(Number(id));

    next();
  } catch (err) {
    next(err);
  }
};

const checkBodyUpdate = (req: Request, res: Response, next: NextFunction) => {
  const { homeTeamGoals, awayTeamGoals } = req.body;

  try {
    validate.isNumber([homeTeamGoals, awayTeamGoals]);

    next();
  } catch (err) {
    next(err);
  }
};

const checkTeams = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;

  try {
    await validate.validateTeam([homeTeam, awayTeam]);

    next();
  } catch (err) {
    next(err);
  }
};

export default {
  checkBody,
  checkId,
  checkBodyUpdate,
  checkTeams,
};
