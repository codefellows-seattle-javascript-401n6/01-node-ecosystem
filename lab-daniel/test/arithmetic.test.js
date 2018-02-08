'use strict'

const arithmetic  = require('../lib/arithmetic.js').arithmetic;

describe('add function', () => {
    test('it should return null if one of the parameters are not a number', () => {
        let num1 = 1;
        let num2 = 'pear';
        let result = num1 + num2;
        let expected = null;
        expect(result).toBe(expected);
    });
    test('it should return the sum of the numbers', () => {
      let num1 = 1;
      let num2 = 1;
      let result = num1 + num2;
      let expected = 2;
      expect(result).toBe(expected);
    });
  });
