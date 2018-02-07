'use strict';

let Arithmetic = {};

Arithmetic.add = function(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return null;
  } else {
    return num1 + num2;
  }
}

Arithmetic.sub = function(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return null;
  } else {
    return num1 - num2;
  }
}

module.exports = Arithmetic;