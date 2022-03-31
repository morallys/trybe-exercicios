const data = require('../data/zoo_data');

// REVIEW - De acordo com o parâmetro recebido, cria um novo objeto contendo a quantidade de pessoas que entrarão no park, de acordo com sua faixa etária.

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;

  const numberEntrants = entrants.reduce((acc, curr) => {
    if (curr.age < 18) {
      child += 1;
      acc.child = child;
    } else if (curr.age >= 18 && curr.age < 50) {
      adult += 1;
      acc.adult = adult;
    } else {
      senior += 1;
      acc.senior = senior;
    }
    return acc;
  }, {});
  return numberEntrants;
}

// REVIEW - Recebe por parâmetro um objeto com a quantidade de pessoas separadas por faixa etária, que entrarão no park e retorna o valor total a ser pago.

const calculateEntrancePrice = (numberEntrants) => {
  let sumEntrants = 0;
  const { child, adult, senior } = numberEntrants;

  if (numberEntrants.child) {
    sumEntrants = child * data.prices.child;
  } if (numberEntrants.adult) {
    sumEntrants += (adult * data.prices.adult);
  } if (numberEntrants.senior) {
    sumEntrants += (senior * data.prices.senior);
  }
  return sumEntrants;
};

// REVIEW - Verifica se o parâmetro recebido é vazio, um objeto vazio ou se é um objeto contendo os dados necessários para realizar a verificação de quantidade de pessoas que entrarão no zoo (chamando função countEntrants()) e o valor a ser pago (chamando função calculateEntrancePrice()).

function calculateEntry(entrants) {
  let numberEntrants;
  let sumEntrants;

  if (entrants === undefined || Object.keys(entrants).length === 0) {
    numberEntrants = 0;
    sumEntrants = numberEntrants;
  } else {
    numberEntrants = countEntrants(entrants);

    sumEntrants = calculateEntrancePrice(numberEntrants);
  }
  return sumEntrants;
}

module.exports = { calculateEntry, countEntrants };
