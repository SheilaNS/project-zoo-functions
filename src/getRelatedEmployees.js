const data = require('../data/zoo_data');

function isManager(id) {
  const manager = data.employees.some((staff) => staff.managers.includes(id));
  return manager;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const others = data.employees.filter((staff) => staff.managers.includes(managerId));
    const names = others.map((staffName) => `${staffName.firstName} ${staffName.lastName}`);
    return names;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
