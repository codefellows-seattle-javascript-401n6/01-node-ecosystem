"use strict";

const ArrayUtils = require('../lib/array-util-test.js');

describe("we should be able to access exported functions", () => {
    it("each function should be accessable", () => {
        let sum = ArrayUtils.sumArr([1,2,3,4,5]);
        let min = ArrayUtils.minArr([1,2,3,4,5]);
        let isSorted = ArrayUtils.isSorted([1,2,3,4,5]);
        // let notSorted = ArrayUtils.notSorted([1,2,3,4,5]); 
    
        expect(sum).toBe(15);
        expect(min).toBe(1);
        expect(isSorted).toBe(true);
        // expect(notSorted).toBe(false);
    })
})