import * as sinon from 'sinon';
import * as chai from 'chai';
import * as jwt from 'jsonwebtoken';
import { Response } from 'superagent';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import users from '../database/models/users';
import mocks from './mocks';

chai.use(chaiHttp);

const { expect } = chai;

describe('Testa Rota /login', async () => {
  //
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(users, "findOne")
      .resolves(mocks.responseLoginModel as users);

    sinon
      .stub(jwt, "sign")
      .resolves('fakeToken123');
  });

  after(()=>{
    sinon.restore();
  })

  it('Verifica se o login é realizado e retorna o usuário com o token', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send(mocks.login);

  expect(chaiHttpResponse.body).to.have.property('user');
  expect(chaiHttpResponse.body).to.have.property('token');
  expect(chaiHttpResponse.body.user).to.not.have.property('password');
  expect(chaiHttpResponse.body).to.have.deep.equal(mocks.responseLogin);
  expect(chaiHttpResponse).to.have.status(200);
});

  it('Verifica quando for passado um e-mail incorreto, se retorna os dados esperados', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'test@test.com', password: 'test123' });

    expect(chaiHttpResponse.body).to.be.have.property('message');
    expect(chaiHttpResponse.body.message).to.be.equal('Incorrect email or password');
    expect(chaiHttpResponse).to.have.status(401);
  })

  it('Verifica quando for passado o password incorreto, se retorna os dados esperados', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'admin@admin.com', password: 'test123' });

    expect(chaiHttpResponse.body).to.be.have.property('message');
    expect(chaiHttpResponse.body.message).to.be.equal('Incorrect email or password');
    expect(chaiHttpResponse).to.have.status(401);
  });
});

describe('Testa Rota /login/validate', async () => {
  let chaiHttpResponse: Response;

  before(async () => {
    sinon
      .stub(users, "findOne")
      .resolves(mocks.responseLoginModel as users);
  });

  after(()=>{
    sinon.restore();
  })

  it('Retorna o tipo do usuário quando o token é passado corretamente', async () => {
    const test = await chai.request(app).post('/login').send(mocks.login);

    chaiHttpResponse = await chai
      .request(app)
      .get('/login/validate')
      .set('Authorization', test.body.token);

    expect(chaiHttpResponse.body).to.be.equal('admin');
    expect(chaiHttpResponse).to.have.status(200);
  });

  it('Retorna uma messagem de erro, quando o token não é passado', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/login/validate');

    expect(chaiHttpResponse.body).to.be.have.property('message');
    expect(chaiHttpResponse.body.message).to.be.equal('Token not found');
    expect(chaiHttpResponse).to.have.status(400);
  });
});