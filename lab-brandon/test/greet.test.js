'use strict';

const greet = require('../lib/greet.js').greet

//greet test
describe("greet function", () => {  //describe what you’re testing
    it("it should return false for an empty string", () => {
        let str = ''
        let result = greet(str)
        expect(result).toBe(null);
    })
    it("it will output the str and the greeting of Hello", () => {
        let str = 'bob'
        let result = greet(str)
        expect(result).toBe('Hello bob');
    })
})
