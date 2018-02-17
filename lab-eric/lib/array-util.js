'use strict';
function sum (arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumOfElements = 0;
  for (let i = 0; i <= arr.length-1; i++){
    sumOfElements = sumOfElements + arr[i];
  }
  return sumOfElements;
}
function min (arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let smallestVal = Infinity;
  for (let i = 0; i <= arr.length-1; i++){
    if (arr[i] < smallestVal) {
      smallestVal = arr[i];
    }
  }
  return smallestVal;
}
function isSorted (arr) {
  if (arr.length <= 1) {
    return true;
  }
  for (let i = 1; i <= arr.length-1; i++){
    if (arr[i] < arr[i-1]) {
      return false;
    }
  }
  return true;
}
module.exports = {};
module.exports.sum = sum;
module.exports.min = min;
module.exports.isSorted = isSorted;