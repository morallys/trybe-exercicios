const { expect } = require('chai');
const sinon = require('sinon');

const numeros = require('../numerosNaturais');

describe('Executa a função numerosNaturais', () => {
  describe('Verifica se um número é positivo, negativo ou neutro', () => {

    describe('verifica se o tipo é string, e o número é positivo', () => {
      before(() => {
        sinon.stub(numeros, 'numerosNaturais').returns('positivo');
      });

      it('Verifica se a resposta é uma string', () => {
        const result = numeros.numerosNaturais(4);

        expect(result).to.be.a('string');
      });

      it('Verifica se o número é maior que 0', () => {
        const result = numeros.numerosNaturais(4);

        expect(result).equals('positivo');
      });
    });

    // describe('Verifica se o tipo é string, e o número é negativo', () => {
    //   before(() => {
    //     sinon.stub(numerosNaturais(-4)).returns('negativo');
    //   });

    //   it('Verifica se a resposta é uma string', () => {
    //     const result = numerosNaturais(-4);

    //     expect(result).to.be.a('string');
    //   });

    //   it('Verifica se o número é menor que 0', () => {
    //     const result = numerosNaturais(-4);

    //     expect(result).equals('negativo');
    //   });
    // });

    // describe('Verifica se o tipo é string, e o número é neutro', () => {
    //   before(() => {
    //     sinon.stub(numerosNaturais(0)).returns('neutro');
    //   });

    //   it('Verifica se a resposta é uma string', () => {
    //     const result = numerosNaturais(0);

    //     expect(result).to.be.a('string');
    //   });

    //   it('Verifica se o número é 0', () => {
    //     const result = numerosNaturais(0);

    //     expect(result).equals('neutro');
    //   });
    // });
  });
});