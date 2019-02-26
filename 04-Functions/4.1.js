const readlineSync = require("readline-sync");
console.log("To calculate the surface of your rectangle, enter the length and the width please.")
let length = readlineSync.question("Length: ");//This variable will store the length of the rectangle
let width = readlineSync.question("Width: ");//This variable will store the width of the variable

function add(a, b) {
  return a*b;
}//the function will multiply a and b.

console.log("The surface of the rectangle is " + add(length, width)+".");//In this console log we call the function add (multiply a and b) where we add both the length and the width variables to get the surface of the rectangle as the output
