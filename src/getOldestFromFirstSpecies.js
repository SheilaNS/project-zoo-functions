const data = require('../data/zoo_data');
// pair programming com Erik Lima

function getOldestFromFirstSpecies(id) {
  const responsible = data.employees.filter((staff) => staff.id === id)
    .map((animal) => animal.responsibleFor[0]);
  const animals = data.species.find((name) => name.id === responsible[0]).residents
    .sort((b, a) => a.age - b.age)
    .map((resident) => [resident.name, resident.sex, resident.age])[0];
  return animals;
}

module.exports = getOldestFromFirstSpecies;
