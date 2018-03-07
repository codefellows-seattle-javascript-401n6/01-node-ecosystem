function greet(str) {
    if(typeof(str) !== 'string'){
        return null;
    }
    let name = "hello " + str;
    return name;

}

module.exports.greet = greet;

