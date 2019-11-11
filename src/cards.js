const readlineSync = require("readline-sync");

const card = String(readlineSync.question("\nEnter a playing card: "));

let ace = "\nAce"
let king = "\nKing"
let queen = "\nQueen"
let jack = "\nJack"
let ten = "\nTen"
let nine = "\nNine"
let eight = "\nEight"
let seven = "\nSeven"
let six = "\nSix"
let five = "\nFive"
let four = "\nFour"
let three = "\nThree"
let two = "\nTwo"

let spades = " of Spades."
let hearts = " of Hearts."
let diamonds = " of Diamonds."
let clubs = " of Clubs."

if (card == "AS" || card == "as"){
    console.log(ace.concat(spades) + "\n")
} else if (card == "AH" || card == "ah"){
    console.log(ace.concat(hearts) + "")
} else if (card == "AD" || card == "ad"){
    console.log(ace.concat(diamonds) + "")
} else if (card == "AC" || card == "ac"){
    console.log(ace.concat(clubs) + "")
} else if (card == "KS" || card == "ks"){
    console.log(king.concat(spades) + "")
} else if (card == "KH" || card == "kh"){
    console.log(king.concat(hearts) + "")
} else if (card == "KD" || card == "kd"){
    console.log(king.concat(diamonds) + "")
} else if (card == "KC" || card == "kc"){
    console.log(king.concat(clubs) + "")
} else if (card == "QS" || card == "qs"){
    console.log(queen.concat(spades) + "")
} else if (card == "QH" || card == "qh"){
    console.log(queen.concat(hearts) + "")
} else if (card == "QD" || card == "qd"){
    console.log(queen.concat(diamonds) + "")
} else if (card == "QC" || card == "qc"){
    console.log(queen.concat(clubs) + "")
} else if (card == "JS" || card == "js"){
    console.log(jack.concat(spades) + "")
} else if (card == "JH" || card == "jh"){
    console.log(jack.concat(hearts) + "")
} else if (card == "JD" || card == "jd"){
    console.log(jack.concat(diamonds) + "")
} else if (card == "JC" || card == "jc"){
    console.log(jack.concat(clubs) + "")
} else if (card == "TS" || card == "ts"){
    console.log(ten.concat(spades) + "")
} else if (card == "TH" || card == "th"){
    console.log(ten.concat(hearts) + "")
} else if (card == "TD" || card == "td"){
    console.log(ten.concat(diamonds) + "")
} else if (card == "TC" || card == "tc"){
    console.log(ten.concat(clubs) + "")
} else if (card == "9S" || card == "9s"){
    console.log(nine.concat(spades) + "")
} else if (card == "9H" || card == "9h"){
    console.log(nine.concat(hearts) + "")
} else if (card == "9D" || card == "9d"){
    console.log(nine.concat(diamonds) + "")
} else if (card == "9C" || card == "9c"){
    console.log(nine.concat(clubs) + "")
} else if (card == "8S" || card == "8s"){
    console.log(eight.concat(spades) + "")
} else if (card == "8H" || card == "8h"){
    console.log(eight.concat(hearts) + "")
} else if (card == "8D" || card == "8d"){
    console.log(eight.concat(diamonds) + "")
} else if (card == "8C" || card == "8c"){
    console.log(eight.concat(clubs) + "")
} else if (card == "7S" || card == "7s"){
    console.log(seven.concat(spades) + "")
} else if (card == "7H" || card == "7h"){
    console.log(seven.concat(hearts) + "")
} else if (card == "7D" || card == "7d"){
    console.log(seven.concat(diamonds) + "")
} else if (card == "7C" || card == "7c"){
    console.log(seven.concat(clubs) + "")
} else if (card == "6S" || card == "6s"){
    console.log(six.concat(spades) + "")
} else if (card == "6H" || card == "6h"){
    console.log(six.concat(hearts) + "")
} else if (card == "6D" || card == "6d"){
    console.log(six.concat(diamonds) + "")
} else if (card == "6C" || card == "6c"){
    console.log(six.concat(clubs) + "")
} else if (card == "5S" || card == "5s"){
    console.log(five.concat(spades) + "")
} else if (card == "5H" || card == "5h"){
    console.log(five.concat(hearts) + "")
} else if (card == "5D" || card == "5d"){
    console.log(five.concat(diamonds) + "")
} else if (card == "5C" || card == "5c"){
    console.log(five.concat(clubs) + "")
} else if (card == "4S" || card == "4s"){
    console.log(four.concat(spades) + "")
} else if (card == "4H" || card == "4h"){
    console.log(four.concat(hearts) + "")
} else if (card == "4D" || card == "4d"){
    console.log(four.concat(diamonds) + "")
} else if (card == "4C" || card == "4c"){
    console.log(four.concat(clubs) + "")
} else if (card == "3S" || card == "3s"){
    console.log(three.concat(spades) + "")
} else if (card == "3H" || card == "3h"){
    console.log(three.concat(hearts) + "")
} else if (card == "3D" || card == "3d"){
    console.log(three.concat(diamonds) + "")
} else if (card == "3C" || card == "3c"){
    console.log(three.concat(clubs) + "")
} else if (card == "2S" || card == "2s"){
    console.log(two.concat(spades) + "")
} else if (card == "2H" || card == "2h"){
    console.log(two.concat(hearts) + "")
} else if (card == "2D" || card == "2d"){
    console.log(two.concat(diamonds) + "")
} else if (card == "2C" || card == "2c"){
    console.log(two.concat(clubs) + "")
}
