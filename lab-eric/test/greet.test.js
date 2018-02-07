const name = require('../lib/greet.js').name;

describe('testing name function', () => {
    it('Anything that is not a string should be null', () => {
       let expected = null;
       let str = 1;
       let result = name(str);
        expect(result).toBe(expected);
    })
    it('expecting a module saying hello world', () => {
        let expected = 'Hello World';
        let str = 'world';
        let result = name(str);
        expect(result).toBe(expected);
    })
})
