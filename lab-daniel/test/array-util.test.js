'use strict';

const arrayUtil = require('../lib/array-util.js');

describe('arrayUtil.summ', () => {
    test('makes sure it adds positive numbers properly', () => {
        let array = [1, 2, 3, 4, 5];
        let result = (array.reduce(arrayUtil.summ));
        let expected = 15;
        expect(result).toEqual(expected);
    });
    test('makes sure it adds negative numbers properly', () => {
        let array = [-1, 2, -3, 4, -5];
        let result = (array.reduce(arrayUtil.summ));
        let expected = -3;
        expect(result).toEqual(expected);
    });
})

describe('arrayUtil.minn', () => {
    test('makes sure it returns undefined if array is empty', () => {
        let array = []
        let result = (arrayUtil.minn(array));
        let expected = undefined;
        expect(result).toBe(expected);
    })
    test('makes sure it returns smallest value even if array has 1 element', () => {
        let array = [1]
        let result = (arrayUtil.minn(array));
        let expected = 1;
        expect(result).toBe(expected);
    })
    test('makes sure it returns smallest value even if the array is small', () => {
        let array = [6, 3]
        let result = (arrayUtil.minn(array));
        let expected = 3;
        expect(result).toBe(expected);
    })
    test('returns the smallest number when there is a collection of both positive and negative numbers', () => {
        let array = [6, -3, 3, -1, 5]
        let result = (arrayUtil.minn(array));
        let expected = -3;
        expect(result).toBe(expected);
    })
})

describe('isSorted function', () => {
    test(' returns true for an empty array', () => {
        let array = [];
        let result = (arrayUtil.isSorted(array));
        let expected = true;
        expect(result).toBe(expected);
    })
})