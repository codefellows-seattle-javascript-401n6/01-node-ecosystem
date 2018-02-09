"use strict";

const returnGreet = require('../lib/greet.js').returnGreet;

describe("returnGreet function", () => {
  describe("Function should return null when the input is not a string", () => {
      let expected = null;
    it("Should return null if input is not a string", () => {
      let userName = 0
      let result = returnGreet(userName);
      expect(result).toBe(expected);
    })
})
  describe("it should return Hello + username", () => {
    let expected = "Hello World";
    it("it should return Hello World", () => {
        let userName = 'World'
        let result = returnGreet(userName);
        expect(result).toBe(expected);
      })
    })
})