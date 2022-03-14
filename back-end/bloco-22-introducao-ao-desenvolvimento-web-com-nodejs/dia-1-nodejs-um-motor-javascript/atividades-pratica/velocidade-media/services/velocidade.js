const input = require('../controller/input');

const velocidade = () => {

  const { data: { distancia, tempo }} = input;

  const media = distancia / tempo;

  return `Velocidade média é de ${media}`;
}

module.exports = velocidade;
