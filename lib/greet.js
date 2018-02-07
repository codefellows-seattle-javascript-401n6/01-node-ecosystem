// Greet Module
// Create a NodeJS module in the lib/ directory named greet.js that exports a single function.

// The greet function should have a single parameter (arity of one) that should expect a string as it's input
// The greet function should return the input name, concatenated with "hello ": eg. ("hello susan")
// The greet function should return null if the input is not a string
// Arithmetic Module
// Create a NodeJS module in the lib/ directory named arithmetic.js that exports an object. This module should have add and sub methods that implement addition and subtraction.

function greet(str) {
    if(typeof(str) !== 'string'){
        return null;
    }
    let name = "hello " + str;
    return name;

}

module.exports.greet = greet;

// The add method should have an arity of two (define two paramiters)
// If either parameter is a non-number the function should return null
// Else return the sum of the 2 numbers
// The sub method should have an arity of two (define two paramiters)
// If either parameter is a non-number the function should return null
// Else return the second paramiter subtracted from the first paramiter
// Array Util Module
// Create a NodeJS module in the lib/ directory named array-util.js that exports an object. This module should have the following methods:
// A sum function that accepts an array and returns the total of all the elements in the array.
// return 0 is the array is empty
// A min function that returns the smallest value from an array
// return undefined if the array is empty
// An isSorted function that returns true if all the elements in the array appear in ascending order.
// return true if the array is empty

