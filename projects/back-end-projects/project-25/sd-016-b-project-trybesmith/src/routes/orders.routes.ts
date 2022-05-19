import { Router } from 'express';

import OrdersController from '../controller/orders.controller';

const route = Router();

route.get('/', OrdersController.getAll);

export default route;