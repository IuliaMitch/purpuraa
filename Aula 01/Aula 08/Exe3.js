let p = require("prompt-sync")();
console.clear();
console.log("Diga um número e diremos a tabuada dele");
let num = +p('RESPOSTA: ');
for(let turn = 1; turn <= 10; turn++){
    console.log(`${num}x${turn} = ${num*turn}`);
}