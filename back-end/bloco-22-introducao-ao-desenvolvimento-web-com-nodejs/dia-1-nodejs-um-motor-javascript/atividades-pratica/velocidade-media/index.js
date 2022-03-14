const velocidade = require('./services/velocidade');
const inputUser = require('./controller/input');

const main = () => {
  console.log('Cálculo da velocidade média de um veículo em uma corrida. Insira os dados solicitados.');

  inputUser.input();

  console.log(velocidade());
}

main();