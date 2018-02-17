'use strict';

const sum = require('../lib/array-util.js').sum;
const min = require('../lib/array-util.js').min;
const isSorted = require('../lib/array-util.js').isSorted;

describe('sum function', () => {
 test('should return 0 if the array is empty', () => {
   let arr = [];
   let result = sum(arr);
   let expected = 0;
   expect(result).toBe(expected);
 });
 
 it('should return a sum of all numbers in array is they are all positive', () => {
   let arr = [1, 2, 4, 3];
   let result = sum(arr);
   let expected = 10;
   expect(result).toBe(expected);
 });
 
 it('should return with the sum of all elements even if there are negative numbers in the array', () => {
   let arr = [1, -2, 4, -5];
   let result = sum(arr);
   let expected = -2;
   expect(result).toBe(expected);
 });
});


describe('min function', () => {
 //needs fixing
 test('should return undefined if the array is empty', () => {
   let arr = [];
   let result = min(arr);//ends up returning Infinity instead of undefined
   let expected = undefined;
   expect(result).toBe(expected);
 });

 test('should return the smallest number when the array only has one value', () => {
   let arr = [5];
   let result = min(arr);
   let expected = 5;
   expect(result).toBe(expected);
 });
 
 it('should return the smallest number in a small collection of numbers', () => {
   let arr = [1, 2, 4, 3];
   let result = min(arr);
   let expected = 1;
   expect(result).toBe(expected);
 });
 
 it('should return the smallest number when there\'s a collection of both positive and negative numbers', () => {
   let arr = [1, -2, 4, -5];
   let result = min(arr);
   let expected = -5;
   expect(result).toBe(expected);
 });
});


describe('isSorted function', () => {
 test('should return true if the array is empty', () => {
   let arr = [];
   let result = isSorted(arr);
   let expected = true;
   expect(result).toBe(expected);
 });

 test('should return true when the array only has one value', () => {
   let arr = [5];
   let result = isSorted(arr);
   let expected = true;
   expect(result).toBe(expected);
 });
 
 it('should return true for a sorted array', () => {
   let arr = [1, 2, 11, 13];
   let result = isSorted(arr);
   let expected = true;
   expect(result).toBe(expected);
 });
 
 it('should return false for an unsorted array', () => {
   let arr = [1, -2, 4, -5];
   let result = isSorted(arr);
   let expected = false;
   expect(result).toBe(expected);
 });
});