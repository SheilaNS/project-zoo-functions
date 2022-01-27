const data = require('../data/zoo_data');

// const [ name, availability ] = data.species;
const diasSemana = Object.entries(data.hours);
/* [
  [ 'Tuesday', { open: 8, close: 6 } ],
  [ 'Wednesday', { open: 8, close: 6 } ],
  [ 'Thursday', { open: 10, close: 8 } ],
  [ 'Friday', { open: 10, close: 8 } ],
  [ 'Saturday', { open: 8, close: 10 } ],
  [ 'Sunday', { open: 8, close: 8 } ],
  [ 'Monday', { open: 0, close: 0 } ]
]
 */
const funcaoReducer = (acc, dia, index) => {
  console.log(acc);
  console.log(dia);
  console.log(index);
};

const criaGrade = () => diasSemana.reduce(funcaoReducer, {});

function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined) {
    return criaGrade();
  }
}

console.log(getSchedule());
module.exports = getSchedule;
