import * as express from 'express';

import useRoutes from './routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    useRoutes(this.app);
  }

  private config(): void {
    this.app.use(express.json());

    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Methods',
        'GET,POST,DELETE,OPTIONS,PUT,PATCH',
      );
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT);
    console.log('Ouvindo na porta %s', PORT);
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
