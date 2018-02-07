"use strict";

// Write a function called containsVowels
// that accepts a string
// and returns true if the string contains vowels
// or returns false if it does not


  const arithmetic = {};

  arithmetic.nan = function(a,b){

    if((a||b) === NaN){
      return null;
    }

  }
  
  arithmetic.sum = function (a,b){
  
  let sum = a+b;

  return sum;
  }

  arithmetic.sub = function(a,b){

  let sub = a-b;
  
  return sub;
  }
  console.log("sub:",sub, "sum:",sum);
  


module.exports = {};
module.exports.arithmetic = arithmetic;