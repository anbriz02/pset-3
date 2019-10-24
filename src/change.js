const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const quarter = 0.25;
const dime = 0.10;
const nickel = 0.05;
const penny = 0.01;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));



let changeq = Math.floor(amount/quarter);
let afterQuarter = amount-(changeq)*(quarter);

let changed = Math.floor(afterQuarter/dime);
let afterDime = afterQuarter-(changed)*(dime);

let changen = Math.floor(afterDime/nickel);
let afterNickel = afterDime-(changen)*(nickel);

let changep = Math.round(afterNickel/penny);


if (Number.isNaN(amount)) {
    console.log("\nInvalid\n")
} else if (amount < MIN || amount > MAX) {
    console.log("\nInvalid\n")
} else {
    console.log("\n" + changeq + " quarters" + ", " + changed + " dimes, " + changen + " nickels" + ", and " + changep + " pennies.")
}
