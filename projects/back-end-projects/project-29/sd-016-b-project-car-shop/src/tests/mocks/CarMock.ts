import { Car } from '../../interfaces/CarInterface';

export const carMock: Car = {
  model: 'Fuscão preto',
  year: 1969,
  color: 'black',
  buyValue: 399000,
  status: undefined,
  doorsQty: 2,
  seatsQty: 4,
};

export const carMockList: Car[] = [carMock];