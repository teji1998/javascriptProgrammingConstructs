const readline = require('readline-sync');
let a = readline.questionInt("Enter value for a : ");
console.log("a = " +a);
let b = readline.questionInt("Enter value for b : ");
console.log("b = " +b);
let c = readline.questionInt("Enter value for c : ");
console.log("c = " +c);
let d = (a + b)*c;
let e = (a%b) +c;
let f = c + (a/b);
let g = c * (b+c);
if(d > e && d > f && d > g){
    console.log("Maximum value is : " +d);
}else if(e > d && e > f && e > g){
    console.log("Maximum value is : " +e);
}else if(f > d && f > e && f > g){
    console.log("Maximum value is : " +f);
}else{
    console.log("Maximum value is :" +g);
}
if(d < e && d < f && d < g){
    console.log("Minimum value is : " +d);
}else if(e < d && e < f && e < g){
    console.log("Minimum value is : " +e);
}else if(f < d && f < e && f < g){
    console.log("Minimum value is : " +f);
}else{
    console.log("Minimum value is :" +g);
}