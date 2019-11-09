const readlineSync = require("readline-sync");

const amount = Number(readlineSync.question("\nEnter three numbers. \n"));
const amount2 = readlineSync.question();
const amount3 = readlineSync.question();

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = Number.MIN_SAFE_INTEGER;

if (Number.isNaN(amount)) {
    console.log("\nInvalid.\n")
} else if (!Number.isInteger(amount)) {
    console.log("\nInvalid.\n")
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid.\n")
} else if (amount % 2 === 0) {
    console.log("\nEven.\n");
} else {
    console.log("\nOdd.\n");
}
