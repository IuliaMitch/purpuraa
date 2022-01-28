var prompt = require("prompt-sync")();
const pokeInicial = ["Bulbassauro", "Charmander", "Squirtle"];
const poke = ["Caterpie", "Purloin", "Metapod", "Beedril"];
var regex = /[1-3]/;
let escolhaAleatoria = Math.trunc(Math.random() * 4);
let pokeAlea = poke[escolhaAleatoria];
let vidaDoAlea = Math.trunc(Math.random() * 40) + 1;
console.log(`---------Pokemon Inicial-----------`);
console.log(`
1 - ${pokeInicial[0]}
2 - ${pokeInicial[1]}
3 - ${pokeInicial[2]}`);
console.log();
let alvo = prompt("Escolha seu pokemon inicial: ");
let escolha = pokeInicial[alvo - 1];
while (!regex.test(alvo)) {
  console.log("VOCÊ PRECISA ESCOLHER UM DOS 3!!");
  console.log(`---------Pokemon Inicial-----------`);
  console.log(`
1 - ${pokeInicial[0]}
2 - ${pokeInicial[1]}
3 - ${pokeInicial[2]}`);
  console.log();
  alvo = prompt("Escolha seu pokemon inicial: ");
  escolha = pokeInicial[alvo - 1];
}
console.log(`VOCÊ ESCOLHEU UM ${escolha.toUpperCase()}`);
let vidaDoSeu = +prompt("Qual a vida do seu Pokémon: ");
let mato = prompt("*VOCÊ ESTÁ ANDANDO NO MATO*");
console.log(`--------APARECE UM`, pokeAlea.toUpperCase(), `-------`);
console.log(`*VOCÊ INVOCA SEU`, escolha.toUpperCase(), `*`);
let FUGIR = "Fugir";
let ATACAR = "Atacar";
console.log(`
| FUGIR  |
| ATACAR |`);
let EscolhaLuta = prompt(`O que quer fazer: `);
while (
  EscolhaLuta.toLowerCase() != FUGIR.toLowerCase() &&
  EscolhaLuta.toLowerCase() != ATACAR.toLowerCase()
) {
  console.log("VOCÊ PRECISA ESCOLHER UM DOS DOIS");
  console.log(`
| FUGIR  |
| ATACAR |`);
  console.log();
  EscolhaLuta = prompt(`O que quer fazer: `);
}
if (EscolhaLuta.toLowerCase() == FUGIR.toLowerCase()) {
  console.log(`*VOCÊ FUGIU*`);
} else {
  for (let i = 0; i < vidaDoAlea || i < vidaDoSeu; i++) {
    console.log(`-----TURNO: ${i + 1}------`);
    let ataque = Math.trunc(Math.random() * 10) + 1;
    let ataqueDele = 5;
    console.log("SEU POKEMON ATACA");
    vidaDoAlea -= ataque;
    console.log(pokeAlea.toUpperCase(), `TOMA ${ataque} DE DANO`);
    if (ataque == 10) {
      console.log("CRITICO");
    }
    console.log("VIDA DO POKEMON INIMIGO:", vidaDoAlea);
    if (vidaDoAlea < 0) {
      console.log(pokeAlea.toUpperCase(), "MORREU");
      break;
    }
    console.log(`O`, pokeAlea.toUpperCase(), `ATACA SEU POKEMON`);
    let attack = prompt("enter...");
    vidaDoSeu -= ataqueDele;
    console.clear();
    console.log("VIDA DO POKEMON INIMIGO:", vidaDoAlea);
    console.log("VIDA DO SEU POKEMON:", vidaDoSeu);
    console.log(`
| FUGIR  |
| ATACAR |`);
    console.log();
    EscolhaLuta = prompt(`O que quer fazer: `);
    while (
      EscolhaLuta.toLowerCase() != FUGIR.toLowerCase() &&
      EscolhaLuta.toLowerCase() != ATACAR.toLowerCase()
    ) {
      console.log("VOCÊ PRECISA ESCOLHER UM DOS DOIS");
      console.log(`
| FUGIR  |
| ATACAR |`);
      EscolhaLuta = prompt(`O que quer fazer: `);
      console.log();
    }
    if (EscolhaLuta.toLowerCase() == FUGIR.toLowerCase()) {
      console.log(`*VOCÊ FUGIU*`);
      break;
    }
  }
}
