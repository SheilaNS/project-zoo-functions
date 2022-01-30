const data = require('../data/zoo_data');
// Feito com a ajuda de Danillo, Thiago Zardo e Leo Araujo
const { species } = data;

const criaMapa = () => species.reduce((acc, elem) => {
  const animalFilter = species.filter((item) => item.location === elem.location);
  const animalMap = animalFilter.map((item) => item.name);
  acc[elem.location] = animalMap;
  return acc;
}, {});

const criaMapaNome = () => species.reduce((acc, elem) => {
  acc[elem.location] = [];
  species.forEach((animal) => {
    if (animal.location === elem.location) {
      return acc[elem.location].push({
        [animal.name]: animal.residents.map((item) => item.name),
      });
    }
  });
  return acc;
}, {});

const verificaOptions = (param) => {
  if (Object.keys(param).includes('sex') && Object.keys(param).includes('sorted')) {
    return 'com sexo e sorted';
  }
  if (Object.keys(param).includes('sorted')) {
    return 'if com sorted';
  }
  if (Object.keys(param).includes('sex')) {
    return 'if com sex';
  }
  return criaMapaNome();
};

function getAnimalMap(options) {
  if (!options || !Object.keys(options).includes('includeNames')) {
    console.log('if undefined e sem nome');
    return criaMapa();
  }
  return verificaOptions(options);
}

console.log(getAnimalMap());
module.exports = getAnimalMap;
