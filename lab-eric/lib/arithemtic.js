'use strict';

const Arithmetic = {};

Arithmetic.add = function(a, b) {
    if (typeof(a) != 'number') {
        return null
    }
    if (typeof(b) != 'number') {
        return null
    } 
        return a + b;
};


const SubArithmetic = {};

Subarithmetic.sub = function(a, b) {
    if (typeof(a) != 'number') {
        return null
    }
    if (typeof(b) != 'number') {
        return null
    } 
        return b - a;
}








// The add method should have an arity of two (define two paramiters)
// If either parameter is a non-number the function should return null
// Else return the sum of the 2 numbers