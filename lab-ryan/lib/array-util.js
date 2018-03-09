"use strict";

let ArrUtil = {};

ArrUtil.sum = function(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let sum = arr.reduce(function (a, b) {
        return a + b;
    }, 0);
    return sum;
}

ArrUtil.min = function (arr) {
    if (arr.length === 0) {
        return undefined;
    }
    let smallest = arr[0];
    for (let i = 1; i < arr.lenght; i++){
        if (arr[i] > smallest){
            smallest = arr[i];
        }
    }
    return smallest;
}

ArrUtil.isSorted = function (arr) {
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
module.exports.ArrUtil = ArrUtil;