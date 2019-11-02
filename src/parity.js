const readlineSync = require("readline-sync");

const amount = Number(readlineSync.question("\nEnter an integer: "));

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = Number.MIN_SAFE_INTEGER;

if (String.prototype.search(".")) {
    console.log("\nInvalid.\n")
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid.\n")
} else if (Number.isNaN) {
    console.log("\nInvalid.\n")
} else if (amount % 2 === 0) {
    console.log("Even.");
} else {
    console.log("Odd.");
}
