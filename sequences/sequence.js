//UC1- using Random function To get single digit
let value = Math.floor(Math.random() * 10); 
console.log("Random value is : " +value);

//UC2- using Random Function to get Dice value Between 1 to 6
let value1 = (Math.floor(Math.random() * 10) % 6) + 1; 
console.log("Random value for Dice is : " +value1);

//UC3-sum of dice
let a = (Math.floor(Math.random() * 10) % 6) + 1; 
console.log("first random value of dice is : " +a);
let b = (Math.floor(Math.random() * 10) % 6) + 1; 
console.log("second random value of dice is : " +b);
let c = a + b;
console.log("Addition Of two random dice values is : " + c);

//UC4 : Read five random 2 digit values and find sum and average
let result = 0;
for(let a = 1; a <= 5; a ++){
     let value = Math.floor(Math.random() * 100); 
     console.log("random value is :" +value);
     result += value;
}
console.log("The sum of five random values is : " +result);
let avg = result / 5;
console.log("The average of five random values is : " +avg);
