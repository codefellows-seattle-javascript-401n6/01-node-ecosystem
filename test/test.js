"use strict";

const greeting = require('../lib/greet.js').greeting;
const arthmeticSum = require('../lib/arithmetic.js').arthmeticSum;
const arthmeticSub = require('../lib/arithmetic.js').arthmeticSub;
const ascending = require('../lib/array-util.js').ascending;
const minVal = require('../lib/array-util.js').minVal;
const addAll = require('../lib/array-util.js').addAll;

describe("greeting function", () => {
    describe("Should return true if string", () => {
        it("it should return ture for 'world'", () => {
            let str = 'world';
            let result = greeting(str)
            let expected = 'hello world'
            expect(result).toBe(expected);
        })
    })
    describe("Should return null if not a string", () => {
        it("it should retrun false for '32843208'", () =>{
            let num = 32843208;
            let result = greeting(num)
            let expected = null;
            expect(result).toBe(expected);
        })

    })

}) 

/// arithmetic test//
//sum//
describe("arthmeticSum function", () => {
    describe("Should return sum if number", () => {
        it("it should return 10 for '5+5'", () => {
            let i = 5;
            let j = 5;
            let result = arthmeticSum(i,j)
            let expected = 10;
            expect(result).toBe(expected);
        })
    })
    describe("Should return null if not a number", () => {
        it("it should retrun false for 'lol'", () =>{
            let string = 'lol';
            let result = arthmeticSum(string)
            let expected = null;
            expect(result).toBe(expected);
        })

    })

//sub//

    describe("Should return subtraction if number", () => {
        it("it should return 5 for '10+5'", () => {
            let a = 10;
            let b = 5;
            let result = arthmeticSub(a,b)
            let expected = 5;
            expect(result).toBe(expected);
        })
    })
    describe("Should return null if not a number", () => {
        it("it should retrun false for 'lol'", () =>{
            let string = 'lol';
            let result = arthmeticSub(string)
            let expected = null;
            expect(result).toBe(expected);
        })

    })
}) 

//arrrrrr//
describe("arr function", () => {
    describe("Should return sum of array", () => {
        it("it should return 5 for [1,1,1,1,1]", () => {
            let arr = [1,1,1,1,1];
            let result = addAll(arr)
            let expected = 5;
            expect(result).toBe(expected);
        })
        it("should return -13 for [-5,-6,-2]", () =>{
            let arr = [-5,-6,-2];
            let result = addAll(arr)
            let expected = -13;
            expect(result).toBe(expected);
        })
    })
    describe("Should return 0 if array is empty", () => {
        it("it should return 0 for []", () => {
            let arr = [];
            let result = addAll(arr)
            let expected = 0;
            expect(result).toBe(expected);
        })
    })
    describe("Should return smallest value from array", () => {
        it("it should return 4 for [5,4,6,7,8]", () => {
            let arr = [5,4,6,7,8];
            let result =  minVal(arr)
            let expected = 4;
            expect(result).toBe(expected);
        })
        it("it should return undefined for []", () => {
            let arr = [];
            let result =  minVal(arr)
            let expected = undefined;
            expect(result).toBe(expected);
        })
        it("it should return 1 for [1]", () => {
            let arr = [1];
            let result =  minVal(arr)
            let expected = 1;
            expect(result).toBe(expected);
        })
        it("it should return 1 for [1,2,3,-5,-6]", () => {
            let arr = [1,2,3,-5,-6];
            let result =  minVal(arr)
            let expected = -6;
            expect(result).toBe(expected);
        })
    })
});
describe("Should return true if array is in ascending order", () => {
    it("it should return true for [1,2,3,4]", () => {
        let arr = [1,2,3,4];
        let result =  ascending(arr)
        let expected = true;
        expect(result).toBe(expected);
    })
    it("it should return undefined for []", () => {
        let arr = [];
        let result =  ascending(arr)
        let expected = true;
        expect(result).toBe(expected);
    })
    it("it should return 1 for [1]", () => {
        let arr = [1];
        let result =  ascending(arr)
        let expected = true;
        expect(result).toBe(expected);
    })
    it("it should return 1 for [1,2,3,-5,-6]", () => {
        let arr = [1,2,3,-5,-6];
        let result = ascending(arr)
        let expected = false;
        expect(result).toBe(expected);
    })
});