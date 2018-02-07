"use strict";

const add = require("./arithmetic.js").add;

function sum (numbers) {
    if (numbers.length === 0) {
        return 0;
      }
    return numbers.reduce(add);
};
//console.log(sum([5, 4, 1]));
  
function min (numbers) {
    if (numbers === '') {
        return undefined;
      }
    return Math.min(numbers);
};
console.log(min(9, 2, 5, 8));
  
function isSorted (str) {
    if (str === '') {
        return null;
      }
    return ("hello " + str);
};

module.exports = {};
module.exports.sum = sum;
module.exports.min = min;
module.exports.isSorted = isSorted;