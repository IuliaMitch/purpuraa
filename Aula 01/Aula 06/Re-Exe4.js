var prompt = require("prompt-sync")();
console.clear();
const valores = [];
let dado;
console.log("Esse é o jogo do dado, você deve lança-lo 100 vezes");
let pergunta = prompt("Você quer lançá-lo? ");
if (pergunta.toLowerCase() == "sim") {
  console.log("Você lançou o 1d6 100 vezes!!");
  for (let turn = 0; turn < 100; turn++) {
    dado = Math.trunc(Math.random() * 6) + 1;
    valores.push(dado);
  }
  function valores1(value) {
    return value == 1;
  }
  function valores2(value) {
    return value == 2;
  }
  function valores3(value) {
    return value == 3;
  }
  function valores4(value) {
    return value == 4;
  }
  function valores5(value) {
    return value == 5;
  }
  function valores6(value) {
    return value == 6;
  }
  var valor1 = valores.filter(valores1);
  var valor2 = valores.filter(valores2);
  var valor3 = valores.filter(valores3);
  var valor4 = valores.filter(valores4);
  var valor5 = valores.filter(valores5);
  var valor6 = valores.filter(valores6);
  console.log(valor1.length, "Números 1");
  console.log(valor2.length, "Números 2");
  console.log(valor3.length, "Números 3");
  console.log(valor4.length, "Números 4");
  console.log(valor5.length, "Números 5");
  console.log(valor6.length, "Números 6");
}
