var prompt = require('prompt-sync')();
console.clear();
let real = +prompt('Quantos reais vai converter? ');
console.log(`${real} reais vão ser convertidos...`)
let nada = prompt('Carregando... Aperte Enter!');
let dolar = +prompt('Qual o valor do Dolar hoje? ');
let nada2 = prompt('Carregando... Aperte Enter!');
let cota = parseInt(real / dolar);
console.log(`A conversão deu: ${cota} dolares`);