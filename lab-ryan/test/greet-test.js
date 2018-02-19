"use strict";

// greet test
const greet = require('../lib/greet.js').greet;

describe("greet function", () => {
    it("it should return null with non-string value", () => {
        let str = 1;
        let result = greet(str);
        let expected = null;
        expect(result).toBe(expected); 
    });
    it("it should return 'hello world'", () => {
        let str = 'world';
        let result = greet(str);
        let expected = 'hello world';
        expect(result).toBe(expected); 
    });
    it("it should return null if input is undefinede",() => {
        let str = undefined;
        let result = greet(str);
        let expected =  null;
        expect(result).toBe(expected); 
    });
});
