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