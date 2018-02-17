'use strict';

function sum (arr) {
    if (arr.length === 0) {
        return 0;
    }
    let sumOfItems = 0
    for (let i = 0; i < arr.length; i++) {
        sumOfItems = sumOfItems + arr[i];
    }
    return sumOfItems;
}

function min (arr) {
 if (arr.length === 0) {
   return undefined;
 }
 let smallestItem = Number.POSITIVE_INFINITY;
 for (let i = 0; i <= arr.length; i++){
   if (arr[i] < smallestItem) {
     smallestItem = arr[i];
   }
 }
 return smallestItem;
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


