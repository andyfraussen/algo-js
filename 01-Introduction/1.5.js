const readlineSync = require("readline-sync");
let numberOne = readlineSync.question('Can you give me a first number with a decimal ');
let numberTwo = readlineSync.question('Can you give me a second number with a decimal ');

console.log(Math.floor(numberOne)*numberTwo)
