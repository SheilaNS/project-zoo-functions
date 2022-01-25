const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  const species = ids.map((id) => data.species.find((identfy) => identfy.id === id));
  return species;
}

module.exports = getSpeciesByIds;
