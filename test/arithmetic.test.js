const add = require('../lib/arithmetic').add;
const sub = require('../lib/arithmetic').sub;
describe('add',() => {
    it('should return null with non-number values', () => {
        let a = 'i';
        let b = 1;
        let result = add(a,b);
        let expected = null;
        expect(result).toBe(expected);
    })

    it('should return null with non-number values', () => {
        let a = 2;
        let b = 'j';
        let result = add(a,b);
        let expected = null;
        expect(result).toBe(expected);
    })

})

describe('sub',() => {
    it('should return null with non-number values', () => {
        let a = 'i';
        let b = 1;
        let result = sub(a,b);
        let expected = null;
        expect(result).toBe(expected);
    })

    it('should return null with non-number values', () => {
        let a = 2;
        let b = 'j';
        let result = sub(a,b);
        let expected = null;
        expect(result).toBe(expected);
    })
})

