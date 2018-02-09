'use strict';

const ArrayUtil = require('../lib/array-util.js').ArrayUtil;

//array test for adding
describe("array test", () => {
    describe("sum tests", () => {
        it("it should return 0 for an empty array", () => {
            let expected = 0;
            let arr = [];
            let result = ArrayUtil.sumArray(arr);
            expect(result).toBe(expected);
        })
        it("it should add positive numbers", () => {
            let expected = 15;
            let arr = [1, 9, 5];
            let result = ArrayUtil.sumArray(arr);
            expect(result).toBe(expected);
        })
        it("it should add negative numbers", () => {
            let expected = -15;
            let arr = [-1, -9, -5];
            let result = ArrayUtil.sumArray(arr);
            expect(result).toBe(expected);
        })
    })
//minimum test that returns smallest number
describe("min tests", () => {
        it("it should return undefined for an empty array", () => {
            let expected = undefined;
            let arr = [];
            let result = ArrayUtil.minArray(arr);
            expect(result).toBe(expected);
        })
        it("it should return smallest number when array has a minimum of 1 number", () => {
            let expected = 5;
            let arr = [5];
            let result = ArrayUtil.minArray(arr);
            expect(result).toBe(expected);
        })
        it("it should return smallest number of the array", () => {
            let expected = 1;
            let arr = [3, 2, 1, 4];
            let result = ArrayUtil.minArray(arr);
            expect(result).toBe(expected);
        })
        it("it should return the smallest number of a mixed array of pos/neg numbers", () => {
            let expected = -5;
            let arr = [3, 9, -5];
            let result = ArrayUtil.minArray(arr);
            expect(result).toBe(expected);
        })
    })
    //test for sorting array
        describe("is sorted tests", () => {
            it("it should return true for an empty array", () => {
                let expected = true;
                let arr = [];
                let result = ArrayUtil.isSortedArray(arr);
                expect(result).toBe(expected);
            })
            it("it should return true when array has a minimum of 1 number", () => {
                let expected = true;
                let arr = [5];
                let result = ArrayUtil.isSortedArray(arr);
                expect(result).toBe(expected);
            })
            it("it should return true for sorted array", () => {
                let expected = true;
                let arr = [3, 5, 7, 9];
                let result = ArrayUtil.isSortedArray(arr);
                expect(result).toBe(expected);
            })
            it("it should return false for unsorted array", () => {
                let expected = false;
                let arr = [5, 9, -2, 1];
                let result = ArrayUtil.isSortedArray(arr);
                expect(result).toBe(expected);
            })   
        })
}) 