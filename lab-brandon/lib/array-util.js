'use strict';

// Create a NodeJS module in the lib/ directory named array-util.js that exports an object. This module should have the following methods:
// A sum function that accepts an array and returns the total of all the elements in the array.
// return 0 is the array is empty
// A min function that returns the smallest value from an array
// return undefined if the array is empty
// An isSorted function that returns true if all the elements in the array appear in ascending order.
// return true if the array is empty
function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        let sum = 0;
        for(let i = 0; i < arr.length; i++) {   

        }
        return sum;
    }
}

module.exports = {};
module.exports.sumArray = addArray;
module.exports.subAll = subAll;
