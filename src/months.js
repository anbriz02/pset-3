const readlineSync = require("readline-sync");

const month = String(readlineSync.question("\nEnter a month: "));

if (month == "feb" || month == "Feb" || month == "February" || month == "february"){
  console.log("\n28 or 29 days.\n")
}else if (month == "Jan" || month == "jan" || month == "January" || month == "january") {
  console.log("\n31 days.")
}else if (month == "Mar" || month == "mar" || month == "March" || month == "march") {
  console.log("\n31 days.")
}else if (month == "Apr" || month == "apr" || month == "April" || month == "april") {
  console.log("\n30 days.")
}else if (month == "May" || month == "may") {
  console.log("\n31 days.")
}else if (month == "Jun" || month == "jun" || month == "June" || month == "june") {
  console.log("\n30 days.")
}else if (month == "Jul" || month == "jul" || month == "July" || month == "july") {
  console.log("\n31 days.")
}else if (month == "Aug" || month == "aug" || month == "August" || month == "august") {
  console.log("\n31 days.")
}else if (month == "Sep" || month == "sep" || month == "September" || month == "september") {
  console.log("\n30 days.")
}else if (month == "Oct" || month == "oct" || month == "October" || month == "october") {
  console.log("\n31 days.")
}else if (month == "Nov" || month == "nov" || month == "November" || month == "november") {
  console.log("\n30 days.")
}else if (month == "December" || month == "december" || month == "Dec" || month == "dec") {
  console.log("\n31 days.")
}else {
  console.log("\nInvalid.")
}
