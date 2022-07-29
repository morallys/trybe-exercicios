import { expect } from 'chai';
import { Types } from 'mongoose';

import CarService from '../../../services/Car.service';
import { carMock, carMockList } from '../../mocks/CarMock';
import CarModelMock from '../../mocks/CarModelMock';

describe('Testa Car Service', () => {

  describe('Cria um Carro', () => {
    it('Cria um carro corretamente', async () => {
      const carService = new CarService(new CarModelMock());

      const carCreated = await carService.create(carMock);

      expect(carCreated).to.be.deep.equal(carMock);
    });
  });

  describe('Exibe todos os carros', () => {
    it('Cadastrados na base', async () => {
      const carService = new CarService(new CarModelMock());

      const findAll = await carService.read();

      expect(findAll).to.be.deep.equal(carMockList);
    });
  });

  describe('Exibe o carro do Id passado por parâmetro', () => {
    it('Cadastrado na base', async () => {
      const carService = new CarService(new CarModelMock());
      const idCar = String(new Types.ObjectId());

      const findById = await carService.readOne(idCar);

      expect(findById).to.be.deep.equal(carMock);
    });
  });

  describe('Realiza o update de um carro a partir do Id passado por parâmetro', () => {
    it('Cadastrado na base', async () => {
      const carService = new CarService(new CarModelMock());
      const idCar = String(new Types.ObjectId());

      const updateCar = await carService.update(idCar, carMock);

      expect(updateCar).to.be.deep.equal(carMock);
    });
  });

  describe('Deleta um carro a partir de um Id passado por parâmetro', () => {
    it('Cadastrado na base', async () => {
      const carService = new CarService(new CarModelMock());
      const idCar = String(new Types.ObjectId());

      const deleteCar = await carService.delete(idCar);

      expect(deleteCar).to.be.deep.equal(carMock);
    });
  });
});