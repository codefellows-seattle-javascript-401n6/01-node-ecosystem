"use strict";

const ArrUtil = require('../lib/array-util.js').ArrUtil;

//sum
describe('sum function', () => {
    it('return 0 if the array is empty', () => {
        let arr = [];
        let result = ArrUtil.sum(arr);
        let expected = 0;
        expect(result).toBe(expected);
    });

    it('should return the sum of all numbers in the array if they are all positive', () => {
        let arr = [1, 2, 4, 3];
        let result = ArrUtil.sum(arr);
        let expected = 10;
        expect(result).toBe(expected);
    });

    it('should return with the sum of all elements even if there are negative numbers in the array', () => {
        let arr = [1, -2, 4, -5];
        let result = ArrUtil.sum(arr);
        let expected = -2;
        expect(result).toBe(expected);
    });
});

//min
describe('min function', () => {
    it('should return undefined if the array is empty', () => {
        let arr = [];
        let result = ArrUtil.min(arr);
        let expected = undefined;
        expect(result).toBe(expected);
    });

    it('should return the smallest number when the array only has one value', () => {
        let arr = [5];
        let result = ArrUtil.min(arr);
        let expected = 5;
        expect(result).toBe(expected);
    });

    it('should return the smallest number in an array of numbers', () => {
        let arr = [1, 3, 4, 2];
        let result = ArrUtil.min(arr);
        let expected = 1;
        expect(result).toBe(expected);
    });

    it('should return the smallest number in an array of positive and negative numbers', () => {
        let arr = [-1, 2, 3, 4];
        let result = ArrUtil.min(arr);
        let expected = -1;
        expect(result).toBe(expected);
    });

});

//isSorted
describe('isSorted function', () => {
    it('should return true if the array is empty', () => {
        let arr = [];
        let result = ArrUtil.isSorted(arr);
        let expected = true;
        expect(result).toBe(expected);
    });

    it('should return true when the array only contains one value', () => {
        let arr = [1];
        let result = ArrUtil.isSorted(arr);
        let expected = true;
        expect(result).toBe(expected);
    });

    it('should return true when the array only has one value', () => {
        let arr = [1];
        let result = ArrUtil.isSorted(arr);
        let expected = true;
        expect(result).toBe(expected);
    });

    it('should return true for a sorted array', () => {
        let arr = [1, 2, 11, 13];
        let result = ArrUtil.isSorted(arr);
        let expected = true;
        expect(result).toBe(expected);
    });

    it('should return false for an unsorted array', () => {
        let arr = [1, -5, 4, -2];
        let result = ArrUtil.isSorted(arr);
        let expected = false;
        expect(result).toBe(expected);
    });
});