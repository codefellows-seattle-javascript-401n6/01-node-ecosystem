'use strict';

//greet tests
const greet = require('./lib/greet.js').greet;

describe('greet function', () => {
  it('should return null when input is not a string', () => {
    let str = 1;
    let result = greet(str);
    expected = null;
    expect(result).toBe(expected);
  });

  it('should return with the hello + str  if the input is a string', () => {
    let str = '';
    let result = greet(str);
    expected = 'hello ' + str;
    expect(result).toBe(expected);
  });
});


//add tests
const add = require('./lib/greet.js').add;

describe('add function', () => {
  it('should return null if x or y is not a  number', () => {
    let x = undefined;
    let y = 1;
    let result = null;
    expected = null;
    expect(result).toBe(expected);
  });

  it('should return null if x or y is a string value', () => {
    let x = 1;
    let y = 'foo';
    let result = null;
    expected = null;
    expect(result).toBe(expected);
  });

  it('should return the sum if x and y are both numbers', () => {
    let x = 12;
    let y = 8;
    let result = add(x, y);
    expected = x + y;
    expect(result).toBe(expected);
  });
});

//subtract tests
const subtract = require('./lib/subtract.js').add;

describe('subtract function', () => {
  it('should return null if x or y is not a  number', () => {
    let x = undefined;
    let y = 1;
    let result = null;
    expected = null;
    expect(result).toBe(expected);
  });

  it('should return null if x or y is a string value', () => {
    let x = 1;
    let y = 'foo';
    let result = null;
    expected = null;
    expect(result).toBe(expected);
  });

  it('should return the sub if x and y are both numbers', () => {
    let x = 12;
    let y = 8;
    let result = subtract(x, y);
    expected = x - y;
    expect(result).toBe(expected);
  });
});