"use strict";

const arithmetic = require('../lib/arithmetic.js').Arithmetic;

describe("arithmetic test", () => {
    describe("addition tests", () => {
        it("it should return the sum of the numbers", () => {
            let expected = 5;
            let x = 3;
            let y = 2;
            let result = arithmetic.add(x, y);
            expect(result).toBe(expected);
        })
        it("it should return null with non numbers", () => {
            let expected = null;
            let x = 'foo';
            let y = 2;
            let result = arithmetic.add(x, y);
            expect(result).toBe(expected);
        })
    })
    describe("subtraction tests", () => {
        it("it should return the the the first number less the second", () => {
            let expected = 1;
            let x = 3;
            let y = 2;
            let result = arithmetic.sub(x, y);
            expect(result).toBe(expected);
        })
        it("it should return null with non numbers", () => {
            let expected = null;
            let x = 'foo';
            let y = 2;
            let result = arithmetic.sub(x, y);
            expect(result).toBe(expected);
        })
    })
})

