import { ResultSetHeader } from 'mysql2/promise';
import connection from './connection';

import IProduct from '../interfaces/products.interface';

const getAll = async (): Promise<IProduct[]> => {
  //
  const [result] = await connection.execute('SELECT * FROM Trybesmith.Products');

  return result as IProduct[];
};

const create = async (name: string, amount: string): Promise<IProduct> => {
  //
  const [dataInserted] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  const { insertId } = dataInserted;

  return { id: insertId, name, amount };
};

export default {
  getAll,
  create,
};
