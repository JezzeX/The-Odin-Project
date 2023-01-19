var index;
const removeFromArray = function (array, ...value) {
  for (let i = 0; i < value.length; i++) {
    index = array.indexOf(value[i]);
    if (index > -1) {
      array.splice(index, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
