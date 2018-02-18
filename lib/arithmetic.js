'use strict';

function arthmeticSum(i,j){
    if(typeof i === 'number' && typeof j === 'number'){
    return i + j;
    }else{ 
        return null;
    }
}

function arthmeticSub(a,b){
    if(typeof a === 'number' && typeof b === 'number'){
        return a - b;
        }else{ 
            return null;
        }
}

module.exports = {};
module.exports.arthmeticSum = arthmeticSum;
module.exports.arthmeticSub = arthmeticSub;
