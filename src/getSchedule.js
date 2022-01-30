const data = require('../data/zoo_data');
// Feito com a ajuda de Thiago Zardo
const { species, hours } = data;
const diasAnimais = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday',
  'lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'];
const soDias = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

const criaGrade = () => Object.entries(data.hours).reduce((acc, dia, index, array) => {
  const diaSemana = Object.values(array)[index][0];
  const horaOpen = Object.values(array)[index][1].open;
  const horaClose = Object.values(array)[index][1].close;
  const arrayFilter = species.filter((specie) => specie.availability.includes(diaSemana));
  const arrayMap = arrayFilter.map((nome) => nome.name);
  if (diaSemana !== 'Monday') {
    acc[diaSemana] = {
      officeHour: `Open from ${horaOpen}am until ${horaClose}pm`,
      exhibition: arrayMap,
    };
  } else {
    acc[diaSemana] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }
  return acc;
}, {});

const imprimeSegunda = () => {
  const segundaFeira = {
    Monday: {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    },
  };
  return segundaFeira;
};

const criaHorarios = (param) => {
  const horario = {};
  const arrayFilter = species.filter((specie) => specie.availability.includes(param));
  const arrayMap = arrayFilter.map((nome) => nome.name);
  soDias.forEach((elemento) => {
    if (param === elemento) {
      horario[elemento] = {
        officeHour: `Open from ${hours[elemento].open}am until ${hours[elemento].close}pm`,
        exhibition: arrayMap,
      };
    }
  });
  return horario;
};

const criaAnimal = (param) => {
  const arrayFilter = species.find((specie) => specie.name.includes(param)).availability;
  return arrayFilter;
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined || !diasAnimais.includes(scheduleTarget)) {
    return criaGrade();
  }
  if (scheduleTarget === 'Monday') {
    return imprimeSegunda();
  }
  if (soDias.includes(scheduleTarget)) {
    return criaHorarios(scheduleTarget);
  }
  return criaAnimal(scheduleTarget);
}

module.exports = getSchedule;
