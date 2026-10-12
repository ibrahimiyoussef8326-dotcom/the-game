const prompt=require('prompt-sync')();


let userNumber=Number(prompt("enter your number:"));

let pc =Math.floor(Math.random()*10);
console.log(pc);
while (pc!=userNumber) {
    if (pc<userNumber) {
        console.log("enter a lower number")
    }else if (pc>userNumber){
        console.log("enter a higher number")
    }
     userNumber=Number(prompt("enter your number:"))
}
console.log("correct!")