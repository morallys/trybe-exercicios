import { Car, CarSchema } from '../interfaces/CarInterface';
import ICarModel from '../models/interfaces/Car.model';
import Err from '../utils/Err';
import errorMessages from '../utils/errorMessages';
import ICarService from './interfaces/Car.service';

export default class CarService implements ICarService {
  private _carModel: ICarModel;

  constructor(carModel: ICarModel) {
    this._carModel = carModel;
  }

  async create(car: Car): Promise<Car> {
    CarSchema.parse(car);

    const data = await this._carModel.create(car);

    return data;
  }

  async read(): Promise<Car[]> {
    const data = await this._carModel.read();

    return data;
  }

  async readOne(id: string): Promise<Car | null> {
    if (id.length < 24) {
      throw new Err(400, errorMessages.mustHaveCharacters);
    }

    const data = await this._carModel.readOne(id);

    if (data === null) {
      throw new Err(404, errorMessages.objectNotFound);
    }

    return data;
  }

  async update(id: string, car: Car): Promise<Car | null> {
    if (id.length < 24) {
      throw new Err(400, errorMessages.mustHaveCharacters);
    }

    const data = await this._carModel.update(id, car);

    if (data === null) {
      throw new Err(404, errorMessages.objectNotFound);
    }

    return data;
  }

  async delete(id: string): Promise<Car | null> {
    if (id.length < 24) {
      throw new Err(400, errorMessages.mustHaveCharacters);
    }

    const data = await this._carModel.delete(id);

    if (data === null) {
      throw new Err(404, errorMessages.objectNotFound);
    }

    return data;
  }
}
