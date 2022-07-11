import express from "express";
import routes from './routes';
import createConnection from './models/connection';

export default class App {
  public express: express.Express;

  constructor() {
    this.express = express();
    this.middlewares();
    this.routes();

    createConnection();
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private routes() {
    this.express.use(routes);
  }

  // public start(PORT: string | number): void {
  //   this.express.listen(PORT);
  //   console.log('Ouvindo a porta %s.', PORT);
  // }
}