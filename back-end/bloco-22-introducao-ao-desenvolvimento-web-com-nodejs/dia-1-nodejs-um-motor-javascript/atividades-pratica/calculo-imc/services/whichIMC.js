const person = require('../controllers/input');

const whichIMC = (valueIMC) => {
  const { dataPerson: { name, height, weight }} = person;

  let result = '';

  switch (true) {
    case (valueIMC < 18.5):
      result = 'Abaixo do peso (magreza)';
      break;
    case (valueIMC >= 18.5 && valueIMC <= 24.9):
      result = 'Peso normal';
      break;
    case (valueIMC >= 25.0 && valueIMC <= 29.9):
      result = 'Acima do peso (sobrepeso)';
      break;
    case (valueIMC >= 30.0 && valueIMC <= 34.9):
      result = 'Obesidade grau I';
      break;
    case (valueIMC >= 35, 0 && valueIMC <= 39, 9):
      result = 'Obesidade grau II';
      break;
    default:
      result = 'Obesidade grau III e IV';
      break;
  }

  return `
  Olá, ${name}.
  Conforme seus dados:
    Altura: ${height} m
    Peso: ${weight} kg

  Seu Índice de Massa Corporal (IMC) é ${valueIMC}, e você está em situação: ${result}`;
};

module.exports = whichIMC;
