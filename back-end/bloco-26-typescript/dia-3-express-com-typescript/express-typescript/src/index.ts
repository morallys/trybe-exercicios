import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import ProductsRouter from './routes/products.routes';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => res.status(StatusCodes.OK).send('Compilando corretamente'));

app.use('/products', ProductsRouter);

app.listen(PORT, () => console.log(`Exemplo rodando na porta ${PORT}!`))