const prompt = require("prompt-sync")();

let details = prompt("Task: ");
switch (details) {


    case "wake up":
        console.log("7am");
        break;

    case "eat breakfast":
        console.log("8am");
        break;

    case "eat lunch":
        console.log("1pm");
        break;

    case "eat dinner":
        console.log("7pm");
        break;

    case "make bed":
        console.log("9pm");
        break;

        default:
            console.log("Wrong input");
        break;
        
}