// Faça um programa que carregue uma lista com os modelos de cinco carros.
// Carregue uma outra lista com o consumo desses carros, isto é,
// quantos quilômetros cada um desses carros faz com um litro de combustível. Calcule e mostre:
// O modelo do carro mais econômico;
// Quantos litros de combustível cada um dos carros cadastrados consome para percorrer uma distância de 1000 quilômetros e quanto isto custará,
// considerando um que a gasolina custe R$ 5,50 o litro.
let p = require("prompt-sync")();
console.clear();
// ["Logan", "Onix", "Hillux", "Vectra", "Fox"];
// [10, 20, 40, 15, 5];
const carros = [];
const gasolina = [];
let MaisEconomico = [];
for (let turn = 0; turn < 5; turn++) {
  console.clear();
  let carro = p("Qual o modelo do carro: ");
  carros.push(carro);
  let gasolin = +p("Quantos KM esse carro faz com 1L de Gasolina: ");
  gasolina.push(gasolin);
  gasolina2.push(gasolin)
  var gaso = 1000 / gasolina[turn];
  var custo = gaso * 5.5;
  console.log(
    `Esse carro gastará ${parseFloat(gaso).toFixed(
      2
    )}L de gasolina para percorrer 1000 km`
  );
  console.log(
    `E essa quantidade de gasolina custará ${parseFloat(custo).toFixed(2)}`
  );
  let enter = p("ENTER PARA O PRÓXIMO CARRO...");
}
const gasolina2 = [10, 20, 40, 15, 5];
console.log(gasolina);
gasolina2.sort((a, b) => b - a);
console.log(gasolina);
console.log(gasolina2);
for (let i = 0; i < 5; i++) {
  if (gasolina[i] === gasolina2[0]) {
    MaisEconomico.push(carros[i]);
    console.log("O CARRO MAIS ECONÔMICO É O:", MaisEconomico[0]);
    break;
  }
}