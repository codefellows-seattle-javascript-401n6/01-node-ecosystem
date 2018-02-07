'use strict';

const greet = require('../lib/greet.js');

describe('This is going to test the greet file functionality', () => {
    test('Returns a greetings (name) if a valid string is input', () => {
        expect(greet('Fredric')).toBe('Greetings Fredric');
    });
    
    test('This will return NULL if no valid string is used', () => {
        expect(greet(4016)).toBeNull();
        expect(greet()).toBeNull();
    });
});