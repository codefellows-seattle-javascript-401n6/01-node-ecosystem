'use strict';

const sum = require('../lib/array-util').sum;
const min = require('../lib/array-util').min
const isSorted = require('../lib/array-util').isSorted

describe('sum', () => {
    it('should return 0 with an empty array', () => {
        let arr = [];
        let result = sum(arr);
        let expected = 0;
        expect(result).toBe(expected);
    });

    it('should return a negative number', () => {
        let arr = [5, -5, 3, -3, -6, 4];
        let result = sum(arr);
        let expected = -2;
        expect(result).toBe(expected);
    })

    it('should return a positve number', () => {
        let arr = [5, -5, 3, -3, -6, 8];
        let result = sum(arr);
        let expected = 2;
        expect(result).toBe(expected);
    })
});

describe('min', () => {
    it('should return undefined for an empty array', () => {
        let arr = [];
        let result = min(arr);
        let expected = undefined;
        expect(result).toBe(expected);
    })

    it('should return a single number', () => {
        let arr = [3];
        let result = min(arr);
        let expected = 3;
        expect(result).toBe(expected);
    })

    it('should return lowest number in array', () => {
        let arr = [5, 2, 3, 1, 7, 8];
        let result = min(arr);
        let expected = 1;
        expect(result).toBe(expected);
    })

    it('should return lowest number in array', () => {
        let arr = [-5, 2, -3, -1, 7, 8];
        let result = min(arr);
        let expected = -5;
        expect(result).toBe(expected);
    })
});

describe('isSorted', () => {
    it('should return true for an empty array', () => {
        let arr = [];
        let result = isSorted(arr);
        let expected = true;
        expect(result).toBe(expected);
    })

    it('should return true for single digit array', () => {
        let arr = [3];
        let result = isSorted(arr);
        let expected = true;
        expect(result).toBe(expected);
    })

    it('should return true if array is already sorted', () => {
        let arr = [1, 2, 3, 4, 5];
        let result = isSorted(arr);
        let expected = true;
        expect(result).toBe(expected);
    })

    it('should return false if array is not sorted', () => {
        let arr = [5, 4, 3, 1, 2];
        let result = isSorted(arr);
        let expected = false;
        expect(result).toBe(expected);
    })
});



//     Test sum to make sure it returns 0 for an empty array.

// Test sum to make sure it adds positive numbers properly

// Test sum to make sure it adds nagative numbers properly

// Test min to make sure it returns undefined for an empty array

// Test min to make sure it returns the smallest number when the array only has one value

// Test min to make sure it returns the smallest number in a small collection of numbers

// Test min to make sure it returns the smallest number when there's a collection of both positive and negative numbers

// Test isSorted to make sure it returns true for an empty array

// Test isSorted to make sure it returns true for a single-element array

// Test isSorted to make sure it returns true for a sorted array

// Test isSorted to make sure it returns false for an unsorted array