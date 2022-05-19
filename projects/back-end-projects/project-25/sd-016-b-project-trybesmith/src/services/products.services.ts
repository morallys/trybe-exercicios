import IProduct from '../interfaces/products.interface';
import ProductsModel from '../models/products.model';

const getAll = async (): Promise<IProduct[]> => {
  //
  const products = await ProductsModel.getAll();

  return products;
};

const create = async (name: string, amount: string): Promise<IProduct> => {
  //
  const product = await ProductsModel.create(name, amount);

  return product;
};

export default {
  getAll,
  create,
};