'use strict';

const sum = require('../lib/array-util').sum;
const min = require('../lib/array-util').min;
const isSorted = require('../lib/array-util').isSorted;


describe('Array utility functions', () => {
    describe('Sum function', () => {
        it('Should return 0 for an empty array', () => {
            let arr = [];
            let result = sum(arr);
            let expected = 0;
            expect(result).toBe(expected);
        });
        it('Should return 6 for [1, 2, 3]', () => {
            let arr = [1, 2, 3];
            let result = sum(arr);
            let expected = 6;
            expect(result).toBe(expected);
        });
        it('Should return 4 for [2, -1, 3]', () => {
            let arr = [2, -1, 3];
            let result = sum(arr);
            let expected = 4;
            expect(result).toBe(expected);
        });
    });
    describe('Min function', () => {
        it('Should return undefined for an empty array', () => {
            let arr = [];
            let result = min(arr);
            let expected = undefined;
            expect(result).toBe(expected);
        });
        it('Should return 2 for [2]', () => {
            let arr = [2];
            let result = min(arr);
            let expected = 2;
            expect(result).toBe(expected);
        });
        it('Should return 4 for [6, 8, 4]', () => {
            let arr = [6, 8, 4];
            let result = min(arr);
            let expected = 4;
            expect(result).toBe(expected);
        });
        it('Should return 2 for [-3, 2, 6, -8, 4]', () => {
            let arr = [-3, 2, 6, -8, 4];
            let result = min(arr);
            let expected = -8;
            expect(result).toBe(expected);
        });
    });
    describe('isSorted function', () => {
        it('Should return true for an empty array', () => {
            let arr = [];
            let result = isSorted(arr);
            let expected = true;
            expect(result).toBe(expected);
        });
        it('Should return true for a single element array.', () => {
            let arr = [2];
            let result = isSorted(arr);
            let expected = true;
            expect(result).toBe(expected);
        });
        it('Should return true for a sorted array.', () => {
            let arr = [3, 4, 5, 6];
            let result = isSorted(arr);
            let expected = true;
            expect(result).toBe(expected);
        });
        it('Should return false for unsorted array', () => {
            let arr = [3, 2, 6, 8, 4];
            let result = isSorted(arr);
            let expected = false;
            expect(result).toBe(expected);
        });
    });
});
