'use strict';

const greet = require('../lib/greet').sayHello;

describe('Greet', () => {
  it('should return null when supplied with non string values.', () => {
      let str = 3;
      let result = greet(str);
      let expected = null;
      expect(result).toBe(expected);
  });
  it('should return "hello world" when "world" is supplied as argument.', () => {
      let str = 'world';
      let result = greet(str);
      let expected = 'hello world';
      expect(result).toBe(expected);
  });
});