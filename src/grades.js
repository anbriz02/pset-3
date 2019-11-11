const readlineSync = require("readline-sync");

const MAX = 100;
const MIN = 0;

const numgrade = Number(readlineSync.question("\nEnter a grade: "));

const maxA = 100
const minA = 90
const maxB = 89
const minB = 80
const maxC = 79
const minC = 70
const maxD = 69
const minD = 60
const maxF = 59
const minF = 0


if(Number.isNaN(numgrade)){
  console.log("\nInvalid.\n");
}else if (numgrade < MIN || numgrade > MAX) {
    console.log("\nInvalid. \n");
}else if(numgrade >= minA && numgrade <= maxA){
  console.log("\nYou recieved an A.\n");
}else if(numgrade >= minB && numgrade <= maxB){
  console.log("\nYou recieved a B.\n");
}else if(numgrade >= minC && numgrade <= maxC){
  console.log("\nYou recieved a C.\n");
}else if(numgrade >= minD && numgrade <= maxD){
  console.log("\nYou recieved a D.\n");
}else if(numgrade >= minF && numgrade <= maxF){
  console.log("\nYou recieved a F.\n");
}
