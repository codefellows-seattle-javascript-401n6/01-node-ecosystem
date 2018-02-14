'use strict';

const Array = require('../lib/array-util.js').Array;



describe('arr function', () => {
  describe('Should return sum of array', () => {
    it('it should return 10 for [2,2,2,2,2]', () => {
      let arr = [2,2,2,2,2];
      let result = Array.addUp(arr)
      let expected = 10;
      expect(result).toBe(expected);
    })
    it('should return -10 for [-6,-6,2]', () =>{
      let arr = [-6,-6,2];
      let result = Array.addUp(arr)
      let expected = -10;
      expect(result).toBe(expected);
    })
  })
  describe('Should return 0 if array is empty', () => {
    it('it should return 0 for []', () => {
      let arr = [];
      let result = Array.addUp(arr)
      let expected = 0;
      expect(result).toBe(expected);
    })
  })
  describe('it should return smallest value from array', () => {
    it('it should return 1 for [5,4,1,7,8]', () => {
      let arr = [5,4,1,7,8];
      let result =  Array.minVal(arr)
      let expected = 1;
      expect(result).toBe(expected);
    })
    it('it should return undefined for []', () => {
      let arr = [];
      let result =  Array.minVal(arr)
      let expected = undefined;
      expect(result).toBe(expected);
    })
    it('it should return 3 for [3]', () => {
      let arr = [3];
      let result =  Array.minVal(arr)
      let expected = 3;
      expect(result).toBe(expected);
    })
    it('it should return -6 for [1,2,3,-5,-6]', () => {
      let arr = [1,2,3,-5,-6];
      let result =  Array.minVal(arr)
      let expected = -6;
      expect(result).toBe(expected);
    })
  })
});


describe('Should return true if array is in ascending order', () => {
  it('it should return true for [1,2,3,4]', () => {
    let arr = [1,2,3,4];
    let result =  Array.ascending(arr)
    let expected = true;
    expect(result).toBe(expected);
  })
  it('it should return undefined for []', () => {
    let arr = [];
    let result =  Array.ascending(arr)
    let expected = true;
    expect(result).toBe(expected);
  })
  it('it should return 1 for [1]', () => {
    let arr = [1];
    let result =  Array.ascending(arr)
    let expected = true;
    expect(result).toBe(expected);
  })
  it('it should return 1 for [1,9,4,-5,-2]', () => {
    let arr = [1,9,4,-5,-2];
    let result = Array.ascending(arr)
    let expected = false;
    expect(result).toBe(expected);
  })
});