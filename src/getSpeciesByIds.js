const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  const animal = [];
  ids.forEach((elem) => {
    animal.push(species.filter((item) => item.id === elem)[0]);
  });
  return animal;
}

module.exports = getSpeciesByIds;
