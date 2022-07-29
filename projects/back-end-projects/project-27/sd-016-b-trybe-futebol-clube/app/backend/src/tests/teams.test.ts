import * as sinon from 'sinon';
import * as chai from 'chai';
import { Response } from 'superagent';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import teams from '../database/models/teams';
import mocks from './mocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa Rota /teams', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(teams, "findAll")
      .resolves(mocks.allTeams as unknown as teams[]);
  });

  after(()=>{
    sinon.restore();
  })

  it("Retorna um array de times com id's e nomes dos times", async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/teams');

    expect(chaiHttpResponse.body).to.be.deep.equal(mocks.allTeams);
    expect(chaiHttpResponse).to.have.status(200);
  });
});

describe('Testa Rota /teams/:id', () => {
  let chaiHttpResponse: Response;

  it('Quando recebe um id correto, retorna o id e o nome do time', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/teams/5');

    expect(chaiHttpResponse.body).to.be.deep.equal(mocks.idTeam);
    expect(chaiHttpResponse).to.have.status(200);
  });

  it('Quando recebe um id que não existe, retorna um erro', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/teams/99');

    expect(chaiHttpResponse.body).to.have.property('message');
    expect(chaiHttpResponse.body.message).to.be.equal('There is no team with such id!');
    expect(chaiHttpResponse).to.have.status(400);
  });

  it('Quando recebe uma string nos parâmetros, retorna um erro', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/teams/string');

    expect(chaiHttpResponse.body).to.have.property('message');
    expect(chaiHttpResponse.body.message).to.be.equal('Id must be a number');
    expect(chaiHttpResponse).to.have.status(400);
  });
});