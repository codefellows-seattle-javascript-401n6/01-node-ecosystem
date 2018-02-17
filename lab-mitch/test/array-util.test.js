"use strict";

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
  
  it('should return a sum of all numbers in array if they are all positive', () => {
    let arr = [2, 4, 6, 8];
    let result = sum(arr);
    let expected = 20;
    expect(result).toBe(expected);
  });
  
  it('should return with the sum of all elements even if there are negative numbers in the array', () => {
    let arr = [3, -4, 8, -3];
    let result = sum(arr);
    let expected = 4;
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
    let arr = [8];
    let result = min(arr);
    let expected = 8;
    expect(result).toBe(expected);
  });
  
  it('should return the smallest number in a small collection of numbers', () => {
    let arr = [4, 7, 9, 2];
    let result = min(arr);
    let expected = 2;
    expect(result).toBe(expected);
  });
  
  it('should return the smallest number when there\'s a collection of both positive and negative numbers', () => {
    let arr = [7, -3, 9, -4];
    let result = min(arr);
    let expected = -4;
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
    let arr = [9];
    let result = isSorted(arr);
    let expected = true;
    expect(result).toBe(expected);
  });
  
  it('should return true for a sorted array', () => {
    let arr = [3, 7, 12, 15];
    let result = isSorted(arr);
    let expected = true;
    expect(result).toBe(expected);
  });
  
  it('should return false for an unsorted array', () => {
    let arr = [3, -6, 5, -9];
    let result = isSorted(arr);
    let expected = false;
    expect(result).toBe(expected);
  });
});