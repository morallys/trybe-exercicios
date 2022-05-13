import { Pool, ResultSetHeader } from 'mysql2/promise';

import Product from "../interfaces/products.interface";

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const result = await this.connection.execute('SELECT * FROM Products');

    const [rows] = result;

    return rows as Product[];
  }

  public async create(product: Product): Promise<Product> {
    //
    const { id, name, brand, price, manufacturing_date, expiration_date } = product;

    const result = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO Products VALUES (?, ?, ?, ?, ?, ?)`,
      [id, name, brand, price, manufacturing_date, expiration_date]
    );

    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }
}