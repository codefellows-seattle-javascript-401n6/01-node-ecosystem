'use strict';

const Arithmetic = require('../lib/arithmetic.js').Arithmetic;

// test for adding
describe("Function will return null if either parameter is not a number", () => {  
        let expected = null
    it("If either number is not a number it returns null", () => {
        let num1 ="not a number";
        let num2 = "not a number";
        let result = Arithmetic.addAll(num1, num2)
        expect(result).toBe(expected);
        })
    })
describe("Function that will add if both parameters are numbers", () => {
        let expected = 15
    it("It should add up num1 and num2 if both numbers", () => {
        let num1 = 5;
        let num2 = 10;
        let result = Arithmetic.addAll(num1,  num2);
        expect(result).toBe(expected);
    })
})
//test for subtraction
describe("Function will return null if either parameter is not a number", () => {  
        let expected = null
    it("If either number is not a number it returns null", () => {
        let num1 ="not a number";
        let num2 = "not a number";
        let result = Arithmetic.subAll(num1, num2)
        expect(result).toBe(expected);
        })
    })
describe("Function that will subtract if both parameters are numbers", () => {
        let expected = 5;
    it("It will subtract num2 from num1 if both parameters are numbers", () => {
        let num1 = 5;
        let num2 = 10;
        let result = Arithmetic.subAll(num1, num2);
        expect(result).toBe(expected);
    })
})
