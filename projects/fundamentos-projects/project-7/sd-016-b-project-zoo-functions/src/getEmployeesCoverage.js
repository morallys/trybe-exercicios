const data = require('../data/zoo_data');

const { species, employees } = data;

// REVIEW - Filtra dentro de species com um array recebido por parâmetro, com ids de animais, e utiliza o find para encontrá-los. Após encontrar os animais correspondentes, utiliza o map para buscar apenas os nomes dos animais e retorná-los.

const getSpecies = (arrAnimals) => {
  const searchSpecie = species.filter((specie) => arrAnimals
    .find((animalId) => animalId === specie.id))
    .map((specie) => specie.name);

  return searchSpecie;
};

// REVIEW - Filtra dentro de species com um array recebido por parâmetro, com ids de animais, e utiliza o find para encontrá-los. Após encontrar os animais correspondentes, utiliza o map para buscar apenas as localizações dos animais e retorná-las.

const getSpeciesLocation = (arrAnimals) => {
  const searchSpecie = species.filter((specie) => arrAnimals
    .find((animalId) => animalId === specie.id))
    .map((specie) => specie.location);

  return searchSpecie;
};

// REVIEW - Função para criação de um objeto padrão para impressão

const objEmployee = (id, firstName, lastName, responsibleFor) => {
  const employeeCoverage = {
    id,
    fullName: `${firstName} ${lastName}`,
    species: getSpecies(responsibleFor),
    locations: getSpeciesLocation(responsibleFor),
  };

  return employeeCoverage;
};

// REVIEW - Função que testa o parâmetro recebido, e verifica se é um id ou nome. Após essa verificação, testa se o parâmetro recebido é válido ou não, e se for inválido lança um erro. Caso o parâmetro seja válido, é iniciada as chamadas das funções para criação do objeto do funcionário que será impresso.

const searchEmployee = (input) => {
  const findEmployee = employees.find((employee) =>
    (input === employee.firstName || input === employee.lastName || input === employee.id));

  if (findEmployee === undefined) {
    throw new Error('Informações inválidas');
  } else {
    const { id, firstName, lastName, responsibleFor } = findEmployee;

    return objEmployee(id, firstName, lastName, responsibleFor);
  }
};

// REVIEW - Caso na chamada da função não seja enviado nenhum parâmetro, a função map cria um array com o objeto padrão de todos os funcionários.

const searchAllEmployee = () => employees.map((employee) => {
  const { id, firstName, lastName, responsibleFor } = employee;

  return objEmployee(id, firstName, lastName, responsibleFor);
});

// REVIEW - Função que testa os parâmetros iniciais, e chama as funções correspondentes para criação dos objetos para impressão.

function getEmployeesCoverage(employee) {
  let coverageEmployee;

  if (employee === undefined) {
    coverageEmployee = searchAllEmployee();
  } else if (employee.id !== undefined) {
    coverageEmployee = searchEmployee(employee.id);
  } else if (employee.name !== undefined) {
    coverageEmployee = searchEmployee(employee.name);
  }

  return coverageEmployee;
}

module.exports = getEmployeesCoverage;
