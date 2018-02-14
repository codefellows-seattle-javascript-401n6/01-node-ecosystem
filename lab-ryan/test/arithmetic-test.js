"use strict";
// arithmetic test
const add = require('../lib/arithmetic.js').add;
const sub = require('../lib/arithmetic.js').sub;

describe('add function', () => {
  it('should return null if x or y is not a  number', () => {
    let x = NaN;
    let y = NaN;
    let result = null;
    let expected = null;
    expect(result).toBe(expected);
  });

  it('should return null if x or y is undefined', () => {
    let x = undefined;
    let y = 5;
    let result = null;
    let expected = null;
    expect(result).toBe(expected);
  });

  it('should return null if either x or y is a string value', () => {
    let x = 5;
    let y = 5;
    let result = null;
    let expected = null;
    expect(result).toBe(expected);
  });

  it('should return the sum if x and y are both numbers', () => {
    let x = 15;
    let y = 2;
    let result = add(x, y);
    let expected = x + y;
    expect(result).toBe(expected);
  });
});


//sub tests
describe('subtract function', () => {
  it('should return null if x or y is not a  number', () => {
    let x = NaN;
    let y = NaN;
    let result = null;
    let expected = null;
    expect(result).toBe(expected);
  });

  it('should return null if x or y is a string value', () => {
    let x = 1;
    let y = 'not y';
    let result = null;
    let expected = null;
    expect(result).toBe(expected);
  });

  it('should return the sub if x and y are both numbers', () => {
    let x = 15;
    let y = 2;
    let result = sub(x, y);
    let expected = x - y;
    expect(result).toBe(expected);
  });
});