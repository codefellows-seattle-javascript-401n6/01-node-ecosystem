'use strict';

const greet = require('../lib/greet.js').greet;

describe('greet function test for integer', () => {

  let expected = null;
  it('it should return null for an integer', () => {
    let str = 5;
    let result = greet(str);
    expect(result).toBe(expected);
  })

});

describe('greet function word = world', () => {

  let expected = 'hello world';
  it('it should return "hello world"', () => {
    let str = 'world';
    let result = greet(str);
    expect(result).toBe(expected);
  })

});