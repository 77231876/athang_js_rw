const prompt = require("prompt-sync")();

let count = 0;
let a = 4;
let word1 = prompt("Enter any name in same length:");
let word2 = prompt("Enter any name in same length:");
for ( i = 0;  i<=4;  ++i){
 if (word1[i] == word2[a] || word1[i] == word2[a-2] || word1[i] == word2 ){  
    count++;
 }
console.log(count);
}