"use strict";

function greet(str) {
    if (str === '') {
        return null;
    } else {
        return 'hello ' + str;
    }
}

module.exports = {};
module.exports.greet = greet;