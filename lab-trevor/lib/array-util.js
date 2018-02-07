"use strict";

const ArrayUtil = {};

ArrayUtil.sum = function(arr) {
    if (Array.isArray(arr) === false){
        return null;
    }
    if (arr.length === 0) {
        return 0;
    }
    return arr.reduce( ( prev, cur ) => prev + cur )
}

ArrayUtil.min = function(arr) {
    if (Array.isArray(arr) === false){
        return null;
    }
    if (arr.length === 0) {
        return undefined;
    }
    return Math.min.apply( Math, arr);
}
ArrayUtil.isSorted = function(arr) {
    if (Array.isArray(arr) === false){
        return null;
    }
    if (arr.length === 0) {
        return true;
    }
    arr.reduce( function( prev, cur ){
        console.log(prev, cur);
        
        if(prev < cur){
            return true;
        } 
    })
}

module.exports = {};
module.exports.ArrayUtil = ArrayUtil;