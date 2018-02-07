"use strict";

const arrayUtil = require('../lib/array-util.js').ArrayUtil;

describe("array test", () => {
    describe("sum tests", () => {
        it("it should return 0 for an empty arrary", () => {
            let expected = 0;
            let arr = [];
            let result = arrayUtil.sum(arr);
            expect(result).toBe(expected);
        })
        it("it should add positive numbers properly", () => {
            let expected = 10;
            let arr = [1, 3, 6];
            let result = arrayUtil.sum(arr);
            expect(result).toBe(expected);
        })
        it("it should add negative numbers properly", () => {
            let expected = -10;
            let arr = [-1, -3, -6];
            let result = arrayUtil.sum(arr);
            expect(result).toBe(expected);
        })
    })
    describe("min tests", () => {
        it("it should return undefined for an empty array", () => {
            let expected = undefined;
            let arr = [];
            let result = arrayUtil.min(arr);
            expect(result).toBe(expected);
        })
        it("it should return smallest number when array has 1 number", () => {
            let expected = 6;
            let arr = [6];
            let result = arrayUtil.min(arr);
            expect(result).toBe(expected);
        })
        it("it should return smallest number in a small collection", () => {
            let expected = 2;
            let arr = [5, 7, 2, 9];
            let result = arrayUtil.min(arr);
            expect(result).toBe(expected);
        })
        it("it should return smallest number in collection of positive and negative", () => {
            let expected = -4;
            let arr = [8, 3, -4];
            let result = arrayUtil.min(arr);
            expect(result).toBe(expected);
        })
    })
        describe("is sorted tests", () => {
            it("it should return true for an empty array", () => {
                let expected = true;
                let arr = [];
                let result = arrayUtil.isSorted(arr);
                expect(result).toBe(expected);
            })
            it("it should return true when array has 1 number", () => {
                let expected = true;
                let arr = [6];
                let result = arrayUtil.isSorted(arr);
                expect(result).toBe(expected);
            })
            it("it should return true for sorted array", () => {
                let expected = true;
                let arr = [5, 7, 9, 13];
                let result = arrayUtil.isSorted(arr);
                expect(result).toBe(expected);
            })
            it("it should return false for unsorted array", () => {
                let expected = false;
                let arr = [8, 3, -4];
                let result = arrayUtil.isSorted(arr);
                expect(result).toBe(expected);
            })   
        })
})