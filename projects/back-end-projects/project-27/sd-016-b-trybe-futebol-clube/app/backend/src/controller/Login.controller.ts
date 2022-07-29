import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import LoginService from '../services/Login.services';

export default class LoginController {
  private _loginService: LoginService;

  constructor() {
    this._loginService = new LoginService();
  }

  static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const userLogin = await LoginService.login(req.body);

      return res.status(StatusCodes.OK).json(userLogin);
    } catch (err) {
      next(err);
    }
  }

  static async loginValidate(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization;

      const result = await LoginService.loginValidate(token);

      return res.status(StatusCodes.OK).json(result);
    } catch (err) {
      next(err);
    }
  }
}
