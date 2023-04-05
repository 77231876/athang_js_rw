const prompt = require("prompt-sync")();
// let names = ['karma','namgay', 'pema', 24]
// for(let i = 0; i<4; i++){   //will print one by one
//     console.log(names[i]);
// }



// let names = [1,2,3,4,5,6,7,8,9,10];
// for(let i = 9; i>=0; i--){   //will print 10 to 1
//     console.log(names[i]);
// }


// for(let i = 0; i<=10; i++){  //odd
//     console.log(names[i]);
//     i++;
// }

// for(let i = 10; i>=0; i--){  //odd from 9 to 1
//     console.log(names[i]);
//     i--;
// }




let user = [];             


for ( let a = 1;  a<=10;  a++){
    user.push(parseInt(prompt("Enter number" +a+":")));
}
console.log(user);


