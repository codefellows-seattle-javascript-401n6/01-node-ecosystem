'use strict';

//This module should have add and sub methods that implement addition and subtraction.

//Add method: define two parameters
//If either parameter is a non-number the function should return null
//Else return the sum of the 2 numbers
//Sub method: define two paramiters
//If either parameter is a non-number the function should return null
//Else return the second paramiter subtracted from the first paramiter
const math = module.exports = {};

math.add = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return null;
  }
};

math.sub = (c, d) => {
  if (typeof c === 'number' && typeof d === 'number') {
    return c - d;
  } else {
    return null;
  }
};