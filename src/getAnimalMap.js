const data = require('../data/zoo_data');

const funcaoReducer = (objeto) => {
  const resultado = objeto;
  resultado.NE = data.species.filter((local) => local.location === 'NE').map((nome) => nome.name);
  resultado.NW = data.species.filter((local) => local.location === 'NW').map((nome) => nome.name);
  resultado.SE = data.species.filter((local) => local.location === 'SE').map((nome) => nome.name);
  resultado.SW = data.species.filter((local) => local.location === 'SW').map((nome) => nome.name);
  return resultado;
};
const criaMapa = () => data.species.reduce(funcaoReducer, {});

const funcaoReducerNome = (objetoNome) => {
  const resultadoNome = objetoNome;
  resultadoNome.NE = data.species.filter((local) => local.location === 'NE');
  resultadoNome.NW = data.species.filter((local) => local.location === 'NW');
  resultadoNome.SE = data.species.filter((local) => local.location === 'SE');
  resultadoNome.SW = data.species.filter((local) => local.location === 'SW');
  return resultadoNome;
};

const criaMapaNome = () => data.species.reduce(funcaoReducerNome, {});

function getAnimalMap(options) {
  if (options === undefined
    || !Object.keys(options).includes('includeNames')) {
    return criaMapa();
  }
  return console.table(criaMapaNome());
}

console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
