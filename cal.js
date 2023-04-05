const prompt = require("prompt-sync")(); //prompt user string

// let name = prompt("Enter your name:");
// console.log(name);

// let number1 = parseInt(prompt("Enter your number1:"));
// let number2 =  parseInt(prompt("Enter your number2:"));
// console.log(number1+number2);


let num1 ,num2, add,sub,mul,div, calculator;
add = num1 + num2;
sub = num1 - num2;
mul = num1 * num2;
div = num1 / num2;

console.log("CALCULATOR");
calculator = prompt("Enter what calculation you want:");
num1 = parseInt(prompt("Enter your first number:"));
num2 = parseInt(prompt("Enter your second number:"));

if (calculator == "addition"){
    add = num1 + num2;
    console.log(add);
}

else if(calculator == "subtraction"){
    sub = num1 - num2;
    console.log(sub);
}

else if(calculator == "multiply"){
    mul = num1 * num2;
    console.log(mul);
}
else if(calculator == "division"){
    div = num1 / num2;
    console.log(div);
}

else{
    console.log("This calculation doesnot exist");
}

