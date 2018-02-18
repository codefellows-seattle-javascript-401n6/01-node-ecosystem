"use strict";
const containsVowls = require('./word.js').containsVowls;

describe("containsVowels function", () => {
    describe("it should return false when ther is no vowels", () => {
    let expected = true; 
    it("it should return false for an empty string", () => {
            let str = ''
            let result = containsVowls(str);
            let expected = false;
            expect(result).toBe(expected);
        })

        it("it should return false for 'b'", () => {
            let str = 'b'
            let result = containsVowls(str);
            let expected = false;
            expect(result).toBe(expected);
        })
    
        it("it should return false for 'tklsdjfldj'", () => {
            let str = 'tklsdjfldj'
            let result = containsVowls(str);
            let expected = false;
            expect(result).toBe(expected);
        })
    })

    describe("it should return true when there are vowels", () => {

        it("it should return true for 'taxi'", () => {

        })
        it("it should return true for 'a'", () => {

        })
    })
})