var prompt = require('prompt-sync')();
let ataqueDele;
let jornada;
let escolha;
let alvo;
let varl = 0;
let EscolhaLuta;
function adicionaZero(numero) {
    if (numero <= 9) {
        return '0' + numero;
    } else {
        return numero;
    }
}
let x = 5;
let Viridian = 1000;
let trajeto = Viridian - 200;
let status = {
    nome: prompt('Qual o nome do seu Personagem? '),
    Level: 1,
    maxHp: 10,
    vidaDoPokemon: 10,
    ienes: 100,
    pokemon: '',
    xp: 0,
    missão: '',
    hora: 6, 
    dia = 1,
    azar: (vida, dinheiro, xp) => {
    this.vidaDoPokemon -= vida * status.Level;
    this.ienes -= dinheiro * status.Level;
    this.xp -= xp;},
    gethp: (a) => {
        for(; this.vidaDoPokemon < a; this.vidaDoPokemon++){
            console.log(this.vidaDoPokemon);
        }
    },
    tempo:(a) => {
        this.hora += a
        if (this.hora > 23) {
            let vari = a - 24;
            this.hora = 0;
            this.hora += vari;
            this.dia++;
        }
        console.log(`Horário: ${adicionaZero(this.hora)}hrs`);
        console.log('Dia', this.dia)},
    levelup: function () {
        this.xp++;
        this.ienes += 10;
        if (status.xp == 3) {
            this.Level++;
            this.xp = 0;
            this.maxHp *= status.Level;
        }
    },


}
const pokeInicial = ['Bulbassauro', 'Charmander', 'Squirtle'];
const poke = ['Caterpie', 'Ratata', 'Metapod', 'Beedril', 'Ekans'];
const RESPOSTA = [];
var regex = /[1-3]/;
let pokeAd;
var vidaDoAlea;
var att;
const validade = (a) =>{
    while(!regex.test(a)){
        console.log('Escolha um dos 3!');
        a = +prompt('RESPOSTA: ');
    }
    return a;
}
const ataque = (a) => {
    if (a == pokeInicial[0]) {
        console.log(pokeInicial[0].toUpperCase(), 'USA CHICOTE DE VINHAS');   
    }
    if (a == pokeInicial[1]) {
        console.log(pokeInicial[1].toUpperCase(), 'USA BRASAS');
    }
    if (a == pokeInicial[2]) {
        console.log(pokeInicial[2].toUpperCase(), 'USA BOLHAS');
    }
}
function Jornada() {
    jornada = 0;
        console.log(`
1 - VOCÊ DESEJA SEGUIR PARA EM FRENTE SUA JORNADA? 
2 - UPAR SEU POKEMON CONTRA POKEMONS QUE ESTÃO NA GRAMA ALTA? 
3 - OU DESCANSAR NO POKESTOP?
`);
        jornada = +prompt('RESPOSTA: ');
        validade(jornada);
    while (jornada == 3) {
        console.log('-------------------------------------------------');
        console.log('ENFERMEIRA: VOCÊ PASSOU 6 HORAS DESCANSANDO');
        status.tempo(6);
        status.gethp(maxHp);
        let vaz = prompt('Enter....');
        console.clear();
        console.log(`
1 - VOCÊ DESEJA SEGUIR PARA EM FRENTE SUA JORNADA? 
2 - UPAR SEU POKEMON CONTRA POKEMONS QUE ESTÃO NA GRAMA ALTA? 
3 - OU DESCANSAR MAIS NO POKESTOP?
`);
        jornada = +prompt('RESPOSTA: ');
        validade(jornada);
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
        status.tempo(3);
    }
    if (jornada == 2) {
        console.clear();
       while(varl != 1 && varl != 2){console.log(`GRAMA CLARA OU ESCURA?
        1 - CLARA
        2 - ESCURA`)
        varl = +prompt('RESPOSTA: ');}
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
            for(; status.vidaDoPokemon < status.maxHp; status.vidaDoPokemon++){
                console.log(status.vidaDoPokemon);
            }
            if(status.xp > 0){
                azar(0, 0, 1)
            }
            console.log(status);
            Jornada();
            break;
        }
        ataque(escolha);
        att = Math.trunc(Math.random() * 10) + 5 * status.Level
        if(att == 15 * status.Level){
            console.log('CRITICO!');
        }
        vidaDoAlea -= att
        console.log(pokeAd.toUpperCase(), `TOMA ${att} DE DANO`);
        console.log('VIDA DO POKEMON INIMIGO:', vidaDoAlea);
        let attack = prompt('enter...');
        if (vidaDoAlea <= 0) {
            console.log(pokeAd.toUpperCase(), 'MORREU');
            if (vidaDoAlea <= 0) {
                status.levelup();
            }
            break;
        }
        console.log(`O`, pokeAd.toUpperCase(), `ATACA SEU POKEMON`);
        attack = prompt('enter...');
        status.azar((ataqueDele / status.Level), 0, 0)
        console.clear();
        console.log('VIDA DO POKEMON INIMIGO:', vidaDoAlea);
        console.log('VIDA DO SEU POKEMON:', status.vidaDoPokemon);
        if (varl == 1) {
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
}
function mato() {
    if(varl = 1){
    ataqueDele = 5;
    vidaDoAlea = 10;}
    else if(varl = 2){
        ataqueDele = 10 * status.Level;
        vidaDoAlea = 20 * status.Level;  
    }
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
    console.clear();
    console.log('VOCÊ PRECISA ESCOLHER UM DOS 3!!');
    console.log(`---------Pokemon Inicial-----------`);
    console.log(`
1 - ${pokeInicial[0]}
2 - ${pokeInicial[1]}
3 - ${pokeInicial[2]}`);
    console.log();
    alvo = prompt('Escolha seu pokemon inicial: ');validade(alvo);
    escolha = pokeInicial[alvo - 1];
status.pokemon = escolha;
console.log(`VOCÊ ESCOLHEU UM ${escolha.toUpperCase()}`);
let vazio = prompt('.....');
console.clear();
console.log(`VOCÊ ESTÁ NUMA CIDADEZINHA CHAMADA PALLET EM KANTO, VOCÊ ESCOLHEU SEU PRIMEIRO POKEMON
COM O PROF. CARVALHO E SEU OBJETIVO É LUTAR CONTRA POKEMONS QUE ESPREITAM NO MATO, CONTRA TREINADORES
ADVERSÁRIOS COMO VOCÊ E DERROTAR O CAMPEÃO DA LIGA POKEMON`);
console.log();
console.log('VOCÊ QUER COMEÇAR ESSA JORNADA?');
let pergunta = prompt('RESPOSTA: ');
// if (pergunta.toLowerCase() == ('nao' || 'nn' || 'n')) {
    // break;
// }
console.clear();
console.log(
    '*VOCÊ ESTÁ INDO EM DIREÇÃO A PRÓXIMA CIDADE E CONSEGUE VER UM POKESTOP*',
);
Jornada();
vaz = prompt('Enter....');
console.clear();
while (jornada == 2) {
    Jornada();
}
if (jornada == 1) {
    do {
        console.clear();
        console.log(`
Durante sua caminhada você encontra uma treinadora pokemon...
--------------------------------------------------------
*ELA CORRE EM SUA DIREÇÃO E FALA COM VOCÊ*
PRINCESS JOANA: OLÁ... MEU NOME É JOANA, EU ESTAVA TREINANDO MEU CLEFABLE 
AQUI PERTO E ELE FICOU COM MEDO E FUGIU PARA AS MONTANHAS, EU ESTAVA PROCURANDO
UM TREINADOR POKEMON QUE PUDESSE ME AJUDAR CONHECE ALGUM? 

*NOTA:ELA NÃO SABE QUE VOCÊ É UM TREINADOR POKEMON*
-----------------------DIALOGO-------------------------------
1 - "EU SOU UM TREINADOR POKÉMON E POSSO TE AJUDAR"
2 - *MENTIR* "AH... NÃO CONHEÇO NENHUM TREINADOR POKEMON POR PERTO"
3 - IGNORAR
`);
        var plau = +prompt('RESPOSTA:');
        if (plau == 3) {
            console.clear();
            console.log(
                'VOCÊ ENCONTRA UM URSARING QUE TE PERSEGUE E VOCÊ TENTA FUGIR',
            );
            console.log(
                'SEU POKEMON PERDE MUITA VIDA E VOCÊ PERDE DINHEIRO ENQUANTO FOGE',
            );
            console.log('UM CAÇADOR TE SALVA DO URSARING....');
            console.log();
            azar(6, 20, 0);
            status.tempo(1);
            console.log(status);
            vaz = prompt();
            continue;
        }
        status.gethp(10);
    } while (!regex.test(plau));
    RESPOSTA.push(plau);
    missão: if (plau == 1) {
        console.log(
            status.nome.toUpperCase() +
                ':EU SOU UM TREINADOR POKÉMON E POSSO TE AJUDAR!',
        );
        status.missão = 'ACHAR O CLEFABLE!';
        console.log('MISSÃO DEFINIDA:', status.missão);
        vaz = prompt('COMEÇAR!');
        console.clear();
        do {
            hora++;
            tempo();
            console.log(`
        VOCÊ COMEÇA SUA BUSCA PELO CLEFABLE...
        VOCÊ COMEÇA A ANDAR PELAS MONTANHAS PASSANDO POR VARIOS POKEMONS
        NO SEU CAMINHO VOCÊ CONSEGUE VER MATO, UM TREINADOR POKEMON E UM ONIX
        E VOCÊ SE ENCONTRA ENTRE 3 CAMINHOS.
        --------------------------------------------------------------------------
        1-PASSAR PELO PELO MATO E EVITAR O TREINADOR
        2-IR DE ENCONTRO COM O TREINADOR POKEMON
        3-TENTAR PASSAR DESPERCEBIDO PELO ONIX
        --------------------------------------------------------------------------
        `);
            var iscolha = +prompt('RESPOSTA:');
        } while (!regex.test(iscolha));
    }
    if (plau == 2) {
        console.log(
            `${status.nome.toUpperCase()}: AH... NÃO CONHEÇO NENHUM TREINADOR POKEMON POR PERTO`,
        );
        console.log(
            'PRINCESS JOANA: OBRIGADA DE QUALQUER FORMA! CUIDADO NA VIAGEM!!',
        );
        console.log(`-----------------------------------------------------------------
        VOCÊ SEGUE EM FRENTE E PERCEBE QUE DURANTE O CAMINHO PASSOU UM 
        POKEMON DE GRANDE PORTE PELO MESMO CAMINHO QUE VOCÊ E QUE VOCÊ O EVITOU
        POR POUCO CONVERSANDO COM A PRINCESS JOANA...
        ---------------------------------------------------------------------------
        `);
    }
}
console.clear();
status.tempo(0);
while (!regex.test(plou)) {
    console.log(`
UM CAÇADOR COM UMA ARMA TE ACOLHE ELE DIZ SEU NOME
VELHO DIAN: O QUE ESTÁ FAZENDO POR AQUI? EXISTEM MUITOS POKEMONS
PERIGOSOS POR AQUI, A NATUREZA DAQUI É SELVAGEM
*O VELHO OLHA PARA VOCÊ E FAZ UMA CARA ESTRANHA*
VOCÊ PARECE UM TREINADOR POKEMON...
ESTÁ INDO PARA VIRIDIAN LUTAR CONTRA O LIDER DE GINÁSIO ?

1 - "SIM ESTOU INDO PARA LÁ"
2 - "PRECISO FICAR MAIS FORTE PARA LUTAR CONTRA O LIDER DE GINÁSIO!"
3 - FICAR EM SILÊNCIO...
`);
    var plou = +prompt('RESPOSTA: ');
    RESPOSTA.push(plou);
    if (plou == 2) {
        console.log('ENTÃO IRÁ LUTAR CONTRA MIN!');
        vidaDoAlea = 30;
        pokeAd = 'GRAVELER';
        ataqueDele = 5;
        varl = 0;
        luta();
        if(vidaDoAlea != 0){
            Viridian + 150
            x - 150
            azar(0, 30, 0);
            console.log(status);
        }

        break;
    }
    console.log(`
    VELHO DIAN: ACHO QUE VOCÊ DEVE IR ENTÃO... NÃO TE ATRASAREI MAIS...
    *SEU POKEMON DESCANSA UM POUCO*
    `)
}
console.log(`
*SE PASSA UMA HORA DURANTE SEU CAMINHO*
*VOCÊ SEGUE EM FRENTE SUA JORNADA E TEM QUE PASSAR PELO MATO PARA*
*PODER ATRAVESSAR A PONTE QUE HÁ LOGO A FRENTE E SEGUIR SEU CAMINHO*
NOTA:VOCÊ DEVE AUMENTAR O LEVEL DO SEU POKEMON PARA PASSAR PELOS DESAFIOS...
`);
status.tempo(1);
for(let i =0; i < 3; i++){varl = 2; mato();}



