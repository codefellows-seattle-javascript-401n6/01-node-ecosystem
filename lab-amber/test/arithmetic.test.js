'use strict';

const Arithmetic = require('../lib/arithmetic.js');

describe('testing add integers', () => {

  let expected = 3;
  it('it should return 3', () => {
    let num1 = 1;
    let num2 = 2;
    let result = Arithmetic.add(num1, num2);
    expect(result).toBe(expected);
  })

});

describe('testing sub integers', () => {

  let expected = 1;
  it('it should return 1', () => {
    let num1 = 2;
    let num2 = 1;
    let result = Arithmetic.sub(num1, num2);
    expect(result).toBe(expected);
  })

});

describe('testing add non integers', () => {

  let expected = null;
  it('it should return 3', () => {
    let num1 = 'hello';
    let num2 = 3;
    let result = Arithmetic.add(num1, num2);
    expect(result).toBe(expected);
  })

});

describe('testing sub non integers', () => {

  let expected = null;
  it('it should return 3', () => {
    let num1 = 1;
    let num2 = 'world';
    let result = Arithmetic.sub(num1, num2);
    expect(result).toBe(expected);
  })

});