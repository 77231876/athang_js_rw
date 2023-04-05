const prompt = require("prompt-sync")();

a = parseInt(prompt("Enter first number:\t"));
b = parseInt(prompt("Enter second number:\t"));
c = parseInt(prompt("Enter third number:\t"));

if (a > b && a > c){
if( b >= a){
    console.log(c,a,b);
}
if(c>a){
    console.log(c,a,b);
}
else{
    console.log(a,c,b);  
}
}
if ( b > a){
    if( a> c){
        console.log(b,a,c);
    }
    if(b>a ){
        console.log(b,c,a);
    }
    else{
        console.log(c,b,a);
    }
   
}
if (a > c) {
    if (c > b) {
        return console.log(a, c, b)
    }
    if (a > b) {
        return console.log(a, b, c)
    }
    else{
        console.log(b, a, c)
    } 
}