import { Request, Response, NextFunction } from 'express';
import errors from 'restify-errors';

import validate from '../services/validate';

const checkBody = (req: Request, res: Response, next: NextFunction) => {
  //
  const { name, amount } = req.body;

  try {
    validate.validateName(name);
    validate.validateAmount(amount);

    next();
  } catch (error) {
    const typeError = error as errors.HttpError;

    return res
      .status(typeError.statusCode)
      .json({ message: typeError.message });
  }
};

export default {
  checkBody,
};