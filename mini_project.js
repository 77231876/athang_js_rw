const prompt = require("prompt-sync")();
let answer;
let name = [];
let date = [];
let id = [];
let Em=[];


function emp(){

do {
    console.log("\t\t\tEMPLOYEE MANAGEMENT SYSTEM\n");
    console.log("\n\t\t\t\tEMPLOYEE LIST\n ");

    console.log("\n\tEMPLOYEE NAME", "\t\tEMPLOYEE ID", "\t\tDATE\n");
    for (let i = 0; i < name.length; i++) {
 
        console.log("\t" + name[i] + "\t\t\t" + Em[i] + id[i]+ "\t\t\t" + date[i] + "\t\n");
        
    }

    console.log("1.ADD EMPLOYEE");
    console.log("2.REMOVE EMPLOYEE");
    console.log("3.UPDATE EMPLOYEE");

    let option = prompt("Enter you choice from 1-3:\t")

    if (option == 1) {
        console.log("1.ADD EMPLOYEE");
        const users = name.length + 1; 
          name.push(prompt("Employee name: "));
        date.push(prompt("Employee date: "));
        Em.push('Em: ');
        id.push(users)
        console.log("successful added");

      }
    
    if (option == 2) {
        console.log("2.REMOVE EMPLOYEE");
        let id1 = parseInt(prompt('Enter employee id: '))

        if (id.includes(id1)){
          
          id1 = id1 - 1; 
          name[id1] = " ";
          date[id1] = " ";
          Em[id1] = " ";
          id [id1] = " ";
          id = 10000;
  
          console.log(" Successfully removed!");
        }   
    }

    else if (option == 3) {
        console.log("3.UPDATE EMPLOYEE");
         let edit = parseInt(prompt("Enter id:\t"));
        
         if(id.includes(edit)){
           let userName = prompt("Name: ");
             let dates = parseInt(prompt("enter date: "));
             edit = edit - 1;
             name[edit] = userName;
             date[edit] = dates;
             console.log("Updated Successful");
         }
         else{
            console.log("Update failed");
         }
    }

    answer = prompt("Press enter\n")
}
while (answer != 'no')

}
emp();

