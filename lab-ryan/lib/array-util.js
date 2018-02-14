"use strict";

function sum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    var sum = arr.reduce(function (a, b) {
        return a + b;
    }, 0);
    return sum;
}

function min(arr) {
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

module.exports = {};
module.exports.sum = sum;
module.exports.min = min;
module.exports.isSorted = isSorted;