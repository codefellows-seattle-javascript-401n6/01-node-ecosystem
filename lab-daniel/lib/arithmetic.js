'use strict';

function add(num1, num2) {
    if(typeof num1 != 'number' || typeof num2 != 'number'){
      return null;
    }
    return num1 + num2;
  }

function sub(num1, num2) {
    if(typeof num1 != 'number' || typeof num2 != 'number'){
      return null;
    }
    return num2 - num1;
  }

  module.exports = {};
  module.exports.add = add;
  module.exports.sub = sub;