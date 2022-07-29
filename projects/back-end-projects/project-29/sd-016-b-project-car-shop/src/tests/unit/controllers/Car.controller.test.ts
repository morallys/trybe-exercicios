import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');

import CarController from '../../../controllers/Car.controller';
import CarServiceMock from '../../mocks/CarServiceMock';
import { NextFunction, Request, Response } from 'express';
import { carMock } from '../../mocks/CarMock';
import { Types } from 'mongoose';


chai.use(chaiHttp);

const { expect } = chai;

describe('Testa Car Controller', () => {

  describe('Cria um carro', () => {
    const req = {} as Request;
    const res = {} as Response;
    const next = () => ({} as NextFunction);

    before(async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      req.body = carMock;
    });

    after(() => sinon.restore());

    it('Cria um carro corretamente', async () => {
      const carController = new CarController(new CarServiceMock());

      await carController.create(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    });
  });

  describe('Exibe todos os carros', () => {
    const req = {} as Request;
    const res = {} as Response;
    const next = () => ({} as NextFunction);

    before(async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
    });

    after(() => sinon.restore());

    it('Cadastrados na base', async () => {
      const carController = new CarController(new CarServiceMock());

      await carController.findAll(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    });
  });

  describe('Exibe o carro do Id passado por parâmetro', () => {
    const req = { } as Request;
    const res = {} as Response;
    const next = () => ({} as NextFunction);

    before(async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      req.params = { id: String(new Types.ObjectId()) }
    });

    after(() => sinon.restore());

    it('Cadastrado na base', async () => {
      const carController = new CarController(new CarServiceMock());

      await carController.findById(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    });
  });

  describe('Realiza o update de um carro a partir do Id passado por parâmetro e as informações do carro', () => {
    const req = {} as Request;
    const res = {} as Response;
    const next = () => ({} as NextFunction);

    before(async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      req.params = { id: String(new Types.ObjectId()) };
      req.body = carMock;
    });

    after(() => sinon.restore());

    it('Cadastrado na base', async () => {
      const carController = new CarController(new CarServiceMock());

      await carController.update(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    });
  });

  describe('Deleta um carro a partir de um Id passado por parâmetro', () => {
    const req = {} as Request;
    const res = {} as Response;
    const next = () => ({} as NextFunction);

    before(async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns(res);
      req.params = { id: String(new Types.ObjectId()) };
    });

    after(() => sinon.restore());

    it('Cadastrado na base', async () => {
      const carController = new CarController(new CarServiceMock());

      await carController.delete(req, res, next);

      expect((res.status as sinon.SinonStub).calledWith(204)).to.be.true;
    });
  });
});