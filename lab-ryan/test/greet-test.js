'use strict';

// greet test
const greet = require('../lib/greet.js').greet;


describe('greet function ', () => {
  it('it should return null for an empty string',() => {
    let str = '';
    let result = greet(str);
    let expected = null;
    expect(result).toBe(expected);
  })
});

describe('greet function ', () => {
    it('it should return true for any non empty string',() => {
      let str = 'dude';
      let result = greet(str);
      let expected = 'hello ' + 'dude';
      expect(result).toBe(expected);
    })
  });

describe('greet function ', () => {
  it('it should return hello world when world is passed in',() => {
    let str = 'world';
    let result = greet(str);
    let expected = 'hello ' + 'world';
    expect(result).toBe(expected);
  })
});
