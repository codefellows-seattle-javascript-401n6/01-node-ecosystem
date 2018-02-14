"use strict";
// arithmetic test
const add = require('../lib/arithmetic.js').add;
const sub = require('../lib/arithmetic.js').sub;

/////////////////

describe('add function', () => {
  it('should return null if x or y is not a  number', () => {
    let x = NaN;
    let y = 1;
    let result = null;
    let expected = null;
    expect(result).toBe(expected);
  });

  it('should return null if x or y is undefined', () => {
    let x = undefined;
    let y = 1;
    let result = null;
    let expected = null;
    expect(result).toBe(expected);
  });

  it('should return null if either x or y is a string value', () => {
    let x = 1;
    let y = 'foo';
    let result = null;
    let expected = null;
    expect(result).toBe(expected);
  });

  it('should return the sum if x and y are both numbers', () => {
    let x = 12;
    let y = 8;
    let result = add(x, y);
    let expected = x + y;
    expect(result).toBe(expected);
  });
});


//sub tests
describe('subtract function', () => {
  it('should return null if x or y is not a  number', () => {
    let x = NaN;
    let y = 1;
    let result = null;
    let expected = null;
    expect(result).toBe(expected);
  });

   //write test for negative numbers

  it('should return null if x or y is a string value', () => {
    let x = 1;
    let y = 'foo';
    let result = null;
    let expected = null;
    expect(result).toBe(expected);
  });

  it('should return the sub if x and y are both numbers', () => {
    let x = 12;
    let y = 8;
    let result = subtract(x, y);
    let expected = x - y;
    expect(result).toBe(expected);
  });
});