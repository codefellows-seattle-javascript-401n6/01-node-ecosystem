"use strict";

function greet (name) {
    if (name === '') {
        return null;
      }
    return ("hello " + name);
};

module.exports = {};
module.exports.greet = greet;