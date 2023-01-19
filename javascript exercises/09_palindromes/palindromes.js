const palindromes = function (str) {
  var processedstr = str.toLowerCase().replace(/[^a-z]/g, "");
  var reversestr = processedstr.split("").reverse().join("");
  return reversestr === processedstr;
};

// Do not edit below this line
module.exports = palindromes;
