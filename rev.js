const prompt=require('prompt-sync')();


let userNumber=Number(prompt("enter your number:"));

let pc =Math.floor(Math.random()*10);
let resaults="";
console.log(pc);
while (pc!=userNumber) {
    if (pc<userNumber) {
        console.log("enter a lower number");
        resaults+=("\n"+userNumber);
    }else if (pc>userNumber){
        console.log("enter a higher number");
        resaults+=("\n"+userNumber);
    }
     userNumber=Number(prompt("enter your number:"))
}
console.log("correct!");
console.log("your answers:"+resaults);