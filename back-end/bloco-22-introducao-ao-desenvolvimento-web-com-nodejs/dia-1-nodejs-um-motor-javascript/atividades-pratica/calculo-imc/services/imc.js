const person = require('../controllers/input');

const calcIMC = () => {
  person.input();

  const { weight, height } = person.dataPerson;

  return (weight / Math.pow(height, 2)).toFixed(2);
};

module.exports = calcIMC;
