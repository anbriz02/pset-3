const readlineSync = require("readline-sync");

const amount = Number(readlineSync.question("\nEnter a number: "));

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = Number.MIN_SAFE_INTEGER;

if (Number.isNaN(amount)) {
    console.log("\nInvalid")
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid")
} else if (amount === 0) {
    console.log("\nZero.")
} else if (amount > 0) {
    console.log("\nPositive.")
} else if (amount < 0) {
    console.log("\nNegative.")
}
