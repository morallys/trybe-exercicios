import { Car } from '../../interfaces/CarInterface';
import ICarModel from '../../models/interfaces/Car.model';
import { carMock, carMockList } from './CarMock';

export default class CarModelMock implements ICarModel {
  async create(entity: Car): Promise<Car> {
    return entity;
  }

  async read(): Promise<Car[]> {
    return carMockList;
  }

  async readOne(id: string): Promise<Car | null> {
    return carMock;
  }

  async update(id: string, obj: Car): Promise<Car | null> {
    return carMock;
  }

  async delete(id: string): Promise<Car | null> {
    return carMock;
  }
}
