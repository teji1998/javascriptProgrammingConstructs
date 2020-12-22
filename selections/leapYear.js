const prompt = require('prompt-sync')();
//const readline = require('readline-sync');
let year = prompt("Please enter the year : ");
console.log(year);
if( year % 400 == 0 || (year % 4 == 0 && year%100 !== 0))
{
    console.log("Leap year !!!"); 
}
else {
    console.log("not leap year !!!");
}
 

