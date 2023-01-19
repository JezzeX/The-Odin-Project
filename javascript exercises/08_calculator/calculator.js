const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a) {
  let total = 0;
  for (let i = 0; i < a.length; i++) {
    total += a[i];
  }
  return total;
};

const multiply = function (a) {
  let total = 1;
  for (let i = 0; i < a.length; i++) {
    total *= a[i];
  }
  return total;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  let fact = 1;
  for (let i = 1; i <= a; i++) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
