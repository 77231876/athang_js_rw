const prompt = require("prompt-sync")();
let answer;
do{
console.log("BANK OF BHUTAN\n");

console.log("1.\t LOAN\n");
console.log("2.\t WITHDRAWAL & DEPOSIT\n");
console.log("3.\t MY NET PROFIT\n");


let option = parseInt(prompt("Enter 1-3:\t"));



if (option == 1) {
    console.log("1.\tLOAN\n");
    let name = prompt("Enter your name:\t");
    console.log(name);
    amount = parseInt(prompt("Enter the amount:\t"));
    duration = parseInt(prompt("Duration in year:\t"));
    let month = 12;
    let int = 0.15;
    let yearly = (amount * duration * int) + amount
    let monthly = (amount * int)/month
    let total = 50000 - amount
    console.log("HERE IS YOUR RESULT\t" + name);                        
    console.log("TOTAL:\t" + total);
    console.log("MONTHLY:\t" + monthly);
    console.log("YEARLY:\t" + yearly);
}



 else if (option == 2) {
    console.log("W.WITHDRAWAL");
    console.log("D.Deposit");

    let wd = prompt("Enter W/D:");
    if (wd == "W") {
        let name = prompt("Enter your name:\t");
        console.log(name);
        amount = parseInt(prompt("Enter the amount:\t"));
        let balance = 50000
        let total = balance - amount
        
        if ( amount <= balance) {
            console.log("HERE IS YOUR RESULT\t" + name);
            console.log("Remaining:\t" + total);
        }
        else {
            console.log("You have efficient amount!");
        }
    }
  
       else if (wd == "D") {
            let name = prompt("Enter your name:\t");
            console.log(name);
            amount = parseInt(prompt("Enter the amount:\t"));
            let total = 50000 + amount
            console.log("HERE IS YOUR RESULT\t" + name);
            console.log("TOTAL:/t" + total);

        }


        else{
            console.log("No other option than this");
        }
}



 if (option == 3) {
    console.log("3.\t MY NET PROFIT\n");
    let name = prompt("Enter your name:\t");
    console.log(name);
    amount = parseInt(prompt("Enter the amount:\t"));
    duration = parseInt(prompt("Duration in year:\t"));
    let int = 0.05
    let total = int * amount * duration
    let profit = total + amount

    console.log("HERE IS YOUR RESULT\t" + name);
    console.log("TOTAL:\t" + total);
    console.log("PROFIT:\t" + profit);
}
else{
    console.log("No other option than 1 to 3");
}
answer = prompt("Do you want to use this service agin? yes/no:")

}
while ( answer == "yes" || answer == "Yes")






