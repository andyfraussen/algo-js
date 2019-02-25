const readlineSync = require("readline-sync");
console.log("Can you give me your favourite number please.");
let favNum = readlineSync.question("Favourite number: ");


for (x=42;x != favNum;x++){
  console.log("please try again");
  let favNum = readlineSync.question("Favourite number: ");
 if (favNum = 42){
console.log("vies bom");return
}
}

