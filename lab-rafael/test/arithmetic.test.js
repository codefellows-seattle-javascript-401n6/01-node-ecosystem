const sum = require('../lib/arithmetic').sum;
const sub = require('../lib/arithmetic').sub;


describe('Arithmetic functions', () => {
    describe('Sum two numbers', () => {
      it('adds 1 + 2 to equal 3', () => {
          let a = 1;
          let b = 2;
          let result = sum(a, b);
          let expected = 3;
          expect(result).toBe(expected);
      });
      it('Should return null if non integer argumets are passed', () => {
         let a = '1';
         let b = 2;
         let result = sum(a, b);
         let expected = null;
         expect(result).toBe(expected);
      });
    });

    describe('Substract two numbers', () => {
      it('adds 2 - 1 to equal 1', () => {
          let a = 2;
          let b = 1;
          let result = sub(a, b);
          let expected = 1;
          expect(result).toBe(expected);
      });
      it('Should return null if non integer argumets are passed', () => {
         let a = '1';
         let b = 2;
         let result = sub(a, b);
         let expected = null;
         expect(result).toBe(expected);
      });
    });
})
