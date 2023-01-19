var result;
const convertToCelsius = function (num) {
  result = (5 / 9) * (num - 32);
  return Math.round(result * 10) / 10;
};

const convertToFahrenheit = function (num) {
  result = (9 / 5) * num + 32;
  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
