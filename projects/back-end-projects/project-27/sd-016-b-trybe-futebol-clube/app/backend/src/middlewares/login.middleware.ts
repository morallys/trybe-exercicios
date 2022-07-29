import { Request, Response, NextFunction } from 'express';

import validate from '../services/validate';

const checkBody = (req: Request, res: Response, next: NextFunction) => {
  //
  const { email, password } = req.body;

  try {
    validate.validatePassword(password);
    validate.validateEmail(email);

    next();
  } catch (err) {
    //
    next(err);
  }
};

export default {
  checkBody,
};
