import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import OrdersServices from '../services/orders.services';

const getAll = async (_req: Request, res: Response): Promise<Response> => {
  //
  const orders = await OrdersServices.getAll();

  return res.status(StatusCodes.OK).json(orders);
};

export default {
  getAll,
};