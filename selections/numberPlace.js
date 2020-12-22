const readline=require('readline-sync');
let number=readline.questionInt("Enter the place value number:");

if(number == 1){
    console.log("ones");
}else if(number == 10){
    console.log("Tens");
}else if(number == 100){
    console.log("Hundereds");
}else if(number == 1000){
    console.log("Thousand");
}else if(number == 10000){
    console.log("Ten thousnd");
}else if(number == 100000){
    console.log("Lakh");
}else if(number == 1000000){
    console.log("Ten Lakhs");
}else{
    console.log("Enter proper number");
}