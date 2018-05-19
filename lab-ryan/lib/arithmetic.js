"use strict";

function add(a, b) {
    if (Number.isInteger(a + b)) {
    let sum = a + b;
        return sum;
    } else {
        return null;
  }
}

function sub(a, b) {
    if (Number.isInteger(a - b)) {
    let sub = a - b;
        return sub;
    } else {
        return null;
  }
}

module.exports = {};
module.exports.add = add;
module.exports.sub = sub;