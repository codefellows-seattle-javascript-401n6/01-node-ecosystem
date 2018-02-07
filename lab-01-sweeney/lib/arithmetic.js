"use strict";

// Write a function called containsVowels
// that accepts a string
// and returns true if the string contains vowels
// or returns false if it does not
function arithmetic(num1, num2) {

  let a = num1;
  let b = num1;
   
  if (a||b === NaN) {
    return null;
  }
  
  function add(a,b){
  
  let sum = a+b;

  return sum;
  }

  function sub(a,b){

  let remainder = a-b;
  
  return remainder;
  }
  console.log("remainder:",remainder, "sum:",sum);
  
}

module.exports = {};
module.exports.arithmetic = arithmetic;