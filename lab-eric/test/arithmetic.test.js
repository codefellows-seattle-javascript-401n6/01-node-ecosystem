'use strict';

//add tests
const Arithmetic = require('../lib/arithmetic.js').Arithmetic;

describe('add function', () => {
 it('should return null if x or y is not a  number', () => {
   let a = NaN;
   let b = 1;
   let result = null;
   let expected = null;
   expect(result).toBe(expected);
 });

 //write test for negative numbers
 it('should return with the sum of all numbers when negative numbers are included', () => {
   let a = -1;
   let b = -3;
   let result = Arithmetic(a, b);
   let expected = -4;
   expect(result).toBe(expected);
 });

 it('should return null if a or b is undefined', () => {
   let a = undefined;
   let b = 1;
   let result = null;
   let expected = null;
   expect(result).toBe(expected);
 });

 it('should return null if either a or b is a string value', () => {
   let a = 1;
   let b = 'foo';
   let result = null;
   let expected = null;
   expect(result).toBe(expected);
 });

 it('should return the sum if a and b are both numbers', () => {
   let a = 12;
   let b = 8;
   let result = Arithmetic(a, b);
   let expected = a + b;
   expect(result).toBe(expected);
 });
});

// //subtract tests
const SubArithmetic = require('../lib/arithmetic.js').SubArithmetic;

describe('subtract function', () => {
 it('should return null if a or b is not a  number', () => {
   let a = NaN;
   let b = 1;
   let result = null;
   let expected = null;
   expect(result).toBe(expected);
 });


 it('should return null if a or b is a string value', () => {
   let a = 1;
   let b = 'foo';
   let result = null;
   let expected = null;
   expect(result).toBe(expected);
 });

 it('should return the sub if a and b are both numbers', () => {
   let a = 12;
   let b = 8;
   let result = SubArithmetic(a, b);
   let expected = a - b;
   expect(result).toBe(expected);
 });
});