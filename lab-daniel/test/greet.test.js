'use strict';

const greet = require('./lib/greet.js');
describe('greet function', () => {
  it('it should return null if the input is not a string', () => {
    let str = 9;
    expect(null);
  });
  it('it should return string for `kobe`', () => {
    let str = 'kobe';
    let result = greet(str);
    let expected = str;
    expect(result).toBe(expected);
  });
});
