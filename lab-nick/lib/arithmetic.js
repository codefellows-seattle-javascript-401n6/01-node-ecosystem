"use strict";

function add (valA, valB) {
    if (valA === Number || valB === Number) {
        return null;
      }
    return (valA + valB);
};

function sub (valA, valB) {
    if (valA === Number || valB === Number) {
        return null;
      }
    return (valA - valB);
};

module.exports = {};
module.exports.add = add;
module.exports.sub = sub;