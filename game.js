 /* terminal*/
 
 const prompt=require("prompt-sync")();

let pc= Math.floor(Math.random()*100);
let imp="";
 
let user=prompt("what is you number :")

while (pc!=user) {       
    if (user>pc) {
        console.log("9al")
    }else if (user<pc) {
        console.log("ktar ")
    }
     user=prompt("what is you number :")
     imp+=("\n"+user);
};
  
/* 
 html css
console.log("correct");

console.log("your answers"+imp);

let pc =5;
let imp="";
const use=document.getElementById('userInput');
const chek=document.getElementById('checking');
const res=document.getElementById('resault');
const ghalat=document.getElementById('inc');

  chek.addEventListener('click', function () {
   let user=Number(use.value);
   
     if (user>pc) {
         res.textContent="9al";
         imp+=(user+",");
         
     } else if (user<pc){
        res.textContent="ktar" ;
        imp+=(user+",");
     }else{
        use.disabled =true;
        chek.disabled=true;
        res.textContent="correct";
        ghalat.textContent=imp;
    }
  })
*/