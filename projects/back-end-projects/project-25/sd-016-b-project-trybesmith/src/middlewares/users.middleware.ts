import { Request, Response, NextFunction } from 'express';
import errors from 'restify-errors';
import { StatusCodes } from 'http-status-codes';

import validate from '../services/validate';
import User from '../models/users.model';

const checkBody = (req: Request, res: Response, next: NextFunction) => {
  //
  const { username, classe, level, password } = req.body;

  try {
    //
    validate.validateUsername(username);
    validate.validateClasse(classe);
    validate.validateLevel(level);
    validate.validatePassword(password);

    next();
  } catch (error) {
    const typeError = error as errors.HttpError;

    return res
      .status(typeError.statusCode)
      .json({ message: typeError.message });
  }
};

const verifyUser = async (req: Request, res: Response, next: NextFunction) => {
  //
  const { username } = req.body;

  const checkUser = await User.getByUsername(username);

  if (checkUser) {
    return res
      .status(StatusCodes.CONFLICT)
      .json({ message: 'User already registered' });
  }

  next();
};

export default {
  checkBody,
  verifyUser,
};