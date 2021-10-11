const data = require('../data/zoo_data');

function countAllSpecies() {
  const { species } = data;

  return species.reduce((animalCount, { name, residents }) => (
    {
      ...animalCount,
      [name]: residents.length,
    }
  ), {});
}

function countSpecies({ specie, sex }) {
  const { species } = data;
  const { residents } = species.find(({ name }) => name === specie);

  if (sex === undefined) {
    return residents.length;
  }
  return residents
    .filter(({ sex: residentSex }) => residentSex === sex)
    .length;
}

function countAnimals(animal) {
  if (animal === undefined) {
    return countAllSpecies();
  }
  return countSpecies(animal);
}

module.exports = countAnimals;
