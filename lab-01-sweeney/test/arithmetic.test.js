
"use strict";

const arithmetic = require('./arithmetic.js').arithmetic;

describe("it should return null if a parameter is NaN", () => {
  describe("return null if NaN", () => {
    let expected = null;
    it("it should return null for 'a'", () => {
      let num1 = 'a';
      let num2 = 2;
      let result = arithmetic.sum(num1, num2);
      expect(result).toBe(expected);
    })
   
  })

  describe("it should return null if a parameter is NaN", () => {
    describe("return null if NaN", () => {
      let expected = null;
      it("it should return null for 'a'", () => {
        let num1 = 'a';
        let num2 = 2;
        let result = arithmetic.sub(num1, num2);
        expect(result).toBe(expected);
      })
     
    })

  })


  describe("sum should return number when there are two number parameters", () => {
    let expected = true;
    it("it should return true for inputs of 5 and 7", () => {
      let num1 = 5;
      let num2 = 7;
      let total = arithmetic.sum(num1,num2);
      let result = (typeof result === 'number');
      expect(result).toBe(expected);
    })

    describe("sub should return number when there are two number parameters", () => {
      let expected = true;
      it("it should return true for inputs of 5 and 7", () => {
        let num1 = 5;
        let num2 = 7;
        let total = arithmetic.sub(num1,num2);
        let result = (typeof result === 'number');
        expect(result).toBe(expected);
      })

    })
  })
})