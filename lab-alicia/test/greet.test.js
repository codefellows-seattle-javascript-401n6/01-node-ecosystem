'use strict';

// Write a test that expects the greet module to return null when you supply non string values
// Write a test the expects the greet module to return 'hello world'
// This should happen when invoked with 'world' as the first argument

const greet = require('../lib/greet.js').greet;

describe('Greet module', () => {
  it('should return a string', () => {
    let result = greet('world');
    expect(result).toEqual('hello world');
  });
  it('return null for non string variable', () => {
    let result = greet(15);
    expect(result).toEqual(null);
  });
});