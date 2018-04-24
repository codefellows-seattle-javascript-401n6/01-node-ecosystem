'use strict';

function add(a, b) {
  if (typeof (a) !== 'number' || typeof (b) !== 'number') {
    return null;
  }

  return a + b;

}

function sub(a, b) {
  if (typeof (a) !== 'number' || typeof (b) !== 'number') {
    return null;
  }

  return a - b;

}

module.exports.add = add;
module.exports.sub = sub;
