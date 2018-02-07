"use strict";

function sum (numbers) {
    let numbers = [];
      if (numbers.length === 0) {
          return 0;
        }
      function add (valA, valB) {
      if (valA === Number || valB === Number) {
          return null;
        }
      return (valA + valB);
      };
    return numbers.reduce(add);
  };
  
  function min (str) {
      if (str === '') {
          return null;
        }
      return ("hello " + str);
  };
  
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