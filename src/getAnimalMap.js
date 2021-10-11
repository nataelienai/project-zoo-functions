const data = require('../data/zoo_data');

function buildMap() {
  const { species } = data;
  const map = {};

  species.forEach(({ location }) => {
    map[location] = [];
  });
  return map;
}

function filterResidentsBySex(residents, sex) {
  if (!sex) {
    return [...residents];
  }
  return residents.filter((resident) => resident.sex === sex);
}

function getResidentsNames(residents, { sorted, sex }) {
  const filteredResidents = filterResidentsBySex(residents, sex);
  const residentsNames = filteredResidents.map((resident) => resident.name);

  return sorted ? residentsNames.sort() : residentsNames;
}

function getAnimalMap(options) {
  const { species } = data;
  const animalMap = buildMap();

  if (!options || !options.includeNames) {
    species.forEach(({ name: speciesName, location }) => {
      animalMap[location].push(speciesName);
    });
  } else {
    species.forEach(({ name: speciesName, location, residents }) => {
      const animalNames = { [speciesName]: getResidentsNames(residents, options) };
      animalMap[location].push(animalNames);
    });
  }
  return animalMap;
}

module.exports = getAnimalMap;
