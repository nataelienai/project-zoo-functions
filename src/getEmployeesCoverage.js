const { species, employees } = require('../data/zoo_data');

function getEmployeeById(id) {
  return employees.find((employee) => employee.id === id);
}

function getEmployeeByName(name) {
  return employees
    .find(({ firstName, lastName }) => firstName === name || lastName === name);
}

function getEmployee({ name, id }) {
  if (typeof name === 'string') {
    return getEmployeeByName(name);
  }
  if (typeof id === 'string') {
    return getEmployeeById(id);
  }
  return undefined;
}

function getSpecies(ids) {
  return ids.map((id) => species.find((animal) => animal.id === id));
}

function getSpeciesNames(animals) {
  return animals.map(({ name }) => name);
}

function getSpeciesLocations(animals) {
  return animals.map(({ location }) => location);
}

function getUniqueCoverage(employeeInfo) {
  const employee = getEmployee(employeeInfo);

  if (!employee) {
    throw new Error('Informações inválidas');
  }

  const animals = getSpecies(employee.responsibleFor);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getSpeciesNames(animals),
    locations: getSpeciesLocations(animals),
  };
}

function getEmployeesCoverage(employeeInfo) {
  if (!employeeInfo) {
    return employees.map((employee) => getUniqueCoverage(employee));
  }
  return getUniqueCoverage(employeeInfo);
}

module.exports = getEmployeesCoverage;
