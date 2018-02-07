"use strict";

const add = require("../lib/arithmetic.js").add;
const sub = require("../lib/arithmetic.js").sub;

describe("add funtion", () => {
    it("adds two numbers", () => {
        expect (add(3,2)).toBe(5);
    });
    it("adds two numbers", () => {
        expect (add("a",2)).toBe(null);
    });
});

describe("sub funtion", () => {
    it("subtracts two numbers", () => {
        expect (sub(10,4)).toBe(6);
    });
    it("adds two numbers", () => {
        expect (sub("b",2)).toBe(null);
    });
});