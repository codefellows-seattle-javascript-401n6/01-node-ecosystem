"use strict";

// Write a function called containsVowels
// that accepts a string
// and returns true if the string contains vowels
// or returns false if it does not
function greet(str) {

  let name = str;

  let type = (typeof name === "string");

  if (name.length === 0 || type === false) {
    return  null;
  }
  let greeting = "hello"+name;
  return "hello"+name;
}

module.exports = {};
module.exports.greet = greet;