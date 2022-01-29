const data = require('../data/zoo_data');

// const { species } = data;

const funcaoReducer = (objeto) => {
  const resultado = objeto;
  resultado.NE = data.species.filter((local) => local.location === 'NE').map((nome) => nome.name);
  resultado.NW = data.species.filter((local) => local.location === 'NW').map((nome) => nome.name);
  resultado.SE = data.species.filter((local) => local.location === 'SE').map((nome) => nome.name);
  resultado.SW = data.species.filter((local) => local.location === 'SW').map((nome) => nome.name);
  return resultado;
};
const criaMapa = () => data.species.reduce(funcaoReducer, {});

/* const pegaEspecie = (elemento, regiao) => elemento
  .filter((item) => item.location.includes(regiao)).map((nome) => nome.name);
 */
/* const animalRegiao = species.filter((specie) => specie.location === especie.location)
  .map((animal) => animal.name);
const nomesAnimais0 = animalRegiao.map((animal) => species
  .find((animalFind) => animalFind.name === animal).residents
  .map((residente) => residente.name));
const nomesAnimais1 = species
  .find((animalFind) => animalFind.name === animalRegiao[1]).residents
  .map((residente) => residente.name);

const criaMapaNome = () => {
  const obj = {};
  species.forEach((especie) => {
    obj[especie.location] = [];
    const animais = {
      [animalRegiao[0]]: nomesAnimais0,
      [animalRegiao[1]]: nomesAnimais1,
    };
    obj[especie.location].push(animais);
  });
  return obj;
};

{
      NE: [
        { lions: ['Zena', 'Maxwell', 'Faustino', 'Dee'] },
        { giraffes: ['Gracia', 'Antone', 'Vicky', 'Clay', 'Arron', 'Bernard'] },
      ],
      NW: [
        { tigers: ['Shu', 'Esther'] },
        { bears: ['Hiram', 'Edwardo', 'Milan'] },
        { elephants: ['Ilana', 'Orval', 'Bea', 'Jefferson'] },
      ],
      SE: [
        { penguins: ['Joe', 'Tad', 'Keri', 'Nicholas'] },
        { otters: ['Neville', 'Lloyd', 'Mercedes', 'Margherita'] },
      ],
      SW: [
        { frogs: ['Cathey', 'Annice'] },
        { snakes: ['Paulette', 'Bill'] },
      ],
    };
*/

function getAnimalMap(options) {
  if (options === undefined
    || !Object.keys(options).includes('includeNames')) {
    return criaMapa();
  }
//   return criaMapaNome();
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
