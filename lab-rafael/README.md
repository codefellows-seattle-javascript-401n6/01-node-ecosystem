#### Greet Module
module.exports.greet
* The `greet` function has a single parameter (arity of one) that should expect a string as it's input
* The `greet` function returns the input name, concatenated with "hello ": eg. ("hello world")
* The `greet` function returns `null` if the input is not a string

#### Arithmetic Module
module.exports.sum
module.exports.sub
This module has `add` and `sub` methods that implement addition and subtraction.  
* The `add` method has an arity of two.
  * If either parameter is a non-number the function returns null
  * Else return the sum of the 2 numbers
* The `sub` method has an arity of two
  * If either parameter is a non-number the function returns null
  * Else it returns the second paramiter subtracted from the first paramiter
   
#### Array Util Module
module.exports.sum
module.exports.min
module.exports.isSorted
  This module hs the following methods:
  * A `sum` function that accepts an array and returns the total of all the elements in the array.
   * return `0` is the array is empty
  * A `min` function that returns the smallest value from an array
   * return `undefined` if the array is empty
  * An `isSorted` function that returns `true` if all the elements in the array appear in ascending order.
   * returns `true` if the array is empty


