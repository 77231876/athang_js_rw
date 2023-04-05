const prompt = require("prompt-sync")();
console.log("Kelki high school\n");

let grade = parseInt(prompt("Enter your Grade:"));

if (grade == 1) {
    console.log("\nGRADE 1");
    let name = prompt("Enter your name:");
    console.log(name);
    let age = prompt("Enter your age:");
    console.log(age);
    let cid = prompt("Enter your cid:");
    console.log(cid);
    eng = parseInt(prompt("Enter your English mark:"));
    dzo = parseInt(prompt("Enter your Dzongkha mark:"));
    math = parseInt(prompt("Enter your Math mark:"));
    fees = parseInt(prompt("fees: "));
    let percentage = (eng + dzo + math) / 3

    if (percentage >= 60 && fees == 25000) {
        console.log("\nName: " + name, "\nAge: " + age, "\nPercentage: " + percentage);
        console.log("\nAdmission Successfull!!");
    }

    else {
        console.log("Admission failed");
    }
}

if (grade == 2) {
    console.log("\nGRADE 2");
    let name = prompt("Enter your name:");
    console.log(name);
    let age = prompt("Enter your age:");
    console.log(age);
    let cid = prompt("Enter your cid:");
    console.log(cid);
    eng = parseInt(prompt("Enter your English mark:"));
    dzo = parseInt(prompt("Enter your Dzongkha mark:"));
    math = parseInt(prompt("Enter your Math mark:"));
    fees = parseInt(prompt("fees: "));
    let percentage = (eng + dzo + math) / 3

    if (percentage >= 40 && fees == 30000) {
        console.log("\nName: " + name, "\nAge: " + age, "\nPercentage: " + percentage);
        console.log("\nAdmission Successfull!!");
    }
    else {
        console.log("Admission failed");
    }
}


else if (grade == 3) {
    console.log("GRADE 3");
    let name = prompt("Enter your name:");
    console.log(name);
    let age = prompt("Enter your age:");
    console.log(age);
    let cid = prompt("Enter your cid:");
    console.log(cid);
    eng = parseInt(prompt("Enter your English mark:"));
    dzo = parseInt(prompt("Enter your Dzongkha mark:"));
    math = parseInt(prompt("Enter your Math mark:"));
    sci = parseInt(prompt("Enter your science mark:"));
    fees = parseInt(prompt("fees: "));

    let percentage = (eng + dzo + math + sci) / 4

    if (percentage >= 50 && fees == 45000) {
        console.log("\nName: " + name, "\nAge: " + age, "\nPercentage: " + percentage);
        console.log("\nAdmission Successfull!!");

    }
    else {
        console.log("Admission failed");
    }
}
else {
    console.log("No addmission found");
}




// a= b; //reassigning
// a == b; //condition
// a === b; //first checks value and its type condition



