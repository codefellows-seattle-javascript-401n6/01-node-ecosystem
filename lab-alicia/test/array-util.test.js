'use strict';

const ArrUtil = require('../lib/array-util.js').ArrUtil;

// sum
describe('testing sum array', () => {
  it('return 0 for an empty array', () => {
    let arr = [];
    let result = ArrUtil.sumArr(arr);
    expect(result).toBe(0);
  });

  it('return sum for array of positive numbers', () => {
    let arr = [1, 2, 3, 4, 5];
    let result = ArrUtil.sumArr(arr);
    expect(result).toBe(15);
  });

  it('return sum for array of negative numbers', () => {
    let arr = [-1, 2, -3, 4, -5];
    let result = ArrUtil.sumArr(arr);
    expect(result).toBe(-3);
  });
});

// min
describe('testing minimum array', () => {
  it('return undefined if the array is empty', () => {
    let arr = [];
    let result = ArrUtil.minArr(arr);
    expect(result).toBe(undefined);
  });

  it('return smallest number when the array has one value', () => {
    let arr = [1];
    let result = ArrUtil.minArr(arr);
    expect(result).toBe(1);
  });

  it('return smallest number in an array of numbers', () => {
    let arr = [1, 3, 5, 2, 4];
    let result = ArrUtil.minArr(arr);
    expect(result).toBe(1);
  });

  it('return smallest number in an array of positive and negative numbers', () => {
    let arr = [-1, 2, 3, 4, 5];
    let result = ArrUtil.minArr(arr);
    expect(result).toBe(-1);
  });
});

// sort
describe('testing sorting array', () => {
  it('return true for an empty array', () => {
    let arr = [];
    let result = ArrUtil.isSorted(arr);
    expect(result).toBe(true);
  });

  it('return true when array only has one value', () => {
    let arr = [1];
    let result = ArrUtil.isSorted(arr);
    expect(result).toBe(true);
  });

  it('return true for a sorted array', () => {
    let arr = [1, 2, 3, 4, 5];
    let result = ArrUtil.isSorted(arr);
    expect(result).toBe(true);
  });

  it('should return false for an unsorted array', () => {
    let arr = [1, -2, 5, -4, -3];
    let result = ArrUtil.isSorted(arr);
    expect(result).toBe(false);
  });
});