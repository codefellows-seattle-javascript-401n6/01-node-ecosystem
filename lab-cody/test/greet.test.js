'use strict';

const greet = require('../lib/greet.js').greet;


describe('greet function ', () => {
  it('it should return null for an empty string',() => {
    let str = '';
    let result = greet(str);
    let expected = null;
    expected(result).toBe(expected);

  })
});

describe('greet function ', () => {
  it('it should return true for any non empty string',() => {
    let str = 'cody';
    let result = greet(str);
    let expected = true;
    expected(result).toBe(expected);


  })
});

describe('greet function ', () => {
  it('it should return hello world when world is passed in',() => {
    let str = 'world';
    let result = greet(str);
    let expected = true;
    expected(result).toBe(expected);
  })
})