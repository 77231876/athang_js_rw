const prompt = require("prompt-sync")();
let ans;
let code1, name1, message1, sub1;  //database


function email() {
    do {
        console.log("EMAIL");
        let option = parseInt(prompt("Enter 1 for Send and 2 for Recieve:\t"));
        if (option == 1) {
            console.log("1.Send\n");
            let name = prompt("Enter name:\t");
            let code = parseInt(prompt("Enter the code:\t"));
            let sub = prompt("Subject:\t")
            let message = prompt("message:\t")

            if (message.length <= 20) {
                code1 = code;
                name1 = name;     //database stored
                message1 = message;
                sub1 = sub;

                console.log("Successful");
            }

            else {
                console.log("Length is too long");
            }
        }


        if (option == 2) {
            console.log("2.Recieve");
            let name2 = prompt("Enter name:\t");
            let code2 = parseInt(prompt("Enter the code:\t"));


            if (code1 == code2 && name2 == name1) {
                
                console.log("Subject: " + sub1, "Message: " + message1);
            }
            else {
                console.log("Select option");
            } ans = prompt("Do you want to register agin? yes/no:")
        }
    } 
    while (ans == "yes")
}
email();
