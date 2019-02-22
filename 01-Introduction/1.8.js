const readlineSync = require("readline-sync");
let userGender = readlineSync.question("Can you give me your gender ");
let userName = readlineSync.question('Can you give me your name ');
let userPlace = readlineSync.question('Can you give me a favourite place ');
console.log("There once was a "+userGender+" named "+userName+ ". "+userName +" was a very sweet "+userGender+". "+userName+"'s favourite place to visit is "+userPlace+".");
