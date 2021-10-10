const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const { employees } = data;

  return employees.find(({ firstName, lastName }) => (
    employeeName === firstName || employeeName === lastName
  ));
}

module.exports = getEmployeeByName;
