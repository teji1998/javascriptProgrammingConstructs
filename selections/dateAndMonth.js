const readline = require('readline-sync');
let day = readline.questionInt("Enter date : ");
let month = readline.questionInt("Enter month : ");
if (month < 1 || month > 12 || day < 1 || day > 31) {
    console.log("Invalid Input!");
} else if (month == 3 && day >= 20 && day<=31) {
    console.log("True");
} else if (month == 4 && day <= 30) {
    console.log("True");
} else if (month == 5 && day <= 31) {
    console.log("True");
} else if (month == 6 && day <= 20) {
    console.log("True");
} else {
    console.log("False");
}