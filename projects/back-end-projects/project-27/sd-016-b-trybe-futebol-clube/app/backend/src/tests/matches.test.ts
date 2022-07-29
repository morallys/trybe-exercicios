import * as sinon from 'sinon';
import * as chai from 'chai';
import * as jwt from 'jsonwebtoken';
import { Response } from 'superagent';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import matches from '../database/models/matches';
import mocks from './mocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa Rota /matches', async () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(matches, 'findAll')
      .resolves(mocks.allMatches as unknown as matches[]);
  });

  after(() => {
    sinon.restore();
  });

  it('Quando a rota for acessada sem queryString, /matches, Retorna um array de todas as partidas', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/matches');

    expect(chaiHttpResponse.body).to.be.deep.equal(mocks.allMatches);
    expect(chaiHttpResponse).to.have.status(200);
  });

  it('Quando a rota for acessada com queryString incorreta, /matches?inProgress=undefined, Retorna o array com todas as partidas', async () => {
    chaiHttpResponse = await chai
       .request(app)
       .get('/matches?inProgress=SituacaoUndefined');

    expect(chaiHttpResponse.body).to.be.deep.equal(mocks.allMatches);
    expect(chaiHttpResponse).to.have.status(200);
  });
});

describe('Testa Rota /matches?inProgress=true', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(matches, 'findAll')
      .resolves(mocks.matchesProgressTrue as unknown as matches[]);
  });

  after(() => {
    sinon.restore();
  });

  it('Quando a rota for acessada com queryString com true, /matches?inProgress=true, Retorna o array com as partidas com progresso "true"', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/matches?inProgress=true');

    expect(chaiHttpResponse.body).to.be.deep.equal(mocks.matchesProgressTrue);
    expect(chaiHttpResponse).to.have.status(200);
  });
});

describe('Testa Rota /matches?inProgress=false', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(matches, 'findAll')
      .resolves(mocks.matchesProgressFalse as unknown as matches[]);
  });

  after(() => {
    sinon.restore();
  });

  it('Quando a rota for acessada com queryString com true, /matches?inProgress=true, Retorna o array com as partidas com progresso "false"', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/matches?inProgress=false');

    expect(chaiHttpResponse.body).to.be.deep.equal(mocks.matchesProgressFalse);
    expect(chaiHttpResponse).to.have.status(200);
  });
});

describe('Testa se é possível adicionar uma partida com status de inProgress true', () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(matches, 'create')
      .resolves(mocks.responseAddMatch as unknown as matches);
  });

  after(() => {
    sinon.restore();
  });

  it('Testa se é possível criar uma partida', async () => {
    const validToken = await chai
      .request(app)
      .post('/login')
      .send(mocks.login);

    chaiHttpResponse = await chai
      .request(app)
      .post('/matches')
      .set('Authorization', validToken.body.token)
      .send(mocks.addMatch);

    expect(chaiHttpResponse).to.have.status(201);
    expect(chaiHttpResponse.body).to.be.deep.equal(mocks.responseAddMatch);
  });
});
