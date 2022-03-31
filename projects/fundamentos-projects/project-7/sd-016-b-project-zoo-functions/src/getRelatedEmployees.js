const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const TransformMatrixInArray = (matrix) => matrix
  .reduce((acc, currentValue) => acc.concat(currentValue), []);

const isManager = (id) => {
  const listManager = TransformMatrixInArray(employees.map((employee) => employee.managers));
  const managerIsTrue = listManager.some((manager) => manager === id);

  return managerIsTrue;
};

function getRelatedEmployees(managerId) {
  const arrEmployees = [];

  if (isManager(managerId) === true) {
    employees.forEach((employee) => {
      const { managers } = employee;
      const { firstName, lastName } = employee;

      managers.forEach((objManager) => {
        if (objManager === managerId) {
          arrEmployees.push(`${firstName} ${lastName}`);
        }
      });
    });
    return arrEmployees;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
