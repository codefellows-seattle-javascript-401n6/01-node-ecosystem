'use strict';

//This module should have add and sub methods that implement addition and subtraction.

//Add method: define two parameters
//If either parameter is a non-number the function should return null
//Else return the sum of the 2 numbers
//Sub method: define two paramiters
//If either parameter is a non-number the function should return null
//Else return the second paramiter subtracted from the first paramiter
let Math = {};

Math.add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return null;
  } else {
    return a + b;
  }
};

Math.sub = (c, d) => {
  if (typeof c !== 'number' || typeof d !== 'number') {
    return null;
  } else {
    return c - d;
  }
};

module.exports = Math;
