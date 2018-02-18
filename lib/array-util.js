'use strict';
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
   //I wanted these to be exported in one object so I didn't have to write them twice. 
   //Is there a better way to do this?
    module.exports = {};
    module.exports.Array = Array;
