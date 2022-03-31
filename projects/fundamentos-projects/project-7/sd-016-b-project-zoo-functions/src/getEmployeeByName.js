const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName !== undefined) {
    const objEmployee = employees.find((employee) => {
      let testEmployee;
      if (employee.firstName === employeeName || employee.lastName === employeeName) {
        testEmployee = employee;
      }
      return testEmployee;
    });
    return objEmployee;
  }
  return {};
}

module.exports = getEmployeeByName;
