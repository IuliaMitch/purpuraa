var prompt = require('prompt-sync')();
var escolha;
var alvo;
var EscolhaLuta;
let hora = 6;
let dia = 1;
function tempo(){
    if(hora > 23){
        let vari = hora - 24
        hora = 0 + vari;
        dia++;
        if(hora <= 9){
            
        console.log('Horário: 0',hora);
        console.log('Dia', dia);
    }
    }
}
let x = 5;
let Viridian = 1000;
let trajeto = Viridian - 200;
let status = {
    nome: prompt('Qual o nome do seu Personagem? '),
    Level: 1,
    vidaDoPokemon: 10,
    ienes: 100,
    pokemon: '',
    xp: 0,
    levelup: function () {
        this.xp++;
        this.ienes += 10;
        if (status.xp == 3) {
            this.Level++;
        }
    },
};
const pokeInicial = ['Bulbassauro', 'Charmander', 'Squirtle'];
const poke = ['Caterpie', 'Ratata', 'Metapod', 'Beedril', 'Ekans'];
const RESPOSTA = [];
var regex = /[1-3]/;
let pokeAd;
var vidaDoAlea = Math.trunc(Math.random() * 10) + 1;
function Jornada() {
    while (!regex.test(jornada)) {
        console.log(`
1 - VOCÊ DESEJA SEGUIR PARA EM FRENTE SUA JORNADA? 
2 - UPAR SEU POKEMON CONTRA POKEMONS QUE ESTÃO NA GRAMA ALTA? 
3 - OU DESCANSAR NO POKESTOP?
`);
        var jornada = +prompt('RESPOSTA: ');
    }
    while (jornada == 3) {
        console.log('-------------------------------------------------');
        console.log('ENFERMEIRA: VOCÊ PASSOU 6 HORAS DESCANSANDO');
        tempo();
        hora += 6;
        status.vidaDoPokemon = 10;
        let vaz = prompt('Enter....');
        console.log(`
1 - VOCÊ DESEJA SEGUIR PARA EM FRENTE SUA JORNADA? 
2 - UPAR SEU POKEMON CONTRA POKEMONS QUE ESTÃO NA GRAMA ALTA? 
3 - OU DESCANSAR MAIS NO POKESTOP?
`);
        jornada = +prompt('RESPOSTA: ');
        console.log('-------------------------------------------------');
    }
    if (jornada == 1) {
        for (x; Viridian > trajeto; Viridian--) {
            x++;
            console.clear();
            console.log('VIAJANDO.....');
            console.log('TRAJETO:', Viridian);
            console.log('POSIÇÃO:', x);
        }
        console.log('E 3 HORAS SE PASSARAM...');
        hora += 3;
        tempo();
    }
    if (jornada == 2) {
        mato();
        console.log(status);
    }
}
function luta() {
    for (let i = 0; i <= vidaDoAlea || i < status.vidaDoPokemon; i++) {
        console.log(`-----TURNO: ${i + 1}------`);
        if (status.vidaDoPokemon <= 0) {
            console.log(escolha.toUpperCase(), 'MORREU');
            console.log('VOCÊ APARECE NA POKESTOP MAIS PRÓXIMA...');
            console.log(status);
            Jornada();
            break;
        }
        let ataqueDele = 5;
        console.log('SEU POKEMON ATACA');
        vidaDoAlea -= 5 * status.Level;
        console.log(pokeAd.toUpperCase(), `TOMA ${5 * status.Level} DE DANO`);
        console.log('VIDA DO POKEMON INIMIGO:', vidaDoAlea);
        if (vidaDoAlea <= 0) {
            console.log(pokeAd.toUpperCase(), 'MORREU');
            if (vidaDoAlea <= 0) {
                status.levelup();
            }
            break;
        }
        console.log(`O`, pokeAd.toUpperCase(), `ATACA SEU POKEMON`);
        let attack = prompt('enter...');
        status.vidaDoPokemon -= ataqueDele;
        console.clear();
        console.log('VIDA DO POKEMON INIMIGO:', vidaDoAlea);
        console.log('VIDA DO SEU POKEMON:', status.vidaDoPokemon);
        console.log(`
| FUGIR  |
| ATACAR |`);
        console.log();
        EscolhaLuta = prompt(`O que quer fazer: `);
        validação2();
        if (EscolhaLuta.toLowerCase() == 'fugir') {
            console.log(`*VOCÊ FUGIU*`);
            break;
        }
    }
}
function mato() {
    pokeAd = poke[Math.trunc(Math.random() * 5)];
    let mato = prompt('*VOCÊ ESTÁ ANDANDO NO MATO*');
    console.log(`--------APARECE UM`, pokeAd.toUpperCase(), `-------`);
    console.log(`*VOCÊ INVOCA SEU`, escolha.toUpperCase(), `*`);
    console.log(`
| FUGIR  |
| ATACAR |
`);
    EscolhaLuta = prompt(`O que quer fazer: `);
    validação2();
    if (EscolhaLuta.toLowerCase() == 'fugir') {
        console.log(`*VOCÊ FUGIU*`);
    } else {
        luta();
    }
}
function validação2() {
    while (
        EscolhaLuta.toLowerCase() != 'fugir' &&
        EscolhaLuta.toLowerCase() != 'atacar'
    ) {
        console.log('VOCÊ PRECISA ESCOLHER UM DOS DOIS');
        console.log(`
  | FUGIR  |
  | ATACAR |`);
        console.log();
        EscolhaLuta = prompt(`O que quer fazer: `);
    }
}
console.log(
    'PROF. CARVALHO: OLÁ',
    status.nome.toUpperCase(),
    'SEJA BEM VINDO...........',
);
let vaz = prompt('....');
console.clear();
console.log('PROF.CARVALHO: QUER ESCOLHER SEU POKEMON INICIAL?');
let vaz2 = prompt('APERTE ENTER PARA ESCOLHER....');
console.clear();
console.log(`---------Pokemon Inicial-----------`);
console.log(`
1 - ${pokeInicial[0]}
2 - ${pokeInicial[1]}
3 - ${pokeInicial[2]}
`);
console.log();
alvo = prompt('RESPOSTA: ');
escolha = pokeInicial[alvo - 1];
while (!regex.test(alvo)) {
    console.log('VOCÊ PRECISA ESCOLHER UM DOS 3!!');
    console.log(`---------Pokemon Inicial-----------`);
    console.log(`
1 - ${pokeInicial[0]}
2 - ${pokeInicial[1]}
3 - ${pokeInicial[2]}`);
    console.log();
    alvo = prompt('Escolha seu pokemon inicial: ');
    escolha = pokeInicial[alvo - 1];
}
status.pokemon = escolha;
console.log(`VOCÊ ESCOLHEU UM ${escolha.toUpperCase()}`);
let vazio = prompt('.....');
console.clear();
console.log(`VOCÊ ESTÁ NUMA CIDADEZINHA CHAMADA PALLET EM KANTO, VOCÊ ESCOLHEU SEU PRIMEIRO POKEMON
COM O PROF. CARVALHO E SEU OBJETIVO É LUTAR CONTRA POKEMONS QUE ESPREITAM NO MATO, CONTRA TREINADORES
ADVERSÁRIOS COMO VOCÊ E DERROTAR O CAMPEÃO DA LIGA POKEMON`);
console.log();
console.log('VOCÊ QUER COMEÇAR ESSA JORNADA?');
let pergunta = prompt('REPOSTA: ');
if (pergunta.toLowerCase() == ('nao' || 'nn' || 'n')) {
}
console.clear();
console.log(
    '*VOCÊ ESTÁ INDO EM DIREÇÃO A PRÓXIMA CIDADE E CONSEGUE VER UM POKESTOP*',
);
Jornada();
