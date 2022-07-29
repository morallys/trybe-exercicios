import { Router } from 'express';

import CarController from '../controllers/Car.controller';
import CarModel from '../models/Car.model';
import CarMongooseModel from '../models/schemas/Car.schema';
import CarService from '../services/Car.service';

const router = Router();

const carModel = new CarModel(CarMongooseModel);
const carService = new CarService(carModel);
const carController = new CarController(carService);

router
  .get('/', (req, res, next) => carController.findAll(req, res, next))
  .get('/:id', (req, res, next) => carController.findById(req, res, next))
  .put('/:id', (req, res, next) => carController.update(req, res, next))
  .delete('/:id', (req, res, next) => carController.delete(req, res, next))
  .post('/', (req, res, next) => carController.create(req, res, next));

export default router;