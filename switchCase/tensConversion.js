const readline = require('readline-sync');
let number = readline.questionInt("Enter the unit number : ");
console.log("Number is : " + number);
switch(number){
    case 1:
        console.log("Ones");
    break;
    case 10:
        console.log("Tens");
    break;
    case 100:
        console.log("Hunderds");
    break;
    case 1000:
        console.log("Thousand");
    break;
    case 10000:
        console.log("Ten Thousand");
    break;
    default:
        console.log("Enter a proper number !!!");
    break;
}