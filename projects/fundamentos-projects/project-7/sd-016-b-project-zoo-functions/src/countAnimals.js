const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// REVIEW - Caso seja recebidos os dois parâmetros (specie e sex), retorna apenas a quantidade de animais do sexo específico daquela espécie

const countAnimalPerSex = (animal) => {
  let countSexAnimals = 0;
  const { specie, sex } = animal;

  species.forEach((animalResident) => {
    if (specie === animalResident.name) {
      animalResident.residents.forEach((resident) => {
        if (sex === resident.sex) {
          countSexAnimals += 1;
        }
      });
    }
  });
  return countSexAnimals;
};

// REVIEW - Caso seja recebido apenas um parâmetro (specie), verifica que o segundo parâmetro é undefined, e retorna a quantidade total de animais da espécie passada na chamada da função

const findAnimals = (objAnimal) => {
  const { specie, sex } = objAnimal;

  if (sex === undefined) {
    const countSpecie = species.find((specieAnimal) => {
      let countResidents = 0;
      if (specieAnimal.name === specie) {
        countResidents = specieAnimal.residents.length;
      }
      return countResidents;
    });
    return countSpecie.residents.length;
  }
  return countAnimalPerSex(objAnimal);
};

// REVIEW - Ao chamar a função sem parâmetros, é montado com o método reduce um objeto com os dados de quantidade de animais de cada espécie

const countAnimals = (animal) => {
  if (animal === undefined) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;

      return acc;
    }, {});
  }
  return findAnimals(animal);
};

// console.log(countAnimals());
// console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
// console.log(countAnimals({ specie: 'penguins' }));

module.exports = countAnimals;
