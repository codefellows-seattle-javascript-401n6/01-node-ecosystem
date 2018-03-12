'use strict';

// The greet function should have a single parameter that should expect a string as it's input
// Return the input name, concatenated with "hello ": eg. ("hello susan")
// Return null if the input is not a string

function greet(str) {
  if (typeof str !== 'string') {
    return null;
  }
  if (typeof str === 'string') {
    return (`hello ${str}`);
  }
}

module.exports = {};
module.exports.greet = greet;