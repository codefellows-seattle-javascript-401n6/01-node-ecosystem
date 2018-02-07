'use strict';

// The greet function should have a single parameter that should expect a string as it's input
// Return the input name, concatenated with "hello ": eg. ("hello susan")
// Return null if the input is not a string

function greet(str) {
  if (str.length === '') {
    return ('hello ', str);
  } else {
    return null;
  }
}

module.exports.greet = greet;