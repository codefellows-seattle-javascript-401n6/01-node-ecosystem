
"use strict";

const greet = require('../lib/greet.js').greet;

describe("greet function", () => {
  describe("it should return null if not a string", () => {
    let expected = null;
    it("it should return null for an empty string", () => {
      let str = ''
      let result = greet(str);
      expect(result).toBe(expected);
    })
  describe("it should return hello + name", () => {
    let expected = "hello"+str;
    it("it should return true for 'a'", () => {
      let str = 'world'
      let result = greet(str);
      expect(result).toBe(expected);
    })

   
  })
})
})
