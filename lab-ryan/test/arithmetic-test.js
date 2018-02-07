// arithmetic test
const add = require('../lib/arithmetic.js').add;
const sub = require('../lib/arithmetic.js').sub;

describe("add function", () => {
    it("it should add two numbers and return a sum", () => {
        expect(add(1, 2)).toBe(3);
    });
    it("it should add two numbers and return the sum", () => {
        expect(add(a, b)).toBe(c);
    });
    it("it should subtract two numbers and return the result", () => {
        expect(sub(6, 3)).toBe(3);
    });
    it("it should subtract two values and return the result", () => {
        expect(sub(a, b)).toBe(c);
    });
    
});