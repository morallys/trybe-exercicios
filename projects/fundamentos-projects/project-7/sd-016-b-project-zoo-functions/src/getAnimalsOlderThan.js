const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const findAnimal = (paramSpecie) => {
    if (paramSpecie.name === animal) {
      return paramSpecie;
    }
  };

  const objAnimal = species.find((specie) => findAnimal(specie));

  const { residents } = objAnimal;

  return residents.every((verifyAge) => (verifyAge.age >= age));
};

module.exports = getAnimalsOlderThan;
