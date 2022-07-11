import { Router } from "express";

import BookRoutes from './Book.routes';
import errorMiddleware from "../middlewares/error.middlewares";

const router = Router();

router
  .use('/books', BookRoutes)
  .use(errorMiddleware);


export default router;