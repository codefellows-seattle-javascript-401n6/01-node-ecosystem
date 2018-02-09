"use strict";

const greet = require('../lib/greet.js').greet;

describe("greet function", () => {
    it("it should return null for an empty str", () => {
        let expected = null;
        let str = 0;
        let result = greet(str);
        expect(result).toBe(expected);
    })
    it("it should return hello world", () => {
        let expected = "hello world";
        let str = "world";
        let result = greet(str);
        expect(result).toBe(expected);
    })
    
})