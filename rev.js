const prompt=require('prompt-sync')();

let userNumber=prompt("enter your number:");

let pc =Math.floor(Math.random()*10);
let resault="";

while (userNumber!=pc) {
    if (userNumber<pc) {
        console.log("enter a higher number ");
        resault+=("\n"+userNumber);
    } else if(userNumber>pc) {
     console.log("enter a lower number"); 
     resault+=("\n"+userNumber);  
    }
    userNumber=prompt("enter your number:");
}
resault+=("\n"+userNumber);
console.log("correct");
console.log("the resault:"+resault);