import { Router } from 'express';

import UsersController from '../controller/users.controller';

import UsersMiddlewares from '../middlewares/users.middleware';

const route = Router();

route.post(
  '/',
  UsersMiddlewares.checkBody,
  UsersMiddlewares.verifyUser,
  UsersController.create,
);

export default route;