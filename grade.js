const prompt = require("prompt-sync")();
let answer;
do{
let grade = parseInt(prompt("Enter your mark to see your grade:"))

if( grade <= 100 && grade > 90){
    console.log("You are in Grade 'A'");
}

else if ( grade <= 89 && grade > 60){
    console.log("You are in Grade 'B'");
}
else if ( grade <= 59 && grade > 30){
    console.log("You are in Grade 'C'");
}
else if ( grade <= 29 && grade > 10){
    console.log("You are in Grade 'D'");
}
else if ( grade <= 9 && grade > 1){
    console.log("You are in Grade 'E'");
}
 if ( grade <= 1 && grade > 0){
    console.log("You are in Grade 'F'");
}
else {
    console.log("YOU FAILED!!!");
}


answer = prompt("Do you want to check again?yes/no:")
}
while (answer == "yes" || answer == "Yes")

