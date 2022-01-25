const data = require('../data/zoo_data');

function countAnimals(animal) {
  const [ specie ] = animal;
  const pop = data.species.find((nome) => nome.name === specie).popularity;
  return pop;
}

module.exports = countAnimals;
console.log(countAnimals({ specie: 'penguins' }));
