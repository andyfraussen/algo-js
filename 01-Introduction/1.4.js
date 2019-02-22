const readlineSync = require("readline-sync");
let userName = readlineSync.question('Can you give me your name please? ');
let userFirstName = readlineSync.question('Can you give me your first name please? ');
let userCity = readlineSync.question('Can you give me your city please? ');

console.log("My name is " + userName + " " + userFirstName + " and I live in " + userCity)
