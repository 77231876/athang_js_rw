const prompt = require("prompt-sync")(); //prompt user string

console.log("CALCULATOR");

calculator = prompt("Enter what calculation you want:");
function variable(){    

    let a = parseInt(prompt("Enter your first number:"));
    let b = parseInt(prompt("Enter your first number:"));


    if (calculator == 1){
        add(a,b);
        
    }
   
  else  if (calculator == 2){
    
    sub(a,b);
   
  }
  
else if(calculator == 3){
    mul(a,b);
    
}
else if(calculator == 4){
    div(a,b)
    
}


}




function add(a ,b ){    

    let add = a+b;
    console.log(add);
   }
 
 
   function sub(a, b){    
     let sub = b-a;
     console.log(sub);
    
   }

   
  function mul(a ,b ){    

    let mul = a*b;
    console.log(mul);
   }
 
 
   function div(a, b){    
     let div = a/b;
     console.log(div);
    
   }


   variable();

  