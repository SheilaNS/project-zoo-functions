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

const criaMapaNomeSort = () => species.reduce((acc, elem) => {
  acc[elem.location] = [];
  species.forEach((animal) => {
    if (animal.location === elem.location) {
      return acc[elem.location].push({
        [animal.name]: animal.residents.map((item) => item.name).sort(),
      });
    }
  });
  return acc;
}, {});

const criaMapaNomeSex = (param) => species.reduce((acc, elem) => {
  acc[elem.location] = [];
  species.forEach((animal) => {
    if (animal.location === elem.location) {
      return acc[elem.location].push({
        [animal.name]: animal.residents.filter((item) => item.sex === param.sex)
          .map((item) => item.name),
      });
    }
  });
  return acc;
}, {});

const criaMapaNomeSexSort = (param) => species.reduce((acc, elem) => {
  acc[elem.location] = [];
  species.forEach((animal) => {
    if (animal.location === elem.location) {
      return acc[elem.location].push({
        [animal.name]: animal.residents.filter((item) => item.sex === param.sex)
          .map((item) => item.name).sort(),
      });
    }
  });
  return acc;
}, {});

const verificaOptions = (param) => {
  if (Object.keys(param).includes('sex') && Object.keys(param).includes('sorted')) {
    return criaMapaNomeSexSort(param);
  }
  if (Object.keys(param).includes('sorted')) {
    return criaMapaNomeSort();
  }
  if (Object.keys(param).includes('sex')) {
    return criaMapaNomeSex(param);
  }
  return criaMapaNome();
};

function getAnimalMap(options) {
  if (!options || !Object.keys(options).includes('includeNames', undefined)) {
    console.log('if undefined e sem nome');
    return criaMapa();
  }
  return verificaOptions(options);
}

console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));
module.exports = getAnimalMap;
