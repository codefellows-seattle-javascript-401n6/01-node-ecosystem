'use strict';

function sum(arr) {
    if(arr.length === 0) {
        return 0;
    }
    let result = arr.reduce((acc, curr) => acc + curr);
    return result; 
}

function min(arr) {
    if(arr.length === 0) {
        return undefined;
    }
    return Math.min(...arr);
}

function isSorted(arr) {
    if(arr.length == 0) {
        return true;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

module.exports.sum = sum;
module.exports.min = min;
module.exports.isSorted = isSorted; 
