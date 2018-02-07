
"use strict";

const arithmetic = require('./arithmetic.js').arithmetic;

describe("arithmetic function, add and substract", () => {
  describe("return null if NaN", () => {
    let expected = null;
    it("it should return null", () => {
      let num = ''
      let result = (num);
      expect(result).toBe(expected);
    })
    it("it should return a num if two parameters are numbers", () => {
      let str = 'b'
      let result = arithmetic();
      expect(result).toBe(expected);
    })
    it("it should return false for 'dkjfdskfhk' ", () => {
      let str = 'dkjfdskfhk'
      let result = containsVowels(str);
      expect(result).toBe(expected);
    })
  })


  describe("it should return true when there are vowels", () => {
    let expected = true;
    it("it should return true for 'a'", () => {
      let str = 'a'
      let result = containsVowels(str);
      expect(result).toBe(expected);
    })

    it("it should return true for 'taxi' ", () => {
      let str = 'taxi'
      let result = containsVowels(str);
      expect(result).toBe(expected);
    })
  })
})