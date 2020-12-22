const readline = require('readline-sync');
let num = readline.questionInt("Enter a number: ");
let count = 0;
for(let i = 2; i <= num/2; i++){
    if(num%i == 0){
        count++;
        break;
    }
}
if(count == 0){
    console.log("prime number");
}else{
    console.log("not prime number");
}