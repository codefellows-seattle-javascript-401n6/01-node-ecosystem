"use strict";

//The greet function should have a single parameter (arity of one) that should expect a string as it's input
//The greet function should return the input name, concatenated with "hello ": eg. ("hello susan")
//The greet function should return null if the input is not a string
function greet(str) {
    if (typeof(str) !== 'string') {
        return null;
      }
    return "hello " + str;
}

module.exports = {};
module.exports.greet = greet;