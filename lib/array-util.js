// Array Util Module
// Create a NodeJS module in the lib/ directory named array-util.js that exports an object. This module should have the following methods:
// A sum function that accepts an array and returns the total of all the elements in the array.
// return 0 is the array is empty
// A min function that returns the smallest value from an array
// return undefined if the array is empty
// An isSorted function that returns true if all the elements in the array appear in ascending order.
// return true if the array is empty

'use strict';

function sum (arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumArr = 0
    for (let i = 0; i < arr.length; i++) {
    sumArr = sumArr + arr[i];
  }
  return sumArr;
}

function min(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return Math.min(...arr);
}

function isSorted(arr) {
  if (arr.length === 0) {
    return true;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

module.exports = {};
module.exports.sum = sum;
module.exports.min = min;
module.exports.isSorted = isSorted;

// function sum() {
//   let addNums = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     addNums += arguments[i];
//   }
//   return addNums;
// }

// function min(lowNumb) {
//   if (toString.call(lowNumb) !== '[object Array]')
//     return undefined;
//   return Math.min.apply(null, lowNumb);
// }










// function add(a, b) {
//   if (typeof (a) !== 'number' || typeof (b) !== 'number') {
//     return null;
//   }

//   return a + b;

// }