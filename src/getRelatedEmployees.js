const data = require('../data/zoo_data');

function isManager(id) {
  const { employees } = data;
  const employeeFound = employees.find(({ managers }) => managers.includes(id));

  return employeeFound !== undefined;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const { employees } = data;

  return employees
    .filter(({ managers }) => managers.includes(managerId))
    .map(({ firstName, lastName }) => `${firstName} ${lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
