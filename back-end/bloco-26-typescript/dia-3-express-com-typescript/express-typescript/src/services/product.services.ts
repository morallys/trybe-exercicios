import connection from "../model/connection";
import ProductModel from "../model/product.model";
import Product from "../interfaces/products.interface";

export default class ProductsServices {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();

    return products;
  }

  public async create(product: Product): Promise<Product> {
    //
    const products = await this.model.create(product);

    return products;
  }
}
