"use strict";

const arithmetic = require("../lib/arithmetic.js");

describe("This tests all the functions of the arithmetic.js file", () => {
  describe("this tests the add function", () => {
    test("math.add will return the sum of two numbers", () => {
      expect(arithmetic.add(3, 6)).toEqual(9);
      //expect(math.add('cowmoo', 'moocow')).toEqual(null);
    });
  });
});
