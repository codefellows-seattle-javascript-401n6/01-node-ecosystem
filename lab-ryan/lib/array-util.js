"use strict";

function sumArr(arr) {
    if (arr.length === 0) {
        return 0;
    }
    var sum = arr.reduce(function (a, b) {
        return a + b;
    }, 0);
    return sum;
}

function minArr(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return Math.min(arr);
}

function isSorted(arr) {
    if(arr.length === 0){
        return true;
    }
}

const ArrayUtils = requeie('../path/to/arrayu-tils.js');
let sum = ArrayUtil.sumArr([1,2,3,4,5])
let min = ArrayUtils.minArr([1,2,3,4,5])
let isSorted = ArrayUtils.isSorted([])


module.exports = {};
module.exports.sumArr = sumArr;
module.exports.minArr = minArr;
module.exports.isSorted = isSorted;