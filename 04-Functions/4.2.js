const readlineSync = require("readline-sync");
console.log("This program creates a random number between 0 and 10")

function add(a) {
  return Math.floor((Math.random() * 10) + 1);
}

console.log("The random number is " + add()+".");
