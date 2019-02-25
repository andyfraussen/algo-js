const readlineSync = require("readline-sync");
let number = 0;
let total = 0;
let questions = 0;

number = new Number(readlineSync.question("Enter a number: "));
total = number;

while(questions != total)
{
number = number + new Number(readlineSync.question("Enter a number: "));
++questions;
}
console.log(number);
