import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import IUsers from '../interfaces/users.interface';

dotenv.config();

const createToken = (user: IUsers) => {
  //
  const { id, username } = user;

  const jwtConfig: object = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign(
    { data: { id, username } },
    String(process.env.JWT_SECRET),
    jwtConfig,
  );

  return token;
};

const validateToken = (username: string) => {
  //
  const jwtConfig: object = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: username }, String(process.env.JWT_SECRET), jwtConfig);

  return token;
};

export default {
  createToken,
  validateToken,
};