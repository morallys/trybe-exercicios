import { Request, Response, NextFunction } from 'express';
import { Car } from '../interfaces/CarInterface';

import ICarService from '../services/interfaces/Car.service';
import Err from '../utils/Err';
import errorMessages from '../utils/errorMessages';
import ICarController from './interfaces/Car.controller';

export default class CarController implements ICarController {
  private _carService: ICarService;

  constructor(carService: ICarService) {
    this._carService = carService;
  }

  public async findAll(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void | Response> {
    //
    try {
      const allCars = await this._carService.read();

      return res.status(200).json(allCars);
    } catch (err) {
      next(err);
    }
  }

  public async findById(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void | Response> {
    //
    try {
      const { id } = req.params;

      const car = await this._carService.readOne(id);

      return res.status(200).json(car);
    } catch (err) {
      next(err);
    }
  }

  public async create(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    //
    try {
      const {
        model, year, color, buyValue, status, seatsQty, doorsQty } = req.body;

      const carCreated = await this._carService.create({
        model, year, color, buyValue, status, seatsQty, doorsQty });

      return res.status(201).json(carCreated);
    } catch (err) {
      next(err);
    }
  }

  public async update(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    //
    try {
      if (Object.values(req.body).length === 0) {
        throw new Err(400, errorMessages.bodyNotFound);
      }

      const { id } = req.params;
      const {
        model, year, color, buyValue, seatsQty, doorsQty } = req.body;

      const car: Car = { model, year, color, buyValue, seatsQty, doorsQty };

      const updateCar = await this._carService.update(id, car);

      return res.status(200).json(updateCar);
    } catch (err) {
      next(err);
    }
  }

  public async delete(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<void | Response> {
    //
    try {
      const { id } = req.params;

      await this._carService.delete(id);

      return res.status(204).end();
    } catch (err) {
      next(err);
    }
  }
}
