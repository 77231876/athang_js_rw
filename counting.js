
const prompt = require("prompt-sync")();

let count = 0;
let count2 = 0;
let word = prompt("Enter any name:");
for ( i = 0;  i<=word.length;  i++){
 if (word[i] == 'a' || word[i] == 'e' || word[i] == 'i' || word[i] == 'o' ||word[i] == 'u' ){  
    count++;
 }
 else{
   count2 ++;
 }
}
 
    console.log("consonant:" +count2);
    console.log("vowel:" +count);

   

    //we used for loop