import express from 'express';
import 'express-async-errors';

import productsRoutes from './routes/products.routes';
import usersRoutes from './routes/users.routes';
import errorMiddleware from './middlewares/error';
import ordersRoutes from './routes/orders.routes';

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/orders', ordersRoutes);

app.use(errorMiddleware);

export default app;
