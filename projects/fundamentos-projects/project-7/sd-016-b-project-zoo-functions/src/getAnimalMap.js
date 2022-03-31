const data = require('../data/zoo_data');

const animalsLocalization = (options) => {
  const animalsNoFilter = data.species.reduce((acc, curr) => {
    acc[curr.location] = data.species.filter((specie) => specie
      .location === curr.location)
      .map((nameSpecie) => nameSpecie.name);

    return acc;
  }, {});
  return animalsNoFilter;
};

const funcTest = (param) => {
  const { includeNames, sex, sorted } = param;
  let callFunc;

  if (!includeNames && !sorted) {
    callFunc = animalsLocalization();
  } else {
    callFunc = animalsLocalization();

  }
  return callFunc;
};

const getAnimalMap = (options) => {
  if (options === undefined) {
    return animalsLocalization();
  }
  return funcTest(options);
};

const expected = {
  NE: ['lions', 'giraffes'],
  NW: ['tigers', 'bears', 'elephants'],
  SE: ['penguins', 'otters'],
  SW: ['frogs', 'snakes'],
};

// console.log(getAnimalMap());
// console.log(getAnimalMap({ sex: 'female' }));
console.log(getAnimalMap({ sex: 'female', sorted: true }));
// console.log(getAnimalMap({ includeNames: true }));
// console.log(getAnimalMap({ includeNames: true, sorted: true }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female' }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));

module.exports = getAnimalMap;
