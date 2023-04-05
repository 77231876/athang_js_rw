const prompt = require("prompt-sync")();
let answer;
let usera=[];


let passworda=[];
let password1;



do{

console.log("1 for Signup & 2 for Login");
let option = prompt("Enter 1 or 2:\t");

if (option == 1){
    console.log("Signup");
    username2 = prompt("Enter the username:\t");
    password1 = prompt("Enter your password:\t");
    conformpassword = prompt("Re-enter your password:\t");


 if (password1 == conformpassword ){  //for user 1 and use count to add the logger
    usera.push(username2);
    passworda.push(password1);
 

    console.log("SignUp succesful");
}

else{
    console.log("Not succesful");
}
answer = prompt("Do you want to register agin? yes/no:")
}


else if (option == 2){
    console.log("Login");
    username2 = prompt("Enter the username:\t");
    password1 = prompt("Enter your password:\t");


 if (usera.includes(username2) ) {
    console.log("Login succesful");
 }
}
else{
    console.log(" not correct")
}

}
while (answer == "yes"  || answer == "Yes")