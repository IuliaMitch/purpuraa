// Faça um programa que peça o nome de usuário e a senha de um usuário.
// A senha deve ter no mínimo 8 caracteres, pelo menos um número e um caracter especial.
console.clear();
var prompt = require("prompt-sync")();
const SENHA = [];
const regex = /[0-9][@!#$%^&*()/\\]/;
let nome = prompt("Digite seu nome de usuário: ");
let senha = prompt("Digite sua senha: ");
SENHA.push(senha);
console.log(regex.test(SENHA[0]));
console.log(SENHA[0].length);
while (SENHA[0].length < 8 || !regex.test(SENHA[0])) {
  console.log("SENHA INVÁLIDA!!");
  console.log(`Sua senha deve ter pelo menos 8 caracteres`);
  console.log(`Sua senha deve ter pelo menos 1 caracteres especial
     e 1 número`);
  nome = prompt("Digite seu nome de usuário: ");
  let senha = prompt("Digite sua senha: ");
  SENHA.fill(senha, 0, 1);
  if (SENHA[0].length >= 8 && regex.test(SENHA[0])) {
    break;
  }
}
