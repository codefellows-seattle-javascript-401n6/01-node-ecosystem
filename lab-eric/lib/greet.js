'use strict';

function name(str); {
    if (typeof(str) != 'string') {
        return null
    }
    return "Hello " + str; 
}

module.exports = {};
module.exports.name = name;