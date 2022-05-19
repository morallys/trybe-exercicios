import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import UsersServices from '../services/users.services';
import handleToken from '../services/handleToken';

const create = async (req: Request, res: Response) => {
  //
  const result = await UsersServices.create(req.body);

  const token = handleToken.createToken(result);

  return res.status(StatusCodes.CREATED).json({ token });
};

export default {
  create,
};