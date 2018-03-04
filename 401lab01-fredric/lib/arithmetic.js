'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') 
    return null;
  return a + b;
};

arithmetic.subtract = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') 
    return null;
  return a - b;
};