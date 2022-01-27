let p = require("prompt-sync")();
console.clear();
const cont = []; 
let x = 0;
let num1 = +p("Diga um número:");
let num2 = +p("Diga outro número: ")
if(num2 > num1){
    x = num1;
    num1 = num2;
    num2 = x;
}
for(let i = num1; i >= num2; i--){
cont.push(i)
}
console.log("DE", num1,"A", num2);
console.log(cont);
