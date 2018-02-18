"use strict";
// Write a function called containsVowls
//that accepts a string
//and returns ture if the string contains vowels
//or returns false if it does not

function containsVowls(str){
    let vowels = 'aeiou';
    for(let i = 0; i < str.length; i++){
        let char = str.charAt(i);
        for(let j = 0; j < vowels.length; j++){
            let vowel = vowels.charAt(j);
            if(char === vowel){
                return true;
            }
        }
    }
    return false;
}

module.exports = {};
module.exports.containsVowls = containsVowls;


//53:00 if you run into error