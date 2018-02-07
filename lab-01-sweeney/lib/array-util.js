"use strict";

// Write a function called containsVowels
// that accepts a string
// and returns true if the string contains vowels
// or returns false if it does not
function arrayUtil(arr) {
  let given = arr;
 
  function sum(given){
    if (arr.length === 0){
      return 0;
    }

    let add = (a,b)=>
     a+b;

    let sum = given.reduce(add);

    return sum;

  }
  
  function min(given){
    if (arr.length === 0){
      return undefined;
    }
    let min = Math.min.apply(Math, given);

    return min;

  }
  
  function isSorted(given){

    if (arr.length === 0){
      return true;
    }

  }
}

module.exports = {};
module.exports.arrayUtil = arrayUtil;