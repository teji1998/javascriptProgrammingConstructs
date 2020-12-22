const readline = require('readline-sync');
let number = readline.questionInt("Enter a Number : ");
console.log("Number is : " + number);
switch(number){
    case 1:
        console.log("It is sunday");
    break;
    case 2:
        console.log("It is monday");
    break;
    case 3:
        console.log("It is tuesday");
    break;
    case 4:
        console.log("It is wednesday");
    break;
    case 5:
        console.log("It is thursday");
    break;
    case 6:
        console.log("It is friday");
    break;
    case 7:
        console.log("It is saturday");
    break;
    default:
        console.log("Please give a proper number !!!!");
}