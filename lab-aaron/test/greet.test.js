'use strict';

//greet tests
const greet = require('../lib/greet.js').greet;

describe('greet function', () => {
  test('should return null when input is not a string', () => {
    let str = 1;
    let result = greet(str);
    let expected = null;
    expect(result).toBe(expected);
  });

  it('should return null when input is undefined', () => {
    let str = undefined;
    let result = greet(str);
    let expected = null;
    expect(result).toBe(expected);
  });

  it('should return with the hello + str  if the input is a string', () => {
    let str = 'world';
    let result = greet(str);
    let expected = 'hello ' + str;
    expect(result).toBe(expected);
  });
});