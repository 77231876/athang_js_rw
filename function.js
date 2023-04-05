const prompt = require("prompt-sync")();
 


let a, b, result;
 a = parseInt(prompt("Enter the 1st number:"));
 b = parseInt(prompt("Enter the 2st number:"));

function addition(){
    result = a+b;
    console.log("Your result for addition:" +result);
}

function subtraction(){
    result = a-b;
    console.log("Your result for subtraction:" +result);
}
subtraction();
addition();



