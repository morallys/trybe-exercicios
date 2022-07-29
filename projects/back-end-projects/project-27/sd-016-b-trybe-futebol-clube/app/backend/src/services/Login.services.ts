import * as bcrypt from 'bcryptjs';
import { StatusCodes } from 'http-status-codes';
import { readFileSync } from 'fs';
import { Secret, verify } from 'jsonwebtoken';

import Err from '../utils/Err';
import login from '../types/login';
import Users from '../database/models/users';
import handleToken from './handleToken';
import errorMessage from '../utils/errorMessages';
import tokenType from '../types/token';

export default class LoginService {
  //
  static async login(body: login) {
    const { email: emailLogin, password } = body;

    const result = await Users.findOne({ where: { email: emailLogin } });

    if (!result) throw new Err(StatusCodes.UNAUTHORIZED, errorMessage.incorrectFields);

    if (!bcrypt.compareSync(password, result.password as string)) {
      throw new Err(StatusCodes.UNAUTHORIZED, errorMessage.incorrectFields);
    }

    const { id, username, email, role } = result;

    const token = await handleToken.create({ id, username, role, email });

    return { user: { id, username, role, email }, token };
  }

  static async loginValidate(token: string | undefined) {
    //
    if (!token) throw new Err(StatusCodes.BAD_REQUEST, errorMessage.tokenNotFound);

    try {
      const JWT_SECRET: Secret = readFileSync('jwt.evaluation.key', 'utf-8');

      const decoded: tokenType = verify(token as string, JWT_SECRET) as tokenType;

      return decoded.data.role;
      //
    } catch (error) {
      throw new Err(StatusCodes.UNAUTHORIZED, errorMessage.invalidToken);
    }
  }
}
