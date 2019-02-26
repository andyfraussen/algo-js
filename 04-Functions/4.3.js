const readlineSync = require("readline-sync");
console.log("This program creates three random numbers between 0 and 10")

function multiRand(n) {
  return Math.floor((Math.random() * 10) + 1);
}
let random = [multiRand(), multiRand(), multiRand()];
console.log("The random number are " + random +".");
