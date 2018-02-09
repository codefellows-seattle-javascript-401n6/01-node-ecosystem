"use strict";

// Write three functions that accept an array and perform an operation on that array.
// that accepts a value
// and returns null if that value is not a string
// or returns Hello + value
function returnGreet(userName) {
  if (typeof userName !== "string") {
    return null;
  } else {
      return ("Hello " + userName);
  }
}

module.exports = {};
module.exports.returnGreet = returnGreet;