"use strict";

const arithmetic = require("../lib/arithmetic.js");

describe("This tests all the functions of the arithmetic.js file", () => {
  describe("this tests the add function", () => {
    test("math.add will return the sum of two numbers or null if no numbers are input", () => {
      expect(arithmetic.add(3, 6)).toEqual(9);
      expect(arithmetic.add('cowmoo', 'moocow')).toEqual(null);
    });
  });
  describe('arithmetic.subtract', () => {
    test('arithmetic.subtract should return the difference of two numbers unless an error is encountered and will return null if a non number is input', () => {
      expect(arithmetic.subtract(6, 5)).toEqual(1);
      expect(arithmetic.subtract('CowPatty')).toEqual(null);
    });
  });
});
