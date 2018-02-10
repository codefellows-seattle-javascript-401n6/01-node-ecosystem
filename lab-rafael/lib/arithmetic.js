'use strict';

function sum(a,b) {
  if(typeof(a) !== 'number' || typeof(b) !== 'number') {
    return null;
  }
  return a + b;
}

function sub(a, b) {
  if(typeof(a) !== 'number' || typeof(b) !== 'number') {
    return null;
  }
  return a - b;
}


module.exports.sum = sum;
module.exports.sub = sub;
