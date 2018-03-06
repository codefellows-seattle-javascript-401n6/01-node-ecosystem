'use strict';

const sumArr = require('../lib/array-util.js').sumArr;
const minArr = require('../lib/array-util.js').minArr;
// const isSorted = require('../lib/array-util.js').isSorted;

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