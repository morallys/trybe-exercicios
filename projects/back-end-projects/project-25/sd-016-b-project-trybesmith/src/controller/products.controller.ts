import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import ProductsServices from '../services/products.services';

const getAll = async (_req: Request, res: Response): Promise<Response> => {
  //
  const products = await ProductsServices.getAll();

  return res.status(StatusCodes.OK).json(products);
};

const create = async (req: Request, res: Response): Promise<Response> => {
  //
  const { name, amount } = req.body;

  const products = await ProductsServices.create(name, amount);

  return res.status(StatusCodes.CREATED).json(products);
};

export default {
  getAll,
  create,
};