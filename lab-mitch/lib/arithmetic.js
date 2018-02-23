"use strict";

// Write a function called arithmetic.js
// that accepts two parameters and has two methods
// the add method return null if the parameters are non-numbers
// else the add method will return the sum of the two parameters
// the sub method return null if the parameters are non-numbers
// else the sub method will return the second parameter subtracted from the first parameter

function add(numOne, numTwo) {
  if (typeof numOne !== "number" || typeof numTwo !== "number") {
    return null;
  } else {
      let added = (numOne + numTwo)
      return (added);
  }
}

function sub(numOne, numTwo) {
    if (typeof numOne !== "number" || typeof numTwo !== "number") {
      return null;
    } else {
        let subtracted = (numOne - numTwo)
        return (subtracted);
    }
  }

module.exports = {};
module.exports.add = add;
module.exports.sub = sub;