'use strict';

function greet(name) {
  if (typeof name !== 'string') {
    return null;
  }
  if (typeof name === 'string') {
    return `hello ${name}`;
  }
}

module.exports = {};
module.exports.greet = greet;