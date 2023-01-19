const fibonacci = function (count) {
  if (count < 0) return "OOPS";

  let a = 0;
  let b = 1;
  for (let i = 1; i < count; i++) {
    var temp = b;
    b = a + b;
    a = temp;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;
