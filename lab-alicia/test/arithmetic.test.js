'use strict';

const math = require('../lib/arithmetic.js');

describe('testing math', () => {
  
  describe('testing add function', () => {
    it('adds 3 + 4 to equal 7', () => {
      let result = math.add(3,4);
      expect(result).toEqual(7);
    });
    it('adds a string + 4 to equal null', () => {
      let result = math.add('not a number',4);
      expect(result).toEqual(null);
    });
  });
 
  describe('testing subtract function', () => {
    it('subtracts 12 - 7 to equal 5', () => {
      let result = math.sub(12,7);
      expect(result).toEqual(5);
    });
    it('adds a string + 4 to equal null', () => {
      let result = math.sub('not a number',7);
      expect(result).toEqual(null);
    });
  });
});