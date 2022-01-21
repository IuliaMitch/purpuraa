var prompt = require('prompt-sync')();

let poke = prompt('Digite o nome de um Pokemon: ');
console.log(`Você encontra um ${poke}`);

let vd = +prompt('Qual a vida do Pokemon: ');
let ad = +prompt('Qual o dano do seu Pikachu: ');
let turnos = parseInt(vd / ad);
console.log('Pikachu eu escolho você!!');
console.log(`Pikachu levará ${turnos} turnos para
derrotar ${poke}... `);


