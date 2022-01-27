const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18);
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const senior = entrants.filter((entrant) => entrant.age >= 50);
  const resultado = {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };
  return resultado;
}

/*
    prices: {
    adult: 49.99,
    senior: 24.99,
    child: 20.99,
  },
*/

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entraram = Object.values(countEntrants(entrants));
  const { adult, senior, child } = data.prices;
  const total = (child * entraram[0]) + (adult * entraram[1]) + (senior * entraram[2]);
  return total;
}

module.exports = { calculateEntry, countEntrants };
