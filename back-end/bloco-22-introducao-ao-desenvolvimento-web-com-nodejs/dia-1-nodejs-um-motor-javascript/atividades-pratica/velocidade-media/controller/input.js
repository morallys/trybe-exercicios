const readline = require('readline-sync');

const data = {
  distancia: 0,
  tempo: 0
}

const input = () => {
  data.distancia = readline.questionInt('Qual a distância percorrida (em metros)? ');
  data.tempo = readline.questionInt('Qual o tempo gasto nessa no percurso (em segundos)? ');
}

module.exports = {
  data,
  input
}