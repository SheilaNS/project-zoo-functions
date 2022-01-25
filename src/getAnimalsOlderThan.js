const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find((name) => name.name === animal);
  const isOlder = Object.values(animals.residents).every((item) => item.age >= age);
  return isOlder;
}

module.exports = getAnimalsOlderThan;
