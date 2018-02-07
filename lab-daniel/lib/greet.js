'use strict';

function greet (str) {
    input = str;
      if( typeof input != 'string'){
        return null;
    }
     return 'hello ' + input;
};

module.exports = {};
module.exports.greet = greet;