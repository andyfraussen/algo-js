const readlineSync = require("readline-sync");
let userAge = readlineSync.question("Can you give me your age please ");

if (userAge >= 18){
  console.log("You probably are an adult");
} else {
  console.log("You probably are a child");
}
