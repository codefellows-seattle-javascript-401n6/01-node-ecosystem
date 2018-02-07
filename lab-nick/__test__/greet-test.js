"use strict";

const greet = require("../lib/greet.js").greet;

describe("greet function", () => {
    test("it should return null when input is not a string", () => {
        let str = 8;
        let expected = null;
    })
    test("it should return string when input is a string", () => {
        let str = "hello world";
        let expected = true;
    })
})