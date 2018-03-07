'use strict';

const sumArr = require('../lib/array-util.js').sumArr;
const minArr = require('../lib/array-util.js').minArr;
const isSorted = require('../lib/array-util.js').isSorted;

describe('sumArr funtion', () => {
    it('returns 0', () => {
        expect (sumArr([])).toBe(0);
    });
    it('It sums up 5, 4, 1', () => {
        expect (sumArr([5, 4, 1])).toBe(10);
    });
    it('It sums up 5, -4, 1', () => {
        expect (sumArr([5, -4, 1])).toBe(2);
    });
});

describe('minArr funtion', () => {
    it('returns undefined', () => {
        expect (minArr([])).toBe(undefined);
    });
    it('returns the smallest number when the array only has one value', () => {
        expect (minArr([1])).toBe(1);
    });
    it('returns the lowest number from array of [9, 2, 5, 8] to be 2', () => {
        expect (minArr([9, 2, 5, 8])).toBe(2);
    });
    it('returns the lowest number from array of [9, 2, 5, -8] with a negative number to be -8', () => {
        expect (minArr([9, 2, 5, -8])).toBe(-8);
    });
});

describe('isSorted funtion', () => {
    it('returns true', () => {
        expect (isSorted([])).toBe(true);
    });
    it('returns true', () => {
        expect (isSorted([5])).toBe(true);
    });
    it('returns true', () => {
        expect (isSorted([1, 2, 5, 8])).toBe(true);
    });
    it('returns false', () => {
        expect (isSorted([5, 1, 8, 2])).toBe(false);
    });
});
// console.log(isSorted([])); //true
// console.log(isSorted([5]));  //true
// console.log(isSorted([1, 2, 5, 8])); //true
// console.log(isSorted([5, 1, 8, 2])); //false