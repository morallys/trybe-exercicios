import * as dotenv from 'dotenv';
import { readFileSync } from 'fs';
import { sign, verify, Secret, JwtPayload } from 'jsonwebtoken';
import responseLogin from '../types/responseLogin';

dotenv.config();

const jwtConfig: object = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const JWT_SECRET: Secret = readFileSync('jwt.evaluation.key', 'utf-8');

class Token {
  public static async create(userData: responseLogin): Promise<string> {
    //
    const token = sign(
      { data: userData },
      JWT_SECRET,
      jwtConfig,
    );

    return token;
  }

  public static check(token: string): string | JwtPayload {
    return verify(token, JWT_SECRET);
  }
}

export default Token;
