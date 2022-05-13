import { Router } from 'express';
import ProductsController from "../controller/products.controller";

const router = Router();

const productController = new ProductsController();

router
  .get('/', productController.getAll)
  .post('/', productController.create);

export default router;