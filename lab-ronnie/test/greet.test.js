const greet = require('../lib/greet').greet;

describe('greet', () => {
  it('should return null with non string values', () => {
    let str = 3;
    let result = greet(str);
    let expected = null;
    expect(result).toBe(expected);
  });

  it('should return hello world when world is supplied', () => {
    let str = 'world';
    let result = greet(str);
    let expected = 'hello world';
    expect(result).toBe(expected);
  });

});
