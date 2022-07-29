import { expect } from 'chai';
import sinon from 'sinon';

import CarModel from '../../../models/Car.model';
import CarMongooseModel from '../../../models/schemas/Car.schema';
import { Model, Types } from 'mongoose';
import { carMock, carMockList } from '../../mocks/CarMock';

describe('Testa Car Model', () => {
  describe('Cria um Carro', () => {
    //
    before(() => {
      sinon.stub(Model, 'create').resolves(carMock);
    })

    after(() => sinon.restore());

    it('Cria um carro corretamente', async () => {
      const carModel = new CarModel(CarMongooseModel);

      const carCreated = await carModel.create(carMock);

      expect(carCreated).to.be.deep.equal(carMock);
    });
  });

  describe('Exibe todos os carros', () => {
    //
    before(() => {
      sinon.stub(Model, 'find').resolves(carMockList);
    });

    after(() => sinon.restore());

    it('cadastrados na base', async () => {
      const carModel = new CarModel(CarMongooseModel);

      const carList = await carModel.read();

      expect(carList).to.be.deep.equal(carMockList);
    });
  });

  describe('Exibe o carro do Id passado por parâmetro', () => {
    //
    before(() => {
      sinon.stub(Model, 'findById').resolves(carMock);
    });

    after(() => sinon.restore());

    it('cadastrado na base', async () => {
      const carModel = new CarModel(CarMongooseModel);
      const idCar = String(new Types.ObjectId());

      const carFind = await carModel.readOne(idCar);

      expect(carFind).to.be.deep.equal(carMock);
    });
  });

  describe('Realiza o update de um carro a partir do Id passado por parâmetro', () => {
    //
    before(() => {
      sinon.stub(Model, 'findOneAndUpdate').resolves(carMock);
    });

    after(() => sinon.restore());

    it('cadastrado na base', async () => {
      const carModel = new CarModel(CarMongooseModel);
      const idCar = String(new Types.ObjectId());

      const carFind = await carModel.update(idCar, carMock);

      expect(carFind).to.be.deep.equal(carMock);
    });
  });

  describe('Deleta um carro a partir de um Id passado por parâmetro', () => {
    //
    before(() => {
      sinon.stub(Model, 'findByIdAndDelete').resolves(carMock);
    });

    after(() => sinon.restore());

    it('cadastrado na base', async () => {
      const carModel = new CarModel(CarMongooseModel);
      const idCar = String(new Types.ObjectId());

      const carFind = await carModel.delete(idCar);

      expect(carFind).to.be.deep.equal(carMock);
    });
  });
});
