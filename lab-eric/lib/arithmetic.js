'use strict';

function Arithmetic(a, b) {
    if (typeof(a) != 'number') {
        return null
    }
    if (typeof(b) != 'number') {
        return null
    } 
        return a + b;
};


function SubArithmetic(a, b) {
    if (typeof(a) != 'number') {
        return null
    }
    if (typeof(b) != 'number') {
        return null
    } 
        return a - b;
}

module.exports = {};
module.exports.Arithmetic = Arithmetic;
module.exports.SubArithmetic = SubArithmetic;





// The add method should have an arity of two (define two paramiters)
// If either parameter is a non-number the function should return null
// Else return the sum of the 2 numbers