const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const staff = data.employees.find((name) => name.firstName === employeeName
   || name.lastName === employeeName);
  return staff;
}

module.exports = getEmployeeByName;
