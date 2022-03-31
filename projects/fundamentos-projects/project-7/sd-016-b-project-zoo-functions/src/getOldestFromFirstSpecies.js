const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// REVIEW - Inicialmente a função encontra o funcionário pelo id passado por parâmetro, e encontra o primeira espécie de responsabilidade dele. Após isso, encontra a localização da espécie e logo em seguida busca o animal mais velho.

function getOldestFromFirstSpecies(id) {
  const firstAnimalResponsible = data.employees
    .find((employee) => ((id === employee.id) ? employee : false)).responsibleFor
    .find((firstAnimal) => firstAnimal);

  const findAnimal = species
    .find((specie) => firstAnimalResponsible === specie.id).residents
    .reduce((acc, curr) => ((acc.age > curr.age) ? acc : curr));

  return Object.values(findAnimal);
}

module.exports = getOldestFromFirstSpecies;
