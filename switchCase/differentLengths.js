const readline = require('readline-sync');
let number = readline.questionInt("Please enter your choice for conversion: \n1. Feet to inch " + 
         "\n2. Feet to meter \n3. Inch to feet \n4. Meter to feet\n");
switch (number) {
        case 1:
                let feet = readline.questionInt("Enter how many feets : ");
                console.log(feet * 12 + " inches");
        break;
        case 2:
                let feets = readline.questionInt("Enter how many feets: ");
                console.log((feets * 100) / 328 + " Meters");
        break;
        case 3:
                let inch = readline.questionInt("Enter how many inches: ");
                console.log(inch / 12 + " feets");
        break;
        case 4:
                let meter = readline.questionInt("Enter how many meters: ");
                console.log((meter * 328) / 100 + " feets");
        break;
        default:
                console.log("Enter a valid input");
        break;
}