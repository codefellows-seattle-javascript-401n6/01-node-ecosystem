'use strict';

function add (x, y) {
  if (Number.isInteger(x + y)) {
    let sum = x + y;
    return sum;
  } else {
    return null;
  }
}


function subtract (x, y) {
  if (Number.isInteger(x + y)) {
    let sub = x - y;
    return sub;
  } else {
    return null;
  }
}

module.exports = {};
module.exports.add = add;
module.exports.subtract = subtract;