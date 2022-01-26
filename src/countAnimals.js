const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const allAnimals = {};
    data.species.forEach((animals) => {
      allAnimals[animals.name] = animals.residents.length;
    });
    return allAnimals;
  }
  const animalName = Object.values(animal);
  const pop = data.species.find((nome) => nome.name === animalName[0]);
  if (animalName.length === 1) {
    return pop.residents.length;
  }
  if (animalName.length === 2) {
    const popSex = pop.residents.filter((animalFilter) => animalFilter.sex === animalName[1]);
    return popSex.length;
  }
}

module.exports = countAnimals;
