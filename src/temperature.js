const readlineSync = require("readline-sync");

const MAX = Number.MAX_SAFE_INTEGER;
const MIN = Number.MIN_SAFE_INTEGER;

const temp = Number(readlineSync.question("\nEnter a temp: "));
const scale = readlineSync.question("Enter a scale: ")


const FaFrPo = 32;
const FaBoPo = 212;
const CeFrPo = 0;
const CeBoPo = 100;
const KeFrPo = 273.15;
const KeBoPo = 373.15;

if (temp < MIN || temp > MAX) {
      console.log("\nInvalid.")
} else if (!Number.isInteger(temp)) {
      console.log("\nInvalid.\n")
} else if (temp <= FaFrPo && (scale == "F" || scale == "f")){
      console.log("\nSolid.")
} else if ((temp > FaFrPo && temp < FaBoPo) && (scale == "F" || scale == "f")){
      console.log("\nLiquid.\n")
} else if (temp >= FaBoPo && (scale == "F" || scale == "f")){
      console.log("\nGas.")
} else if (temp <= CeFrPo && (scale == "C" || scale == "c")){
      console.log("\nSolid.")
} else if ((temp > CeFrPo && temp < CeBoPo) && (scale == "C" || scale == "c")){
      console.log("\nLiquid.\n")
} else if (temp >= CeBoPo && (scale == "C" || scale == "c")){
      console.log("\nGas.")
} else if (temp <= KeFrPo && (scale == "K" || scale == "k")){
      console.log("\nSolid.")
} else if ((temp > KeFrPo && temp < KeBoPo) && (scale == "K" || scale == "k")){
      console.log("\nLiquid.\n")
} else if (temp >= KeBoPo && (scale == "K" || scale == "k")){
      console.log("\nGas.")
}
