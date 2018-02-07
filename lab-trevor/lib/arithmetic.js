"use strict";

const Arithmetic = {};

Arithmetic.add = function (x, y) {
    if (typeof(x) != 'number') {
        return null;
    }
    if (typeof(y) != 'number') {
        return null;
    }
    return x + y;
}

Arithmetic.sub = function (x, y) {
    if (typeof(x) != 'number') {
        return null;
    }
    if (typeof(y) != 'number') {
        return null;
    }
    return x - y;
}

module.exports = {};
module.exports.Arithmetic = Arithmetic;