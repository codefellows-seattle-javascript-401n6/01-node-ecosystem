'use strict';
var app = app || {};


    function Array() {};

    Array.addAll = (data) => { 
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    return data.reduce(reducer); 
    }
    module.exports = {};
    module.exports.Array = Array;
