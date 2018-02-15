'use strict';

function greet (name) {
    if (typeof name !== 'string') {
        return null;
      } else {
        return ('hello ' + name);
      
      }
};

module.exports = {};
module.exports.greet = greet;