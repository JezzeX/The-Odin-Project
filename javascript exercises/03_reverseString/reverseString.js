const reverseString = function (string) {
  word = string.split("");
  var length = word.length;
  var reverseArray = [];
  var reverse;

  for (let i = 0; i < length; i++) {
    reverseArray.push(word.pop());
  }
  reverse = reverseArray.join("");
  return reverse;
};

// Do not edit below this line
module.exports = reverseString;
