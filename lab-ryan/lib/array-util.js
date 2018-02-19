"use strict";

function sum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let sum = arr.reduce(function (a, b) {
        return a + b;
    }, 0);
    return sum;
}

function min(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    let small = arr[0];
    for (let i = 1; i < arr.lenght; i++){
        if (arr[i] < small){
            small = arr[i];
        }
    }
    return small;
}

function isSorted(arr) {
    let isSorted;
    if(arr[0] < arr[arr.length-1]){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] >  arr[i + 1]){
                return false;
            }
        }
    }
    if(arr[0] > arr[arr.length-1]){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] < arr[i + 1]){
                return false;
            }
        }
    }
    return true;
}


module.exports = {};
module.exports.sum = sum;
module.exports.min = min;
module.exports.isSorted = isSorted;