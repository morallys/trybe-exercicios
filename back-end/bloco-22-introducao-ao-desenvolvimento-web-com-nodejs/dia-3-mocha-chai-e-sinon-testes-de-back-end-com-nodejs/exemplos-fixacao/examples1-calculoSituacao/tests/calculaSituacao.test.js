const { expect } = require('chai');
const calculaSituacao = require('../calculaSituacao');

describe('Testa a função calculaSituacao', () => {
  it('Retorna "reprovado" quando a média for menor que 7', () => {
    const resposta = calculaSituacao(4);

    expect(resposta).equals('reprovado');
  });

  it('Retorna "aprovado" quando a média for maior que 7', () => {
    const resposta = calculaSituacao(8);

    expect(resposta).equals('aprovado');
  });

  it('Retorna "aprovado" se a média for igual a 7', () => {
    const resposta = calculaSituacao(7);

    expect(resposta).equals('aprovado');
  });
});
