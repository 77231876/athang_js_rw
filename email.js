const prompt = require("prompt-sync")();
let answer;
let email1;

console.log("Email");
do {
    email1 = prompt("Enter the username:\t");
    conformemail = prompt("Re-enter your email:\t");


    if (email1 == conformemail) {

        if (email1.includes('@gmail.com')) {
            console.log("Succesful");
        }
        
        else{
            console.log("Succeesful");
        }
    }

    
    else if(email1 != conformemail){
        console.log("Your email doesnot match");
    }

    else {
        console.log("Your format is wrong");
    }

    answer = prompt("Do you want to use this service agin? yes/no:")
}
while (answer == "yes" || answer == "Yes")