var prompt = require('prompt-sync')();
let ataqueDele;
let jornada;
let escolha;
let alvo;
let varl = 0;
let EscolhaLuta;
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
    bio: function () {
        console.log(`----------------STATUS--------------------`);
        console.log(`A VIDA DO POKEMON É: ${this.vidaDoPokemon}`);
        console.log(`SEU LEVEL É: ${this.Level}`);
        console.log(`VOCÊ TEM: ${this.ienes} IENES`);
        console.log(`SEU XP É: ${this.xp}`);
        console.log(`------------------------------------------`);
    },
    azar: function (vida, dinheiro, xp) {
        this.vidaDoPokemon -= vida * status.Level;
        this.ienes -= dinheiro * status.Level;
        this.xp -= xp;
    },
    gethp: function (a) {
        for (a; status.vidaDoPokemon < a; status.vidaDoPokemon++) {
            console.log(status.vidaDoPokemon);
        }
        return status.vidaDoPokemon;
    },
    levelup: function (a) {
        this.xp += a;
        this.ienes += 10;
        if (status.xp == 3 * this.Level) {
            this.Level++;
            this.xp = 0;
            this.maxHp *= status.Level;
        }
    },
};
const relogio = {
    Hora: 6,
    Dia: 1,
    tempo: function (numero) {
        this.Hora += numero;
        if (relogio.Hora > 23) {
            let vari = this.Hora - 24;
            this.Hora = 0;
            this.Hora += vari;
            this.Dia++;
        }
        return this.Hora, this.Dia;
    },
    reloginho: function () {
        console.log(`
------------------------
Dia:${this.Dia}
Hora:${this.Hora}hrs
------------------------`);
    },
};
const pokeInicial = ['Bulbassauro', 'Charmander', 'Squirtle'];
const poke = ['Caterpie', 'Ratata', 'Metapod', 'Beedril', 'Ekans'];
const RESPOSTA = [];
const regex = /[1-3]/;
let pokeAd;
let vidaDoAlea;
let att;
const pokeAleatorio = (nome, vida, dano) => {
    pokeAd = nome;
    vidaDoAlea = vida;
    ataqueDele = dano;
};
const validade = a => {
    while (!regex.test(a)) {
        console.log('Escolha um dos 3!');
        a = +prompt('RESPOSTA: ');
    }
    return a;
};
const ataque = a => {
    if (a == pokeInicial[0]) {
        console.log(pokeInicial[0].toUpperCase(), 'USA CHICOTE DE VINHAS');
    }
    if (a == pokeInicial[1]) {
        console.log(pokeInicial[1].toUpperCase(), 'USA BRASAS');
    }
    if (a == pokeInicial[2]) {
        console.log(pokeInicial[2].toUpperCase(), 'USA BOLHAS');
    }
};
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
        relogio.tempo(6);
        relogio.reloginho();
        status.gethp(status.maxHp);
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
        relogio.tempo(3);
        relogio.reloginho();
        vaz = +prompt('Enter...');
    }
    if (jornada == 2) {
        console.clear();
        while (varl != 1 && varl != 2) {
            console.log('EM QUAL TIPO DE GRAMA QUER IR?');
            console.log('1 - GRAMA CLARA');
            console.log('2 - GRAMA ESCURA');
            varl = +prompt('RESPOSTA: ');
        }
        mato();
        status.bio();
    }
}
function luta() {
    for (let i = 0; i <= vidaDoAlea || i < status.vidaDoPokemon; i++) {
        console.log(`-----TURNO: ${i + 1}------`);
        if (status.vidaDoPokemon <= 0) {
            console.log(escolha.toUpperCase(), 'MORREU');
            console.log('VOCÊ APARECE NA POKESTOP MAIS PRÓXIMA...');
            status.gethp(status.maxHp);
            if (status.xp > 0) {
                status.azar(0, 0, 1);
            }
            status.bio();
            Jornada();
            break;
        }
        ataque(escolha);
        att = Math.trunc(Math.random() * 10) + 5 * status.Level;
        if (att == 15 * status.Level) {
            console.log('CRITICO!');
        }
        vidaDoAlea -= att;
        console.log(pokeAd.toUpperCase(), `TOMA ${att} DE DANO`);
        console.log('VIDA DO POKEMON INIMIGO:', vidaDoAlea);
        vaz = prompt('enter...');
        if (vidaDoAlea <= 0) {
            console.log(pokeAd.toUpperCase(), 'MORREU');
            if (vidaDoAlea <= 0) {
                status.levelup(1);
            }
            break;
        }
        console.log(`O`, pokeAd.toUpperCase(), `ATACA SEU POKEMON`);
        vaz = prompt('enter...');
        status.vidaDoPokemon -= ataqueDele;
        console.clear();
        console.log('VIDA DO POKEMON INIMIGO:', vidaDoAlea);
        console.log('VIDA DO SEU POKEMON:', status.vidaDoPokemon);
        if (varl == 1 || varl == 2) {
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
    if ((varl = 1)) {
        ataqueDele = 5;
        vidaDoAlea = 10;
    } else if ((varl = 2)) {
        ataqueDele = 10 * status.Level;
        vidaDoAlea = 20 * status.Level;
    }
    pokeAd = poke[Math.trunc(Math.random() * 5)];
    let mato = prompt('*VOCÊ ESTÁ ANDANDO NO MATO*');
    console.log(`--------APARECE UM`, pokeAd.toUpperCase(), `-------`);
    console.log(`*VOCÊ INVOCA SEU`, escolha.toUpperCase(), `*`);
    console.log('| FUGIR  |');
    console.log('| ATACAR |');
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
        console.log('| FUGIR  |');
        console.log('| ATACAR |');
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
vaz = prompt('APERTE ENTER PARA ESCOLHER....');
console.clear();
console.log(`---------Pokemon Inicial-----------`);
console.log(`1 - ${pokeInicial[0]}`);
console.log(`2 - ${pokeInicial[1]}`);
console.log(`3 - ${pokeInicial[2]}`);
console.log();
alvo = +prompt('RESPOSTA: ');
validade(alvo);
escolha = pokeInicial[alvo - 1];
console.clear();
console.log(`VOCÊ ESCOLHEU UM ${escolha.toUpperCase()}`);
vaz = prompt('.....');
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
    console.clear();
    console.log(
        `Durante sua caminhada você encontra uma treinadora pokemon...`,
    );
    console.log(`--------------------------------------------------------`);
    console.log(`*ELA CORRE EM SUA DIREÇÃO E FALA COM VOCÊ*`);
    console.log(
        `PRINCESS JOANA: OLÁ... MEU NOME É JOANA, EU ESTAVA TREINANDO MEU CLEFABLE`,
    );
    console.log(
        `AQUI PERTO E ELE FICOU COM MEDO E FUGIU PARA AS MONTANHAS, EU ESTAVA PROCURANDO`,
    );
    console.log(`UM TREINADOR POKEMON QUE PUDESSE ME AJUDAR CONHECE ALGUM?`);
    console.log();
    console.log(`*NOTA:ELA NÃO SABE QUE VOCÊ É UM TREINADOR POKEMON*`);
    console.log(
        `-----------------------DIALOGO-------------------------------`,
    );
    console.log(`1 - "EU SOU UM TREINADOR POKÉMON E POSSO TE AJUDAR"`);
    console.log(
        `2 - *MENTIR* "AH... NÃO CONHEÇO NENHUM TREINADOR POKEMON POR PERTO"`,
    );
    console.log(`3 - IGNORAR`);
    let plau = +prompt('RESPOSTA:');
    validade(plau);
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
        status.azar(6, 20, 0);
        relogio.tempo(1);
        relogio.reloginho();
        console.log(status);
        vaz = prompt();
    }
    status.gethp(10);
    RESPOSTA.push(plau);
    missão: while (plau == 1) {
        console.log(
            status.nome.toUpperCase() +
                ':EU SOU UM TREINADOR POKÉMON E POSSO TE AJUDAR!',
        );
        status.missão = 'ACHAR O CLEFABLE!';
        console.log('MISSÃO DEFINIDA:', status.missão);
        vaz = prompt('COMEÇAR!');
        console.clear();
        relogio.tempo(1);
        relogio.reloginho();
        console.log(`VOCÊ COMEÇA SUA BUSCA PELO CLEFABLE...`);
        console.log(
            `VOCÊ COMEÇA A ANDAR PELAS MONTANHAS PASSANDO POR VARIOS POKEMONS`,
        );
        console.log(
            `NO SEU CAMINHO VOCÊ CONSEGUE VER MATO, UM TREINADOR POKEMON E UM ONIX`,
        );
        console.log(`E VOCÊ SE ENCONTRA ENTRE 3 CAMINHOS.`);
        console.log(
            `--------------------------------------------------------------------------`,
        );
        console.log(`1-PASSAR PELO PELO MATO E EVITAR O TREINADOR`);
        console.log(`2-IR DE ENCONTRO COM O TREINADOR POKEMON`);
        console.log(`3-TENTAR PASSAR DESPERCEBIDO PELO ONIX`);
        console.log(
            `--------------------------------------------------------------------------`,
        );
        let iscolha = +prompt('RESPOSTA:');
        validade(iscolha);
        if (iscolha == 2) {
            while (vidaDoAlea != 0) {
                status.gethp(status.maxHp);
                console.log('VOCÊ TERÁ QUE ME VENCER CONTRA MIN PRA PASSAR');
                varl = 3;
                pokeAleatorio('Camerupt', 15, 3);
                luta();
                if (vidaDoAlea != 0) {
                    status.azar(0, 10, 1);
                    vaz = prompt(status);
                }
                console.clear();
            }
        }
        if (iscolha == 3) {
            let furtividade = 0;
            let dado_furtivo;
            console.log('Stealth Event!!!');
            for (let i = 1; i <= 3; i++) {
                for (let i = 0; i < 500; i++) {
                    console.clear();
                    console.log('-------------------------------------');
                    dado_furtivo = Math.round(Math.random() * 20) + 3;
                    console.log(`ROLAGEM DE FURTIVIDADE: ${dado_furtivo}`);
                }
                vaz = prompt();
                if (dado_furtivo >= 9) {
                    console.log('-------------------------------------');
                    ++furtividade;
                    vaz = prompt(
                        `PARABÉNS VOCÊ PASSOU NO ${i}º TESTE FALTA ${3 - i}`,
                    );
                }
            }
            if (furtividade >= 2) {
                console.log('VOCÊ PASSOU DESPERCEBIDO(A) PELO ONIX!!');
                console.log('VOCÊ É OBRIGADO A PASSAR PELO MATO!!');
                console.log('-------------------------------------');
            }
            if (furtividade < 2) {
                varl = 3;
                pokeAleatorio('Onix', 50, 10);
                luta();
                if (vidaDoAlea != 0) {
                    Viridian + 150;
                    x - 150;
                    continue;
                }
            }
        }
        varl = 2;
        if (iscolha == 1) {
            for (let i = 0; i < 3; i++) {
                mato();
            }
        }
        mato();
        console.log(
            `APÓS UM TEMPO ANDANDO E DEPOIS DE LUTAR CONTRA POKEMONS VOCÊ ENCONTRA UMA MULHER!!`,
        );
        console.log(`*ELA TE DA UMA FRUTA E SAI CORRENDO*`);
        console.log(`*VOCÊ DECIDE COMER ESSA FRUTA QUE PARECE DELICIOSA*`);
        status.gethp(status.maxHp);
        relogio.tempo(1);
        console.log(`SE PASSA UMA HORA ENQUANTO VOCÊ PROCURA ESSE CLEFABLE`);
        console.log(`ANDANDO POR UMA CAVERNA ESCURA VOCÊ NÃO PODE VER DIREITO`);
        console.log(`VOCÊ OLHA PARA O CANTO DA CAVERNA E VE UM PASSÁRO...`);
        vaz = prompt('*ESSE PASSARO FAZ UM BARULHO ESTRANHO....*');
        console.clear();
        console.log('O PASSARO: WUEWUEWUEWUEWUE');
        console.log('VOCÊ PERCEBE QUE É UM PASSARO VERMELHO...');
        vaz = prompt('*O PASSARO VERMELHO TE PERCEBE*');
        console.clear();
        console.log('ELE VAI EMBORA E VOCÊ SEGUE O CAMINHO NA CAVERNA');
        console.log('VOCÊ CONSEGUE VER UMA BOLA ROSA NO FUNDO DA CAVERNA');
        console.log('ELE ESTA SENDO ATACADO POR UM GRUPO DE POKEMONS');
        console.log('*SEU PASSO FAZ BARULHO EM UMA PEDRA E ELES TE PERCEBEM*');
        console.log('3 ZUBATS VÃO EM TUA DIREÇÃO E VOCÊ TEM QUE LUTAR CONTRA ELES');
        pokeAleatorio('ZUBAT', 25, 5);
        for(let i = 0; i < 3; i++){
            luta();
        }
    }
    if (plau == 2) {
        console.log(
            `${status.nome.toUpperCase()}: AH... NÃO CONHEÇO NENHUM TREINADOR POKEMON POR PERTO`,
        );
        console.log(
            'PRINCESS JOANA: OBRIGADA DE QUALQUER FORMA! CUIDADO NA VIAGEM!!',
        );
        console.log(
            `-----------------------------------------------------------------`,
        );
        console.log(
            `VOCÊ SEGUE EM FRENTE E PERCEBE QUE DURANTE O CAMINHO PASSOU UM`,
        );
        console.log(
            `POKEMON DE GRANDE PORTE PELO MESMO CAMINHO QUE VOCÊ E QUE VOCÊ O EVITOU`,
        );
        console.log(`POR POUCO CONVERSANDO COM A PRINCESS JOANA...`);
        console.log(
            `--------------------------------------------------------------------------`,
        );
    }
}
console.clear();
relogio.reloginho();
console.log(`*UM CAÇADOR COM UMA ARMA TE ACOLHE ELE DIZ SEU NOME*`);
console.log(`VELHO DIAN: O QUE ESTÁ FAZENDO POR AQUI? EXISTEM MUITOS POKEMONS`);
console.log(`PERIGOSOS POR AQUI, A NATUREZA DAQUI É SELVAGEM`);
console.log(`*O VELHO OLHA PARA VOCÊ E FAZ UMA CARA ESTRANHA*`);
console.log(`VOCÊ PARECE UM TREINADOR POKEMON...`);
console.log(`ESTÁ INDO PARA VIRIDIAN LUTAR CONTRA O LIDER DE GINÁSIO ?`);
console.log();
console.log(`1 - "SIM ESTOU INDO PARA LÁ"`);
console.log(
    `2 - "PRECISO FICAR MAIS FORTE PARA LUTAR CONTRA O LIDER DE GINÁSIO!"`,
);
console.log(`3 - FICAR EM SILÊNCIO...`);
let plou = +prompt('RESPOSTA: ');
RESPOSTA.push(plou);
if (plou == 2) {
    console.log('ENTÃO IRÁ LUTAR CONTRA MIN!');
    pokeAleatorio('GRAVELER', 30, 5);
    varl = 0;
    luta();
    if (vidaDoAlea != 0) {
        Viridian + 150;
        x - 150;
        status.azar(0, 30, 0);
        status.bio();
    }
}
if (plou != 2) {
    console.log(
        `VELHO DIAN: ACHO QUE VOCÊ DEVE IR ENTÃO... NÃO TE ATRASAREI MAIS...`,
    );
    console.log(`*SEU POKEMON DESCANSA UM POUCO*`);
}
console.log(`*SE PASSA UMA HORA DURANTE SEU CAMINHO*`);
console.log(
    `*VOCÊ SEGUE EM FRENTE SUA JORNADA E TEM QUE PASSAR PELO MATO PARA*`,
);
console.log(
    `*PODER ATRAVESSAR A PONTE QUE HÁ LOGO A FRENTE E SEGUIR SEU CAMINHO*`,
);
console.log(
    `NOTA:VOCÊ DEVE AUMENTAR O LEVEL DO SEU POKEMON PARA PASSAR PELOS DESAFIOS...`,
);
vaz = prompt('');
relogio.tempo(1);
relogio.reloginho();
for (let i = 0; i < 3; i++) {
    varl = 2;
    mato();
    console.clear();
}
status.bio();
