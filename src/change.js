const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const quarter = 0.25;
const dime = 0.10;
const nickel = 0.05;
const penny = 0.01

let amount = Number(readlineSync.question("\nEnter a dollar amount: "));

let changeq = Math.floor(amount/quarter);
let changed = amount/(changeq % dime);
let changen = Math.floor(changed % nickel);
let changep = Math.floor(changen % penny);

if (Number.isNaN(amount)) {
    console.log("Invalid")
} else if (amount < MIN || amount > MAX) {
    console.log("Invalid")
} else {
    console.log(changeq + " quarters" + ", " + changed + ", " + "dimes" + changen + "nickels" + ", and" + changep + "pennies.")
}
