const data = require('../data/zoo_data');

const { employees, species } = data;

const firstNames = employees.map((nome) => nome.firstName);
const lastNames = employees.map((nome) => nome.lastName);
const allIds = employees.map((ids) => ids.id);

const staffList = () => {
  const resposta = [];
  employees.forEach((item) => {
    const specieFilter = species.filter((specie) => item.responsibleFor.includes(specie.id));
    const objeto = {
      id: item.id,
      fullName: `${item.firstName} ${item.lastName}`,
      species: specieFilter.map((nome) => nome.name),
      locations: specieFilter.map((nome) => nome.location),
    };
    resposta.push(objeto);
  });
  return resposta;
};

const funcionario = (nome) => {
  const objeto = {};
  const staffFilter = employees.filter((staff) => staff.firstName.includes(nome)
    || staff.lastName.includes(nome));
  const fullName = staffFilter.map((item) => `${item.firstName} ${item.lastName}`)[0];
  const animais = species.filter((item) => staffFilter[0].responsibleFor.includes(item.id));
  const animaisMapName = animais.map((item) => item.name);
  const animaisMapLocation = animais.map((item) => item.location);
  objeto.id = staffFilter[0].id;
  objeto.fullName = fullName;
  objeto.species = animaisMapName;
  objeto.locations = animaisMapLocation;
  return objeto;
};

const funcionarioID = (id) => {
  const objeto = {};
  const staffFilter = employees.filter((staff) => staff.id === id);
  const fullName = staffFilter.map((item) => `${item.firstName} ${item.lastName}`)[0];
  const animais = species.filter((item) => staffFilter[0].responsibleFor.includes(item.id));
  const animaisMapName = animais.map((item) => item.name);
  const animaisMapLocation = animais.map((item) => item.location);
  objeto.id = staffFilter[0].id;
  objeto.fullName = fullName;
  objeto.species = animaisMapName;
  objeto.locations = animaisMapLocation;
  return objeto;
};

function getEmployeesCoverage(param) {
  if (!param) {
    return staffList();
  }
  const primeiroNome = firstNames.includes(param.name);
  const segundoNome = lastNames.includes(param.name);
  if (primeiroNome || segundoNome) {
    return funcionario(param.name);
  }
  if (allIds.includes(param.id)) {
    return funcionarioID(param.id);
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
