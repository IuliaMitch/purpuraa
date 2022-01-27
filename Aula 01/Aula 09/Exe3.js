let p = require("prompt-sync")();
console.clear();
const numeros = [];
var regex = /[0-9]/
let c = +p("Quantos números quer colocar na lista:");
while(!regex.test(c)){
    console.log("Tem que ser um número")
    c = +p("Quantos números quer colocar na lista:");
}
for(let i = 0; i < c; i++){ 
let numero = +p('ENTRE COM UM NÚMERO: ');
while(!regex.test(numero)){
    console.log("Tem que ser um número")
    numero = +p('ENTRE COM UM NÚMERO: ');
}
numeros.push(numero);
}
numeros.sort((a, b)=> a - b);
console.log(`A soma do maior numero da lista e do menor é: ${numeros[0] + numeros[c - 1]}`);

