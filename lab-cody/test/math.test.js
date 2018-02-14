const add = require('../lib/arithmetic.js').add;
const sub = require('../lib/arithmetic.js').sub;

describe('testing addition with integers', () => {

  let expected = 10;
  it('it should return 10', () => {
    let num1 = 5;
    let num2 = 5;
    let result = add(num1, num2);
    expect(result).toBe(expected);
    // expect(40).toBe(90);

  })

});

describe('testing subtraction with integers', () => {

  let expected = 3;
  it('it should return 3', () => {
    let num1 = 4;
    let num2 = 1;
    let result = sub(num1, num2);
    expect(result).toBe(expected);
    // expect(40).toBe(90);

  })

});

describe('testing to make sure it fails if one is nan for add', () => {

  let expected = null;
  it('it should return 3', () => {
    let num1 = 'hello';
    let num2 = 3;
    let result = add(num1, num2);
    expect(result).toBe(expected);
    // expect(40).toBe(90);
  })

});

describe('testing to make sure it fails if one is nan for sub', () => {

  let expected = null;
  it('it should return 3', () => {
    let num1 = 1;
    let num2 = 'anything';
    let result = sub(num1, num2);
    expect(result).toBe(expected);
    // expect(40).toBe(90);

  })

});