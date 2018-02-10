sayHello = function(str) {
    if(typeof(str) !== "string") {
        return null;
    }
    return `hello ${str}`;
}

module.exports.sayHello = sayHello;
