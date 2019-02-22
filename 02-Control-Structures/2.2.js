const readlineSync = require("readline-sync");
console.log("Can you give me three numbers please.");
let numberOne = readlineSync.question("Number one ");
let numberTwo = readlineSync.question("Number two ");
let numberThree = readlineSync.question("Number three ");

if ((numberThree > numberOne) && (numberThree < numberTwo)){
  console.log(numberThree);
} else if (numberOne > numberTwo) {
  console.log("The first number has to be smaller then the second one!");
}
