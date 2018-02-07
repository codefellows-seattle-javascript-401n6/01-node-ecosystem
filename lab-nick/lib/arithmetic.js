"use strict";

// function add (valA, valB) {
//     if (valA === Number || valB === Number) {
//         return null;
//       }
//     return (valA + valB);
// };

function add (valA, valB) {
    if (Number.isInteger(valA + valB)) {
        return (valA + valB);
      };
      return null;
};

//console.log(add(5, 4));

// function sub (valA, valB) {
//     if (valA === Number || valB === Number) {
//         return null;
//       }
//     return (valA - valB);
// };

function sub (valA, valB) {
    if (Number.isInteger(valA - valB)) {
        return (valA - valB);
      };
      return null;
};

module.exports = {};
module.exports.add = add;
module.exports.sub = sub;