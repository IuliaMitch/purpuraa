console.clear();
var prompt = require("prompt-sync")();
const pares = [];
const impares = [];
console.log(`TODOS OS NÚMERO DE 0 AO NUMERO ESCOLHIDO SERÃO TESTADOS`);
console.log('ESCOLHA UM NUMÉRO MAIOR QUE 0')
let qnt = +prompt('RESPOSTA: ');
for(var turn = 0; turn <= qnt; turn++){
    console.clear();
    if (turn % 2 == 0){
        pares.push(turn);
    }
    else {
        impares.push(turn);
    }
}
console.log(`----NÚMEROS PARES----
${pares}`);
console.log(`----NÚMEROS IMPARES----
${impares}`);