'use strict';

const ArrayUtil = require('../lib/array-util.js');

// ArrayUtil.sum tests

describe('testing array sum for empty array', () => {

  let expected = 0;
  it('it should return 0', () => {
    let array = [];
    let result = ArrayUtil.sum(array);
    expect(result).toBe(expected);
  })

});

describe('testing array sum for proper addition of positive numbers', () => {

  let expected = 3;
  it('it should return 3', () => {
    let array = [0, 1, 2];
    let result = ArrayUtil.sum(array);
    expect(result).toBe(expected);
  })

});

describe('testing array sum for proper addition negative numbers', () => {

  let expected = -6;
  it('it should return -6', () => {
    let array = [-1, -2, -3];
    let result = ArrayUtil.sum(array);
    expect(result).toBe(expected);
  })

});

// ArrayUtil.min tests

describe('testing array min empty array', () => {

  let expected = undefined;
  it('it should return undefined', () => {
    let array = [];
    let result = ArrayUtil.min(array);
    expect(result).toBe(expected);
  })

});

describe('testing array min for array with only 1 value', () => {

  let expected = 3;
  it('it should return 3', () => {
    let array = [3];
    let result = ArrayUtil.min(array);
    expect(result).toBe(expected);
  })

});

describe('testing array min for array of 3, 2, 1', () => {

  let expected = 1;
  it('it should return 1', () => {
    let array = [3, 2, 1];
    let result = ArrayUtil.min(array);
    expect(result).toBe(expected);
  })

});

describe('testing array min for array of 3, -2, 1', () => {

  let expected = -2;
  it('it should return -2', () => {
    let array = [3, -2, 1];
    let result = ArrayUtil.min(array);
    expect(result).toBe(expected);
  })

});

// ArrayUtil.isSorted tests

describe('testing array isSorted for empty array, single element array, or a sorted array', () => {

  let expected = true;
  it('it should return true', () => {
    let array = [];
    let result = ArrayUtil.isSorted(array);
    expect(result).toBe(expected);
  })

  it('it should return true', () => {
    let array = [1];
    let result = ArrayUtil.isSorted(array);
    expect(result).toBe(expected);
  })

  it('it should return true', () => {
    let array = [1, 2, 3, 4];
    let result = ArrayUtil.isSorted(array);
    expect(result).toBe(expected);
  })

  it('it should return true for descending', () => {
    let array = [5, 4, 3, 2];
    let result = ArrayUtil.isSorted(array);
    expect(result).toBe(expected);
  })

});

describe('testing array isSorted non sorted array', () => {

  let expected = false;
  it('it should return false', () => {
    let array = [1, 2, -1, 5];
    let result = ArrayUtil.isSorted(array);
    expect(result).toBe(expected);
  })

});