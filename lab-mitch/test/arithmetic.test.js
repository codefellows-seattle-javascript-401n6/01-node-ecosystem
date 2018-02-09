"use strict";

const add = require('../lib/arithmetic.js').add;
const sub = require('../lib/arithmetic.js').sub;

describe("returnAdd function", () => {
  describe("Function should return null when either of the parameters are not a number", () => {
      let expected = null;
    it("Should return null if input is not a string", () => {
      let numOne = "not a number";
      let numTwo = "not a number";
      let result = add(numOne, numTwo);
      expect(result).toBe(expected);
    })
})
  describe("Function Add should return the value of NumOne added to NumTwo", () => {
    let expected = 24;
    it("it should return 24", () => {
        let numOne = 18;
        let numTwo = 6;
        let result = add(numOne, numTwo);
        expect(result).toBe(expected);
      })
    })
})

describe("returnSub function", () => {
    describe("Function should return null when either of the parameters are not a number", () => {
        let expected = null;
      it("Should return null if input is not a string", () => {
        let numOne = "not a number";
        let numTwo = "not a number";
        let result = sub(numOne, numTwo);
        expect(result).toBe(expected);
      })
  })
    describe("Function sub should return the value of numTwo subtracted from numOne", () => {
      let expected = 7;
      it("it should return 10", () => {
          let numOne = 21;
          let numTwo = 14;
          let result = sub(numOne, numTwo);
          expect(result).toBe(expected);
        })
      })
  })