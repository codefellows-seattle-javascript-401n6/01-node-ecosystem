'use strict';

const greet = require('../lib/greet.js').greet;
  describe('greet function', () => {
    test('it should return null when input is not a string', () => {
        let str = 9;
        let result = greet(str);
        let expected = null;
        expect(result).toBe(expected);
    });
    test('it should return string when input is a string', () => {
      let str = 'world'
      let result = 'hello' + str;
      let expected = true;
      expect(result).toBe(expected);
    });
  });

