var sum = 0;
const sumAll = function (num1, num2) {
  if (typeof num1 != "number" || typeof num2 != "number") {
    return "ERROR";
  } else if (num1 < 0 || num2 < 0) {
    return "ERROR";
  } else {
    for (i = num1; i <= num2; i++) {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
