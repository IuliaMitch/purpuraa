// Numa eleição existem três candidatos. 
// Faça um programa que peça o número total de eleitores. 
// Peça para cada eleitor votar e ao final mostrar o número de votos de cada candidato.
let p = require("prompt-sync")();
console.clear();
const candidato1 =[];
const candidato2 =[];
const candidato3 =[];
var regex = /[1-3]/
var regex2 = /[0-9]/
console.log(`----------ELEIÇÃO-------------
ESCOLHA 1 DOS CANDIDATOS ABAIXO
1 - PRIMEIRO CANDIDATO
2 - SEGUNDO CANDIDATO
3 - TERCEIRO CANDIDATO
----------------------------------`);
console.log('QUANTOS ELEITORES EXISTEM?');
let eleitor = +p('RESPOSTA: ');
while(!regex2.test(eleitor)){
console.log('você não escolheu um número de eleitores');
console.log(`ESCOLHA O NÚMERO DE ELEITORES`);
eleitor = +p('RESPOSTA: ');
}

for(let i = 1; i <= eleitor; i++){
console.log(`VOTO DO ${i}º ELEITOR`);
let escolha = +p('VOTO EM NÚMERO: ');
while(!regex.test(escolha)){
console.log('VOCÊ TEM QUE ESCOLHER ENTRE OS 3');
console.log(`----------ELEIÇÃO-------------
ESCOLHA 1 DOS CANDIDATOS ABAIXO
1 - PRIMEIRO CANDIDATO
2 - SEGUNDO CANDIDATO
3 - TERCEIRO CANDIDATO
----------------------------------`);
escolha = +p('VOTO EM NÚMERO: ');
console.clear();
}
if (escolha == 1){
    candidato1.push(escolha);
}
if (escolha == 3){
    candidato2.push(escolha);
}
if (escolha == 3){
    candidato3.push(escolha);
}
}
console.log(`
--------------------RESULTADO---------------------------
O PRIMEIRO CANDIDATO RECEBEU ${candidato1.length} VOTOS
O SEGUNDO CANDIDATO RECEBEU ${candidato2.length} VOTOS
O TERCEIRO CANDIDATO RECEBEU ${candidato3.length} VOTOS
--------------------------------------------------------
`);