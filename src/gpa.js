const readlineSync = require("readline-sync");

const lettergrade = (readlineSync.question("\nEnter a letter grade: "));

if (lettergrade == "A+" || lettergrade == "A") {
  console.log("\nYour GPA is 4.00.\n")
} else if  (lettergrade == "a+" || lettergrade == "a") {
  console.log("\nYour GPA is 4.00.\n")
} else if  (lettergrade == "A-" || lettergrade == "a-") {
      console.log("\nYour GPA is 3.67.\n")
} else if  (lettergrade == "B+" || lettergrade == "b+") {
      console.log("\nYour GPA is 3.33.\n")
} else if  (lettergrade == "B"  || lettergrade == "b") {
      console.log("\nYour GPA is 3.00.\n")
} else if  (lettergrade == "B-" || lettergrade == "b-") {
      console.log("\nYour GPA is 2.67.\n")
} else if  (lettergrade == "C+" || lettergrade == "c+") {
      console.log("\nYour GPA is 2.33.\n")
} else if  (lettergrade == "C"  || lettergrade == "c") {
      console.log("\nYour GPA is 2.00.\n")
} else if  (lettergrade == "C-" || lettergrade == "c-") {
      console.log("\nYour GPA is 1.67.\n")
} else if  (lettergrade == "D+" || lettergrade == "d+") {
      console.log("\nYour GPA is 1.33.\n")
} else if  (lettergrade == "D"  || lettergrade == "d") {
      console.log("\nYour GPA is 1.00.\n")
} else if  (lettergrade == "D-" || lettergrade == "d-") {
      console.log("\nYour GPA is 0.67.\n")
} else if  (lettergrade == "F"  || lettergrade == "f") {
      console.log("\nYour GPA is 0.00.\n")
} else {
      console.log("\nInvalid.\n")
}
