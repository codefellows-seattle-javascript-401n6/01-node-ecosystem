const add = require('../lib/arithmetic.js').add;
const sub = require('../lib/arithmetic.js').sub;

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sub(5, 2)).toBe(3);
});