const { species, employees } = require('../data/zoo_data');

function getEmployee(id) {
  return employees.find((employee) => employee.id === id);
}

function getSpecies(id) {
  return species.find((animal) => animal.id === id);
}

function getOldestResident(residents) {
  return residents.reduce((oldestResident, currentResident) => (
    currentResident.age > oldestResident.age ? currentResident : oldestResident
  ));
}

function getOldestFromFirstSpecies(id) {
  const { responsibleFor } = getEmployee(id);
  const { residents } = getSpecies(responsibleFor[0]);
  const oldestResident = getOldestResident(residents);

  return Object.values(oldestResident);
}

module.exports = getOldestFromFirstSpecies;
