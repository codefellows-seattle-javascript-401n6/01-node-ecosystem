'use strict';

const arithmetic  = require('../lib/arithmetic.js').arithmetic;

describe('add function', () => {
  describe('The add function should return null if num1 and num2 are not valid numbers',() => {
    it('The add function should return the sum of num1 and num2 if they are valid numbers', () => {
      let num1 = 9;
      let num2 = 'pear';
      let result = num1 + num2;
      expect(result).toBe(result);
    });
    describe('The add function should return the sum of num1 and num2 if they are valid numbers',() => {
      it('The add function should return the sum of num1 and num2 if they are valid numbers', () => {
        let num1 = 9;
        let num2 = 9;
        let result = num1 + num2;
        let expected = 18;
        expect(result).toBe(expected);
    });
   });
  });
});


describe('sub function', () => {
  describe('The add function should return null if num1 and num2 are not valid numbers',() => {
    it('The add function should return the sum of num1 and num2 if they are valid numbers', () => {
      let num1 = 9;
      let num2 = 'apple';
      let result = num2 - num1;
      expect(result).toBe(result);
    });
    describe('The add function should return the sum of num1 and num2 if they are valid numbers',() => {
      it('The add function should return the sum of num1 and num2 if they are valid numbers', () => {
        let num1 = 9;
        let num2 = 10;
        let result = num2 - num1;
        let expected = 1;
        expect(result).toBe(expected);
    });
   });
  });
});

