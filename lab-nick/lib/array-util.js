'use strict';

const add = require("./arithmetic.js").add;

function sumArr(numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    return numbers.reduce(add);
};
// console.log(sumArr([]));
// console.log(sumArr([5, 4, 1]));
// console.log(sumArr([5, -4, 1]));

function minArr(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }
    return Math.min(...numbers);
};
// console.log(minArr([]));
// console.log(minArr([1]));
// console.log(minArr([9, 2, 5, 8]));
// console.log(minArr([9, 2, 5, -8]));

function isSorted(arr) {
    if (arr.length == 0) {
        return true;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
};
console.log(isSorted([])); //true
console.log(isSorted([5]));  //true
console.log(isSorted([1, 2, 5, 8])); //true
console.log(isSorted([5, 1, 8, 2])); //false

module.exports = {};
module.exports.sumArr = sumArr;
module.exports.minArr = minArr;
module.exports.isSorted = isSorted;