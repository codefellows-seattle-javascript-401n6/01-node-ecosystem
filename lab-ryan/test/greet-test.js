"use strict";
// greet test
const greet = require('../lib/greet.js');

describe("greet function", () => {
    it("it should return null with non-string value", () => {
        let str = '';
        let result = greet(str);
        let expected = null;
        expect(result).toBe(expected); 
    });
    it("it should return 'hello world'", () => {
        let str = 'world';
        let result = greet(str);
        let expected = 'hello world';
        expect(result).toBe(expected); 
    })
});
