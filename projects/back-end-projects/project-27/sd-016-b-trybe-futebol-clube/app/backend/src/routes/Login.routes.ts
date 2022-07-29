import { Router } from 'express';

import LoginController from '../controller/Login.controller';
import loginMiddleware from '../middlewares/login.middleware';

const router = Router();

router
  .get('/validate', LoginController.loginValidate)
  .post('/', loginMiddleware.checkBody, LoginController.login);

export default router;
