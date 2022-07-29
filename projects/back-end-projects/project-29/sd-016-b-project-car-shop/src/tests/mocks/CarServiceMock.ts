import { Car } from "../../interfaces/CarInterface";
import ICarService from "../../services/interfaces/Car.service";
import { carMock, carMockList } from "./CarMock";

export default class CarServiceMock implements ICarService {
  async create(car: Car): Promise<Car> {
    return car;
  };

  async read(): Promise<Car[]> {
    return carMockList;
  };

  async readOne(id: string): Promise<Car | null> {
    return carMock;
  };

  async update(id: string, obj: Car): Promise<Car | null> {
    return carMock;
  };

  async delete(id: string): Promise<Car | null> {
    return carMock;
  };
}