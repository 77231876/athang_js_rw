const prompt = require("prompt-sync")();
let name,age,hobbies;
 name = prompt("Enter name:\t");
 age = parseInt(prompt("Enter your age:\t"));
 hobbies = prompt("Enter your hobbies:\t");


function form(name,age,hobbies){
     console.log("Name:" +name);
     console.log("Age:" +age);
     console.log("Hobbies:" +hobbies);
}
function des (name,age,hobbies){
    console.log("His name is "+name+ "He is now"+age+ "years and he likes to"+hobbies);
}

console.log("\t\tResult");
des(name,  age, hobbies);
form( name,  age, hobbies);
