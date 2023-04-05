
//   function plan(){    //return will push the  value to function and when u call it will send the call function

//     return 'hello';
//   }
//   console.log(plan());



//   function plan(name,age){   
//     return 'hello'+name+'age' +age;   
//   }
//   let name = 'mini';   //paremeter with return
//   let age = 22      //paremeter will pass to function and function will pass to return and return will pass back to print function
//   console.log(plan(name,age));



function variable(){    
    let a = 20;
    let b = 30;
    add(a,b);
    sub(a,b);
   
  }

  function add(a ,b ){    

   let sum = a+b;
   console.log(sum);
  }


  function sub(a, b){    
    let result = b- a;
    console.log(result);
   
  }
variable();

  