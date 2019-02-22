const readlineSync = require("readline-sync");
let numberOne = readlineSync.question("Can you give me your shoe size please ")
let numberTwo = readlineSync.question('Can you give me your birthday please ');
console.log((numberOne * 2 + 5)*50-numberTwo+1766)
