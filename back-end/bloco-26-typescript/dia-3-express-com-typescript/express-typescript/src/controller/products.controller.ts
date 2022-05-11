import { Request, Response} from 'express';
import { StatusCodes } from 'http-status-codes';
import Product from '../interfaces/products.interface';

import ProductsServices from '../services/product.services';

export default class ProductsController {
  constructor(private productService = new ProductsServices()) {}

  public getAll = async (_req: Request, res: Response): Promise<void> => {
    const products = await this.productService.getAll();

    res.status(StatusCodes.OK).json(products);
  };

  public create = async (req: Request, res: Response) => {
    //
    const products = await this.productService.create(req.body);

    res.status(StatusCodes.CREATED).json(products);
  }
}
