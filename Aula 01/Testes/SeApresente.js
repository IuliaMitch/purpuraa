console.clear();
var prompt = require("prompt-sync")();
let nome = prompt("Diga seu nome: ");
const sexo = ["Non Binario", "Feminino", "Masculino"];
console.log(`-------------------`);
console.log(`|${sexo[0]}|`);
console.log(`|${sexo[1]}|`);
console.log(`|${sexo[2]}|`);
console.log(`-------------------`);
let sexo2 = prompt("Com qual gênero se identifica: ");
console.clear();
while (
  sexo2.toLowerCase() != sexo[0].toLowerCase() &&
  sexo2.toLowerCase() != sexo[1].toLowerCase() &&
  sexo2.toLowerCase() != sexo[2].toLowerCase()
) {
  let enter = prompt(`Alguma informação não foi corretamente
preenchida, Tente novamente...`);
  console.clear();
  console.log(`-------------------`);
  console.log("0 -", sexo[0]);
  console.log("1 -", sexo[1]);
  console.log("2 -", sexo[2]);
  console.log(`-------------------`);
  sexo2 = prompt("Com qual gênero se identifica: ");
}
console.clear();
console.log("-------------------------------");
let anoAtual = +prompt("Qual é o ano atual: ");
let anoDeNascimento = +prompt("Qual seu ano de nascimento: ");
console.log("-------------------------------");
let idade = anoAtual - anoDeNascimento;
while (idade <= 0 || idade > 150) {
  let enter = prompt(`Alguma informação não foi corretamente
preenchida, Tente novamente...`);
  console.clear();
  console.log("-------------------------------");
  anoAtual = +prompt("Qual é o ano atual: ");
  anoDeNascimento = +prompt("Qual seu ano de nascimento: ");
  console.log("-------------------------------");
  idade = anoAtual - anoDeNascimento;
}
console.clear()
console.log(`---------------------------------`)
if (sexo2.toLowerCase() == sexo[0].toLowerCase()) {
  console.log(`Prazer ${nome}, você é uma pessoa Não-Binário
com mais ou menos ${idade} anos de idade`);
}
if (sexo2.toLowerCase() == sexo[1].toLowerCase()) {
  console.log(`Prazer ${nome}, você é uma Mulher
com mais ou menos ${idade} anos de idade`);
}
if (sexo2.toLowerCase() == sexo[2].toLowerCase()) {
  console.log(`Prazer ${nome}, você é um Homem
com mais ou menos ${idade} anos de idade`);
}
console.log(`--------------------------------`);