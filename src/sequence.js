const readlineSync = require("readline-sync");

const amount = Number(readlineSync.question("\nEnter three numbers. \n"));
const amount2 = readlineSync.question();
const amount3 = readlineSync.question();

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = Number.MIN_SAFE_INTEGER;

if (Number.isNaN(amount)) {
    console.log("\nInvalid.\n")
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid.\n")
} else if (amount2 < MIN || amount2 > MAX) {
    console.log("\nInvalid.\n")
} else if (amount3 < MIN || amount3 > MAX) {
    console.log("\nInvalid.\n")
} else if ((amount < amount2) && (amount2 < amount3)) {
    console.log("\nStrictly increasing.\n");
} else if ((amount == amount2) && (amount2 == amount3)) {
    console.log("\nEqual.\n");
} else if ((!amount <= amount2) && (!amount2 <= amount3)){
    console.log("\nIncreasing.\n");
}  else if ((amount > amount2) && (amount2 > amount3)) {
    console.log("\nStrictly decreasing.\n");
} else if ((amount >= amount2) && (amount2 >= amount3)) {
    console.log("\nDecreasing.\n");
} else {
    console.log("\nUnordered.\n")
}
