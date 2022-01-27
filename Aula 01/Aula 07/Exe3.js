console.clear();
var prompt = require("prompt-sync")();
const valores = [];
let qnt = +prompt('Quantos valores quer rolar: ');
for(let turn = 0; turn < qnt; turn++){
    var numero = Math.trunc(Math.random()* 101);
    valores.push(numero);
}
valores.sort();
console.log(`
VALORES ROLADOS
`, valores);