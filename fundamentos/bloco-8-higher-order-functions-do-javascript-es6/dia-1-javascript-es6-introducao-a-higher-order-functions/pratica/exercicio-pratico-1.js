
// REVIEW - Função que cria novos funcionários com número de id específico, e gera um e-mail personalizado com nome da empresa

let countEmployeer = 1;

const newPerson = (namePerson) => {
  const employees = {

  }
  const stringEmail = namePerson.replace(' ', '_');
  employees[`id${countEmployeer}`] = namePerson;
  const id = `id${countEmployeer}`;

  countEmployeer += 1;

  return `${id}: ${employees[id]}, ${stringEmail.toLowerCase()}@trybe.com`;
}

const newEmployees = (name, callback) => {
  return console.log(callback(name));
}

newEmployees('Pedro Guerra', newPerson);
newEmployees('Luiza Drumond', newPerson);
newEmployees('Carla Paiva', newPerson);