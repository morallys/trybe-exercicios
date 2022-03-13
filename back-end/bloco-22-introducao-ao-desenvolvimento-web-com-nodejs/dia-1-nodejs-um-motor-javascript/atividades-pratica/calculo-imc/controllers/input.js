const readline = require('readline-sync');

const dataPerson = {
  name: '',
  height: 0.0,
  weight: 0.0
};

const input = () => {
  dataPerson.name = readline.question('Qual o seu nome? ');
  dataPerson.height = readline.questionFloat('Qual a sua altura (ex: 1.79)? ');
  dataPerson.weight = readline.questionFloat('Qual o seu peso (ex: 80.5)? ');
}

module.exports = {
  dataPerson,
  input
};
