"use strict";

function greet(str) {
    if (str === '') {
        return null;
    } else {
        return 'hello ' + str;
    }
}

//    greet('dude');

module.exports = {};
module.exports.greet = greet;