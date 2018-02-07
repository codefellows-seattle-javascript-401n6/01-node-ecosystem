"use strict";

const greet = module.exports = {};

greet.greeting = name => {
  if (name === "" || typeof name !== "string") return -1;
  return `Greetings, ${name}!`;
};
