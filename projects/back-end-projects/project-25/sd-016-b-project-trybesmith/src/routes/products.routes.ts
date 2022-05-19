import { Router } from 'express';

import ProductsController from '../controller/products.controller';

import ProductsMiddlewares from '../middlewares/products.middleware';

const route = Router();

route
  .get('/', ProductsController.getAll)
  .post('/', ProductsMiddlewares.checkBody, ProductsController.create);
export default route;
