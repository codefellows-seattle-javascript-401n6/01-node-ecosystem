'use strict';

const greet = require('../lib/greet.js');

describe('Testing greet.js for Greetings, Fredric!', () => {
                test('Returns a greetings <name> if a valid string is input', () => {
                    expect(greet.greeting('Fredric')).toBe('Greetings, Fredric!');
                });

                test('This will return NULL if no valid string is used', () => {
                    expect(greet.greeting(4016)).toEqual(null);
                    expect(greet.greeting()).toEqual(null);
                });
            });