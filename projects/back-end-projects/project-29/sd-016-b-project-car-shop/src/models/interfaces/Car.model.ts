import { Car } from '../../interfaces/CarInterface';

export default interface ICarModel {
  create(obj: Car): Promise<Car>;
  read(): Promise<Car[]>;
  readOne(id: string): Promise<Car | null>;
  update(id: string, obj: Car): Promise<Car | null>;
  delete(id: string): Promise<Car | null>;
}