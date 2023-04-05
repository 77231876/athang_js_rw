const prompt = require("prompt-sync")();
let answer;
let user1;
let user2;
let count = 1;
let mainpassword1;
let mainpassword;
do{

console.log("1 for Signup & 2 for Login");
let option = prompt("Enter 1 or 2:\t");

if (option == 1){
    console.log("Signup");
    let name = prompt("Enter your name:\t");
    console.log(name);
    username1 = prompt("Enter the username:\t");
    password1 = prompt("Enter your password:\t");
    conformpassword = prompt("Re-enter your password:\t");


 if (password1 == conformpassword && count == 1 ){  //for user 1 and use count to add the logger
    user1 = username1;
    mainpassword = password1;
    count++;

    console.log("Registration succesful");
}
else if (password1 == conformpassword && count == 2 ){   //for user 2
    user2 = username1;
    mainpassword1 = password1;
    count++;
    console.log("Registration succesful");
}

else{
    console.log("Not succesful");
}
}


else if (option == 2){
    console.log("Login");
    username2 = prompt("Enter the username:\t");
    password1 = prompt("Enter your password:\t");


 if ((user1 == username2 && mainpassword == password1 ) || (user2 == username2 && mainpassword1 == password1)) {
    console.log("Register succesful");
 }
}
else{
    console.log(" not correct")
}
answer = prompt("Do you want to register agin? yes/no:")
}
while (answer == "yes"  || answer == "Yes")