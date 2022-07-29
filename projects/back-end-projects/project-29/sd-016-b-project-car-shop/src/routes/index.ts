import { Express } from 'express';

import CarRoutes from './Car.routes';
import errorMiddleware from '../middlewares/error.middleware';

const routes = (app: Express) => {
  app.use('/cars', CarRoutes);

  app.use(errorMiddleware);
};

export default routes;