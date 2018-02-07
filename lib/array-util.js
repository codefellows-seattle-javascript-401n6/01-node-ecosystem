'use strict';
var app = app || {};


    function Array() {};

    Array.addAll = (data) => { 
        if(data.length < 1){
            return 0;
        }else{
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    return data.reduce(reducer); 
    }}

    Array.minVal = (data) => {
        if(data.length < 1){
            return undefined;
        }else{
        return Math.min(...data);
        }
    }

    Array.ascending = (data) => {
        return data.every(function (a, b) {
            return b === 0 || a >= data[b - 1];
        });
    }
   //whats with the 3 dots//
    module.exports = {};
    module.exports.Array = Array;
