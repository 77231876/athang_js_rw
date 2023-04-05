const prompt = require("prompt-sync")();
let answer;
let user=[];
do{
console.log("User data\n");

console.log("1.\t Add user\n");
console.log("2.\t Remove the last user\n");
console.log("3.\t View user\n");


let option = parseInt(prompt("Enter 1-3:\t"));
if (option == 1) {
    console.log("1.\tAdd user\n");
    user.push(prompt("Enter your name:\t"));
    user.push(prompt("Enter your name:\t"));
    user.push(prompt("Enter your name:\t"));
 
    console.log("Successful");
}


 if(option == 2){
    user.pop()
    console.log("Removed Successful");
}
else if(option == 3){
    console.log(user);
    console.log("This are thr left over data");
}
answer = prompt("Do you want to use this service agin? Enter/no:")

}
while ( answer != 'No')