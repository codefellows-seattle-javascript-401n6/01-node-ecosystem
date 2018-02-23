# Mitch Hall 
##### Codefellows 401 FullStack Javascript
##### Lab 01

The point of this lab is to introduce Test based development in the Node Ecosystem.

There are two main requirements of this lab.

1) Create modules that will perform operations on integers and arrays 
2) Create a test module that will confirm the modules work correctly.

The modules are listed below with I/O descriptions. 


### arithmetic.js

Input: 
The Arithmetic.add method expects two integers to be passed in as parameters. 

Output:
The function has two possible returns.
If either of the passed in parameters are not integers, the function should return: null.
If both parameters are integers, the function should return: the sum of those parameters.

### array-util.js

Input: 
The array-util method expects an array to be passed in as a parameter. 

Output:
If the passed in array is empty, the module should return: 0.
Of the array is populated with integers, the module should return: sum of all the integers. 

### array.min 

Input: 
This method expects an array as an input

Output: 
The method should return: undefined if the array is empty.
The method should return: the smallest value in the array if the array is populated with integers.

### ArrayUtil.isSorted 

Input: 
The method expects an array of integers.

Output: 
If the integers in the array are arranged in ascending or descending order return: true
If the integers in the array are not arranged in ascending or descending order return: false


### greet.js

Input:
The method expects a string to be passed in as an argument.

Output:
If the argument passed in is a string, the method will return: 'hello' concatenated with the string.
If the string is empty, the method will return: false.

### TESTING

The following three test suites are used to ensure the above methods work correct.

The test suits pass in values to the arrays and compares the method outputs to known values to ensure the methods are producing correct results.

The tests can be run from the command line using the command: jest.

Requirements: NPM must be initialized, or the file: jest.config.js must exist in the directory.


arithmetic.test.js
array-util.test.js
greet.test.js

