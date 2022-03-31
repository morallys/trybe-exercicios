const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const testEqualId = (paramSpecie, paramId) => {
  if (paramSpecie.id === paramId) {
    return paramSpecie;
  }
};

const getSpeciesByIds = (...ids) => {
  if (ids.length !== 0) {
    const specieId = ids.map((id) => {
      const specieFind = species.find((specie) => testEqualId(specie, id));
      return specieFind;
    });
    return specieId;
  }
  return [];
};

console.log(getSpeciesByIds('0a938aa23-f153-4937-9f88-4858b24d6bce',
  'e8481c1d-42ea-4610-8e11-1752cafc05a46'));

module.exports = getSpeciesByIds;
