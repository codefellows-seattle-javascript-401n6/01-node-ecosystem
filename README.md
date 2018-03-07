# Ronnie Lewis 
##### Codefellows 401 FullStack Javascript
### Lab 01

### configuration 

README.md - contains documentation
.gitignore - contains a robust .gitignore file
.eslintrc - contains the course linter configuratoin
.eslintignore - contains the course linter ignore configuration
lib/ - contains module definitions
test/ - contains unit tests

### greet module

Created a NodeJS module in the lib/ directory named greet.js that exports a single function.

The greet function should have a single parameter (arity of one) that should expect a string as it's input

The greet function should return the input name, concatenated with "hello ": eg. ("hello susan")

The greet function should return null if the input is not a string

### arithmetic module

Created a NodeJS module in the lib/ directory named arithmetic.js that exports an object. This module should have add and sub methods that implement addition and subtraction.

The add method should have an arity of two (define two paramiters)
  If either parameter is a non-number the function should return null
  Else return the sum of the 2 numbers

The sub method should have an arity of two (define two paramiters)
  If either parameter is a non-number the function should return null
  Else return the second paramiter subtracted from the first paramiter

### array util module

Create a NodeJS module in the lib/ directory named array-util.js that exports an object. This module should have the following methods:

  A sum function that accepts an array and returns the total of all the elements in the array.
  return 0 is the array is empty

  A min function that returns the smallest value from an array
  return undefined if the array is empty

  An isSorted function that returns true if all the elements in the array appear in ascending order.
  return true if the array is empty

### greet module tests

Write a test that expects the greet module to return null when you supply non string values

Write a test the expects the greet module to return 'hello world'
This should happen when invoked with 'world' as the first argument


### arithmetic module test

Test each method for proper use (invoded with number arguments)

Test each method for inproper use (invoded with one or more non-numner arguments)

### array util module test

Test sum to make sure it returns 0 for an empty array.

Test sum to make sure it adds positive numbers properly

Test sum to make sure it adds nagative numbers properly

Test min to make sure it returns undefined for an empty array

Test min to make sure it returns the smallest number when the array only has one value

Test min to make sure it returns the smallest number in a small collection of numbers

Test min to make sure it returns the smallest number when there's a collection of both positive and negative numbers

Test isSorted to make sure it returns true for an empty array

Test isSorted to make sure it returns true for a single-element array

Test isSorted to make sure it returns true for a sorted array

Test isSorted to make sure it returns false for an unsorted array
