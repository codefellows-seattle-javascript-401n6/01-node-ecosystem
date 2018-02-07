"use strict";

const greet = require("../lib/greet.js").greet;

 describe("greet function", () => {
   it("it should return null when input is not a string", () => {
     let str = "";
     let result = greet(str);
     let expected = null;
     expect(result).toBe(expected);
   });

   it("it should return string when input is a string", () => {
     let str = "hello world";
     let result = greet(str);
     let expected = true;
     expect(result).toBe(expected);
   });
   
});