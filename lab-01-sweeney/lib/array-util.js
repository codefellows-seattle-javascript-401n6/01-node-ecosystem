"use strict";

// Write a function called containsVowels
// that accepts a string
// and returns true if the string contains vowels
// or returns false if it does not


  const arrayUtil = {};
 
  arrayUtil.sum = function (arr){
    if (arr.length === 0){
      return 0;
    }

    let add = (a,b)=>
     a+b;

    let sum = given.reduce(add);

    return sum;

  }
  
  arrayUtil.min = function(arr){
    if (arr.length === 0){
      return undefined;
    }
    let min = Math.min.apply(Math, arr);

    return min;

  }
  
  arrayUtil.isSorted = function(arr){

    if (arr.length === 0){
      return true;
    }

  }


module.exports = {};
module.exports.arrayUtil = arrayUtil;