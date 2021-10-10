const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const { residents } = species.find(({ name }) => animal === name);

  return residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
