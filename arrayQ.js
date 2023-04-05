
const prompt = require("prompt-sync")();  //checking even
// let answer;
// let user = []; //[]this is array 
//                 //0      //1      //2             

// for ( let a = 1;  a<=5;  a++){
//      user.push(prompt("Enter 5 username"));
// }
// do{
// let number =parseInt(prompt("Enter number"));
// console.log(user[number]);                     

// answer = prompt("Do you want to use this service agin? yes/no:")
// }
// while ( answer == "yes" || answer == "Yes")

// let answer;
// let numbers = [0,1,2,3,4,5,6,7,8,9,10];
// do{

//     for ( let a = 1;  a<=10;  a++){
//         a++;
//         console.log(numbers[a]);
//     }
// answer = prompt("Do you want to use this service agin? yes/no:")
// }
// while ( answer == "yes" || answer == "Yes")


let answer;
let numbers = [0,1,2,3,4,5,6,7,8,9,10];      
do{

    for ( let a = 0;  a<=9;  a++){   //checking odd
        a++;
        console.log(numbers[a]);
    }


answer = prompt("Do you want to use this service agin? yes/no:")
}
while ( answer == "yes" || answer == "Yes")