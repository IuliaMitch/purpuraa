var prompt = require('prompt-sync')();
// Variáveis base e arrays do jogo
let ataqueDele;
let jornada;
let trajeto;
let alvo;
let varl = 0;
let EscolhaLuta;
let caminhada;
let liderDeGinásio;
const pokeInicial = ['Bulbasaur', 'Charmander', 'Squirtle'];
const poke = ['Caterpie', 'Ratata', 'Metapod', 'Beedril', 'Ekans'];
const RESPOSTA = [];
const regex = /[1-3]/;
const lider = /[1-2]/;
let pokeAd;
let vidaDoAlea;
let att;
let recomeço = '';
// Função para adicionar zero a esquerda
const adicionarZero = (numero) => numero >= 10 || numero < 0 ? numero : `0${numero}`;
// Função para criar pokemons inimigos
const pokeAleatorio = (nome, vida, dano) => {
    pokeAd = nome;
    vidaDoAlea = vida;
    ataqueDele = dano;
};
// Função para validar uma resposta de 1 a 3
const validade = a => {
    while (!regex.test(a)) {
        console.log('Escolha um dos 3!');
        a = +prompt('RESPOSTA: ');
    }
    return a;
};
// Variação de ataque com base na evolução do pokemon
const ataque = a => {
    switch (status.evolution) {
        case 1:
            switch (a) {
                case 'Squirtle':
                    return console.log('SQUIRTLE USA BOLHAS');
                case 'Bulbasaur':
                    return console.log('BULBASAUR USA CHICOTE DE VINHAS');
                case 'Charmander':
                    return console.log('CHARMANDER USA BRASAS');
            }
            break;
        case 2:
            switch (a) {
                case 'Wartortle':
                    return console.log("WARTORTLE USA PISTOLA D'ÀGUA");
                case 'Ivysaur':
                    return console.log('IVYSAUR USA RAIO SOLAR');
                case 'Charmeleon':
                    return console.log('CHARMELEON USA LANÇA CHAMAS');
            }
            break;
        case 3:
            switch (a) {
                case 'Blastoise':
                    return console.log('BLASTOISE USA BOMBA HIDRÁULICA');
                case 'Venusaur':
                    return console.log('VENUSAUR USA TEMPESTADE DE PETALAS');
                case 'Charizard':
                    return console.log('CHARIZARD USA SUPERAQUECER');
            }
            break;    
    }
};
// Função para continuidade do jogo
function Jornada(came) {
    caminhada = came;
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
        caminho.viagem(caminhada);
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
// Função de combate
function luta() {
    luta: for (let i = 0; i <= vidaDoAlea || i < status.vidaDoPokemon; i++) {
        vaz = prompt('');
        console.log(`-----TURNO: ${i + 1}------`);
        if (status.vidaDoPokemon <= 0) {
            console.log(status.pokemon.toUpperCase(), 'MORREU');
            console.log('VOCÊ APARECE NA POKESTOP MAIS PRÓXIMA...');
            status.gethp(status.maxHp);
            if (status.xp > 0) {
                status.azar(0, 0, 1);
            }
            status.bio();
            Jornada();
            break luta;
        }
        ataque(status.pokemon);
        att = (Math.trunc(Math.random() * 10) + 5) * status.Level;
        att *= status.evolution;
        if (att == (15 * status.Level) * status.evolution) {
            console.log('CRITICO!');
        }
        vidaDoAlea -= att;
        console.log(pokeAd.toUpperCase(), `TOMA ${att} DE DANO`);
        console.log('VIDA DO POKEMON INIMIGO:', adicionarZero(vidaDoAlea));
        vaz = prompt('enter...');
        if (vidaDoAlea <= 0) {
            console.log(pokeAd.toUpperCase(), 'MORREU');
            if (vidaDoAlea <= 0) {
                status.levelup();
            }
            break;
        }
        console.log(`O`, pokeAd.toUpperCase(), `ATACA SEU POKEMON`);
        vaz = prompt('enter...');
        status.vidaDoPokemon -= ataqueDele;
        console.clear();
        console.log('VIDA DO POKEMON INIMIGO:', adicionarZero(vidaDoAlea));
        console.log('VIDA DO SEU POKEMON:', adicionarZero(status.vidaDoPokemon));
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
// Função complementar para combates aleatorios
function mato() {
    if (varl == 1) {
        ataqueDele = 5;
        vidaDoAlea = 10;
    } else if (varl == 2) {
        ataqueDele = 5 * status.Level;
        vidaDoAlea = 10 * status.Level;
    }
    pokeAd = poke[Math.trunc(Math.random() * 5)];
    let mato = prompt('*VOCÊ ESTÁ ANDANDO NO MATO*');
    console.log(`--------APARECE UM`, pokeAd.toUpperCase(), `-------`);
    console.log(`*VOCÊ INVOCA SEU`, status.pokemon.toUpperCase(), `*`);
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
// Função de validação para a função anterior
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
// Declaração para objetos
let relogio;
let status;
let caminho;
//Começo do jogo
jogo: do {
    //Mensagem para caso você tenha recomeçado o jogo
    if (
        recomeço.toLowerCase() == 's' ||
        recomeço.toLowerCase() == 'ss' ||
        recomeço.toLowerCase() == 'sim'
    ) {
        console.log(
            'DICA DA IULIA :3 => VOCÊ DEVE COMPLETAR OS DESAFIOS PRINCIPAIS PASSADOS',
        );
        console.log(
            'PELOS NPC PARA PODER DERROTAR GIOVANNI, ELE É MUITO FORTE!!',
        );
    }
    // Criação de Objetos
    status = {
        nome: prompt('Qual o nome do seu Personagem? '),
        Level: 1,
        maxHp: 10,
        vidaDoPokemon: 10,
        ienes: 100,
        pokemon: '',
        xp: 0,
        missão: '',
        evolution: 1,
        evolução: function (a = 0) {
            this.evolution += a;
            if (this.evolution == 2) {
                if (this.pokemon == pokeInicial[0]) {
                    vaz = prompt('SEU BULBASAUR EVOLUI PARA...');
                    this.pokemon = 'Ivysaur';
                }
                if (this.pokemon == pokeInicial[1]) {
                    vaz = prompt('SEU CHARMANDER EVOLUI PARA...');
                    this.pokemon = 'Charmeleon';
                }
                if (this.pokemon == pokeInicial[2]) {
                    vaz = prompt('SEU SQUIRTLE EVOLUI PARA...');
                    this.pokemon = 'Wartortle';
                }
            }
            if (this.evolution == 3) {
                if (this.pokemon == 'Ivysaur') {
                    vaz = prompt('SEU IVYSAUR EVOLUI PARA...');
                    this.pokemon = 'Venusaur';
                }
                if (this.pokemon == 'Charmeleon') {
                    vaz = prompt('SEU CHARMELEON EVOLUI PARA...');
                    this.pokemon = 'Charizard';
                }
                if (this.pokemon == 'Wartortle') {
                    vaz = prompt('SEU SQUIRTLE EVOLUI PARA...');
                    this.pokemon = 'Blastoise';
                }
            }
            console.log(this.pokemon.toUpperCase());
        },
        bio: function () {
            console.log(`----------------STATUS--------------------`);
            console.log(`A VIDA DO POKEMON É: ${adicionarZero(this.vidaDoPokemon)}`);
            console.log(`SEU LEVEL É: ${adicionarZero(this.Level)}`);
            console.log(`VOCÊ TEM: ${this.ienes} IENES`);
            console.log(`SEU XP É: ${adicionarZero(this.xp)}`);
            console.log(`------------------------------------------`);
        },
        azar: function (vida, dinheiro, xp) {
            this.vidaDoPokemon -= vida * this.Level;
            this.ienes -= dinheiro * this.Level;
            if (this.xp > 0) {
                this.xp -= xp;
            }
        },
        gethp: function (variavelHp) {
            for (
                variavelHp;
                status.vidaDoPokemon < variavelHp;
                status.vidaDoPokemon++
            ) {
                console.clear();
                console.log(`VIDA DO POKEMON: ${adicionarZero(status.vidaDoPokemon + 1)}`);
            }
            return status.vidaDoPokemon;
        },
        levelup: function (xp = 1, ienes = 10) {
            this.xp += xp;
            this.ienes += ienes;
            if (this.xp == 3 * this.Level) {
                this.Level++;
                this.xp = 0;
                this.maxHp *= this.Level * this.evolution;
            }
        },
    };
    caminho = {
        x: 5,
        Viridian: 1000,
        morte: function (a) {
            this.Viridian + a;
            this.x - a;
        },
        viagem: function (viagem) {
            trajeto = this.Viridian - viagem;
            if (this.Viridian > 200) {
                for (this.x; this.Viridian > trajeto; this.Viridian--) {
                    this.x++;
                    console.clear();
                    console.log('VIAJANDO.....');
                    console.log('TRAJETO:', this.Viridian);
                    console.log('POSIÇÃO:', this.x);
                }
                console.log('E 3 HORAS SE PASSARAM...');
                relogio.tempo(3);
                relogio.reloginho();
            }
            if (this.Viridian < 200) {
                console.log('VOCÊ CHEGOU EM VIRIDIAN!!!');
            }
        },
    };
    relogio = {
        Hora: 6,
        Dia: 1,
        tempo: function (numero) {
            this.Hora += numero;
            if (this.Hora > 23) {
                let vari = this.Hora - 24;
                this.Hora = 0;
                this.Hora += vari;
                this.Dia++;
            }
            return this.Hora, this.Dia;
        },
        reloginho: function () {
            if (this.Hora > 4 && this.Hora < 12) {
                vaz = prompt('ESTÁ DE MANHÃ!!');
            } else if (this.Hora > 11 && this.Hora < 18) {
                vaz = prompt('ESTÁ DE TARDE!!');
            } else if (this.Hora > 17 && this.Hora <= 23) {
                vaz = prompt('ESTÁ DE NOITE!!');
            } else {
                vaz = prompt('ESTÁ DE MADRUGADA!!');
            }
            console.log(`------------------------`);
            console.log(`Dia:${adicionarZero(this.Dia)}`);
            console.log(`Hora:${adicionarZero(this.Hora)}hrs`);
            console.log(`------------------------`);
        },
    };
    let vaz = prompt('....');
    console.clear();
    console.log(
        'PROF. CARVALHO: OLÁ',
        status.nome.toUpperCase(),
        'SEJA BEM VINDO...........',
    );
    console.log('PROF.CARVALHO: QUER ESCOLHER SEU POKEMON INICIAL?');
    vaz = prompt('ESCOLHA....');
    console.clear();
    console.log(`---------Pokemon Inicial-----------`);
    console.log(`1 - ${pokeInicial[0]}`);
    console.log(`2 - ${pokeInicial[1]}`);
    console.log(`3 - ${pokeInicial[2]}`);
    console.log();
    console.log('ESCOLHA UM NÚMERO!!');
    alvo = +prompt('RESPOSTA: ');
    validade(alvo);
    status.pokemon = pokeInicial[alvo - 1];
    console.clear();
    console.log(`VOCÊ ESCOLHEU UM ${status.pokemon.toUpperCase()}`);
    vaz = prompt('.....');
    console.clear();
    console.log(`VOCÊ ESTÁ NUMA CIDADEZINHA CHAMADA PALLET EM KANTO, VOCÊ ESCOLHEU SEU PRIMEIRO POKEMON
COM O PROF. CARVALHO E SEU OBJETIVO É LUTAR CONTRA POKEMONS QUE ESPREITAM NO MATO, CONTRA TREINADORES
ADVERSÁRIOS COMO VOCÊ E DERROTAR O CAMPEÃO DA LIGA POKEMON`);
    console.log();
    console.log('VOCÊ QUER COMEÇAR ESSA JORNADA?');
    console.log();
    console.log('1 - SIM');
    console.log('2 - NÃO');
    console.log();
    console.log('ESCOLHA UM NÚMERO!!');
    let pergunta = +prompt('RESPOSTA: ');
    let comidaViajante;
    let princess;
    if (pergunta != 1) {
        break;
    }
    console.log('PROF. CARVALHO: EVOLUA O MÁXIMO POSSÍVEL TREINADOR');
    console.log('OS DESAFIOS A FRENTE SÃO INIMAGINAVELMENTE DIFICEIS');
    console.log('DECIDA SUAS ESCOLHAS COM CAUTELA....');
    vaz = prompt();
    console.clear();
    console.log(
        '*VOCÊ ESTÁ INDO EM DIREÇÃO A PRÓXIMA CIDADE E CONSEGUE VER UM POKESTOP*',
    );
    Jornada(200);
    vaz = prompt('Enter....');
    console.clear();
    while (jornada == 2) {
        Jornada(200);
    }
    varl = 1;
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
    princess = +prompt('RESPOSTA:');
    validade(princess);
    if (princess == 3) {
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
        if (status.ienes <= 0) {
            console.log('PARECE QUE VOCÊ FICOU SEM DINHEIRO E MORREU DE FOME');
            continue jogo;
        }
        relogio.tempo(1);
        relogio.reloginho();
        vaz = prompt();
    }
    status.gethp(10);
    RESPOSTA.push(princess);
    // Primeiro desafio do Clefable
    Clefable: while (princess == 1) {
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
        let missao = +prompt('RESPOSTA:');
        validade(missao);
        if (missao == 2) {
            while (vidaDoAlea > 0) {
                status.gethp(status.maxHp);
                console.log('VOCÊ TERÁ QUE ME VENCER CONTRA MIN PRA PASSAR');
                varl = 3;
                pokeAleatorio('Camerupt', 15, 3);
                luta();
                if (vidaDoAlea != 0) {
                    status.azar(0, 5, 1);
                    if (status.ienes <= 0) {
                        console.log(
                            'PARECE QUE VOCÊ FICOU SEM DINHEIRO E MORREU DE FOME',
                        );
                        continue jogo;
                    }
                    vaz = prompt(status);
                }
                console.clear();
            }
        }
        if (missao == 3) {
            let furtividade = 0;
            let dado_furtivo;
            vaz = prompt('Stealth Event!!!');
            for (let i = 1; i <= 3; i++) {
                for (let i = 0; i < 500; i++) {
                    console.clear();
                    console.log('-------------------------------------');
                    dado_furtivo = Math.round(Math.random() * 20) + 3;
                    console.log(`ROLAGEM DE FURTIVIDADE: ${dado_furtivo}`);
                    console.log('-------------------------------------');
                }
                vaz = prompt();
                if (dado_furtivo >= 9) {
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
                if (vidaDoAlea > 0) {
                    caminho.morte(150);
                    status.azar(0, 10, 1);
                    if (status.ienes <= 0) {
                        console.log(
                            'PARECE QUE VOCÊ FICOU SEM DINHEIRO E MORREU DE FOME',
                        );
                        continue jogo;
                    }
                    vaz = prompt(
                        'VOCÊ ACABOU SENDO DERROTADO PELO ONIX E REINICIARÁ A MISSÃO',
                    );
                    continue Clefable;
                }
            }
        }
        if (missao == 1) {
            varl = 2;
            for (let i = 0; i < 3; i++) {
                mato();
            }
        }
        console.log(
            '*DURANTE SUA CAMINHADA UM POKEMON PULO DO MATO E TE ATACA*',
        );
        varl = 1;
        mato();
        console.log(
            `APÓS UM TEMPO ANDANDO E DEPOIS DE LUTAR CONTRA POKEMONS VOCÊ ENCONTRA UMA MULHER!!`,
        );
        console.log(`*ELA TE DA UMA FRUTA E SAI CORRENDO*`);
        vaz = prompt(`*VOCÊ DECIDE COMER ESSA FRUTA QUE PARECE DELICIOSA*`);
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
        console.log(
            '3 ZUBATS VÃO EM TUA DIREÇÃO E VOCÊ TEM QUE LUTAR CONTRA ELES',
        );
        for (let i = 1; i <= 3; i++) {
            varl = 3;
            pokeAleatorio('ZUBAT', 25, 5);
            luta();
        }
        if (vidaDoAlea <= 0) {
            console.log('*VOCÊ CONSEGUE DERROTAR OS 3 ZUBATS*');
            vaz = prompt();
            console.clear();
            console.log(
                '*O CLEFABLE VEM EM SUA DIREÇÃO E VOCÊ CONSEGUE COMPLETAR A MISSÃO',
            );
            console.log(
                'VOCÊ VOLTA PARA A TREINADORA POKEMON E ENTREGA O CLEFABLE PRA ELA',
            );
            console.log(
                'PRINCESS JOANA: MUTIO OBRIGADA POR ME AJUDAR A ENCONTRAR MEU POKEMON!!!',
            );
            console.log('*ELA TE DA UMA RECOMPENSA*');
            status.levelup(3, 50);
            status.missão = '';
            status.bio();
            relogio.tempo(1);
            console.log('VOCÊ CONTINUA SUA JORNADA');
            status.evolução(1);
            vaz = prompt();
            break Clefable;
        }
    }
    if (princess == 2) {
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
    console.clear();
    relogio.reloginho();
    console.log(`*UM CAÇADOR COM UMA ARMA TE ACOLHE ELE DIZ SEU NOME*`);
    console.log(
        `VELHO DIAN: O QUE ESTÁ FAZENDO POR AQUI? EXISTEM MUITOS POKEMONS`,
    );
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
    let caçador = +prompt('RESPOSTA: ');
    RESPOSTA.push(caçador);
    if (caçador == 2) {
        console.log('ENTÃO IRÁ LUTAR CONTRA MIN!');
        pokeAleatorio('GRAVELER', 30, 5);
        varl = 0;
        luta();
        status.levelup(1, 0);
        if (vidaDoAlea > 0) {
            caminho.morte(150);
            status.azar(0, 10, 1);
            if (status.ienes <= 0) {
                console.log(
                    'PARECE QUE VOCÊ FICOU SEM DINHEIRO E MORREU DE FOME',
                );
                continue jogo;
            }
            status.bio();
        }
    }
    if (caçador != 2) {
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
        varl = 1;
        mato();
        console.clear();
    }
    status.bio();
    console.log(`CAMINHO PARA VIRIDIAN FALTA ${caminho.Viridian}KM`);
    vaz = prompt(
        'APOS ISSO VOCÊ CHEGA NA ESTRADA NOVAMENTE E DEVE CONTINUAR SUA JORNADA',
    );
    Jornada(300);
    console.log('VOCÊ CHEGA A UMA VILA QUE PARECE NÃO SER BEM DESENVOLVIDA');
    console.log('*VOCÊ CONSEGUE VER QUE HÁ UMA PESSOA PEDINDO POR ÁGUA*');
    console.log(
        '*COMEÇA UMA COMOÇÃO E PARECEM ESTAR FALANDO SOBRE UM PROBLEMA DE SEDE*',
    );
    console.log('O QUE DESEJA FAZER?');
    console.log();
    console.log('1 - CONVERSAR COM OS HABITANTES');
    console.log('2 - IGNORAR O QUE ESTÁ ACONTECENDO E IR EMBORA...');
    console.log('3 - CHEGAR MAIS PERTO PARA OUVIR O QUE ESTÃO DIZENDO');
    console.log();
    let vila = +prompt('RESPOSTA: ');
    validade(vila);
    if (vila == 2) {
        console.log('*UM POKEMON PASSA CORRENDO E MACHUCA VOCÊ E SEU POKEMON*');
        status.azar(5, 50, 1);
        if (status.ienes <= 0) {
            console.log('PARECE QUE VOCÊ FICOU SEM DINHEIRO E MORREU DE FOME');
            continue jogo;
        }
        status.bio();
    }
    // Segundo desafio contra o snorlax
    vilar: while (vila == 1 || vila == 3) {
        console.log('*ALGUÉM QUE PARECE O CHEFE DA VIDA FALA*');
        console.log('DEPOIS DAQUELE PROBLEMA COM AQUELE POKEMON....');
        if (vila == 1) {
            console.log(`${status.nome.toUpperCase()}: COM LICENÇA...`);
            vaz = prompt(`O QUE EXATAMENTE ESTÁ ACONTECENDO`);
            console.log('CHEFE DA VILA: OLÁ FORASTEIRO!!');
        }
        console.log('UM SNORLAX GIGANTE ESTÁ TAMPANDO');
        console.log('A PORRA DO RIO QUE TA IMPOSSIBILITANDO');
        console.log('A VILA DE TER AGUA!!');
        console.log('VOCÊ É UM TREINADOR POKEMON?');
        console.log();
        console.log('1 - "SIM"');
        console.log('2... - "NÃO" *MENTIR*');
        console.log();
        let vila2 = prompt('RESPOSTA: ');
        if (vila2 != 1) {
            console.log(
                `${status.nome.toUpperCase()}: NÃO, EU NÃO SOU UM TREINADOR POKEMON`,
            );
            console.log('CHEFE: ENTÃO NÃO ATRAPALHE!!!');
            status.azar(0, 15, 0);
            if (status.ienes <= 0) {
                console.log(
                    'PARECE QUE VOCÊ FICOU SEM DINHEIRO E MORREU DE FOME',
                );
                continue jogo;
            }
            status.bio();
            break vilar;
        }
        console.log(
            `${status.nome.toUpperCase()}: SIM, EU SOU UM TREINADOR POKEMON!!`,
        );
        console.log('CHEFE: AHH, SEJA BEM VINDO QUERIDO TREINADOR POKEMON');
        console.log('PODE VIR DESCANSAR');
        status.gethp(status.maxHp);
        vaz = prompt(
            '*ELE TE COLOCA PRA DESCANSAR EM UMA CASA E TE DA COMIDA*',
        );
        console.clear();
        console.log('CHEFE: COMO SABE... TEM UM SNORLAX TAMPANDO UM RIO');
        console.log(
            'ENTÃO NÃO TEMOS ÀGUA E PRECISAMOS DE ALGUÉM PRA TIRAR ELE DE LÁ',
        );
        console.log('JA TENTAMOS O MÁXIMO TIRAR ELE DE LÁ MAS NÃO CONSEGUIMOS');
        console.log('VOCÊ SERIA CAPAZ E PODERIA TIRAR ELE DE LÁ PARA NÓS?');
        console.log('PODEMOS TE RECOMPENSAR....');
        console.log();
        console.log('1 - "SIM"');
        console.log('2... - "NÃO"');
        console.log();
        let chefeVila = +prompt('RESPOSTA: ');
        Snorlax: if (chefeVila == 1) {
            console.log(`${status.nome.toUpperCase()}: SIM, EU POSSO AJUDAR!!`);
            status.missão = 'TIRAR O SNORLAX DO CAMINHO!';
            console.log('MISSÃO DEFINIDA:', status.missão);
            console.log();
            vaz = prompt('COMEÇAR!');
            console.clear();
            console.log(
                'CHEFE: INCRIVEL!! FICO MUITO ALEGRE QUE PODE NOS AJUDAR',
            );
            console.log('O SNORLAX FICA SUBINDO A MONTANHA, SEGUINDO O RIO...');
            console.log('POR FAVOR VÁ RAPIDO ESTAMOS SEM AGUA A DIAS');
            console.log('TEVE MORADORES QUE MORRERAM DE SEDE....');
            console.log();
            vaz = prompt(`${status.nome.toUpperCase()}: OK, IREI AGORA`);
            console.clear();
        } else {
            console.log('CHEFE: QUE PENA... ENTÃO PODE IR EMBORA');
            console.log('CONTINUAR SUA JORNADA....');
            break vilar;
        }
        console.log('VOCÊ ESTÁ SUBINDO A MONTANHA PORÉM NÃO ENCONTRA O RIO');
        console.log('VOCÊ PROCURA PELO RIO E PROCURA.... MAS NÃO ENCONTRA...');
        console.log('VOCÊ ENCONTRA UM PESSOA ANDANDO QUE PARECE UM VIAJANTE..');
        console.log('VOCÊ DESEJA PERGUNTAR A ESSE VIAJANTE ONDE FICA O RIO?');
        console.log();
        console.log('1 - "SIM"');
        console.log('2... - "NÃO"');
        console.log();
        let viajante = +prompt('RESPOSTA: ');
        if (viajante == 1) {
            console.log(
                'VOCÊ VAI EM DIREÇÃO AO VIAJANTE E PERCEBE QUE É UMA MULHER',
            );
            console.log('DIANA: AH OLÁ, O QUE FAZ POR AQUI?');
            console.log('DIANA: AH.. ESTÁ PROCURANDO O RIO, EU TAMBÉM');
            console.log(
                'DIANA: PRECISO DAR COMIDA PRO MEU POKEMON ANTES QUE ELE DESMAIE',
            );
            console.log(
                'DIANA: VOCÊ TEM COMIDA? SE SIM PODERIA ME DAR UM POUCO?',
            );
            console.log();
            console.log('1 - SIM');
            console.log('2..-NÃO');
            console.log();
            console.log(
                'NOTA:CASO DIGA SIM SEU DINHEIRO IRÁ SER EXTRAIDO DO SEU STATUS',
            );
            comidaViajante = +prompt('RESPOSTA: ');
            console.clear();
            if (comidaViajante == 1) {
                console.log(
                    status.nome.toUpperCase() + ': EU TENHO SIM, PEGUE....',
                );
                console.log(
                    'DIANA: MUITO OBRIGADA POR COMPARTILHAR COMIDA COMIGO!',
                );
                console.log('DIANA: IREI TE RECOMPENSAR POR ISSO');
                console.log('*ELA TE DA UM DOCE ESQUISITO*');
                console.log('DIANA: DÊ ISSO PARA O SEU POKEMON');
                console.log(
                    `*APESAR DE PERDER ${
                        status.ienes - 12 * status.Level
                    } DE IENES VOCÊ GANHOU 3 DE XP*`,
                );
                status.azar(0, 12, 0);
                if (status.ienes <= 0) {
                    console.log(
                        'PARECE QUE VOCÊ FICOU SEM DINHEIRO E MORREU DE FOME',
                    );
                    continue jogo;
                }
                status.levelup(3, 0);
                status.bio();
                console.log('DIANA: AH... ESTOU CHEIA... ANALISANDO');
                console.log(
                    'DIANA: ACHO QUE CHEGAREMOS NO RIO SEGUINDO EM FRENTE',
                );
                console.log(
                    'DIANA: ACABEI DE PERCEBER QUE É NESSA DIREÇÃO QUE O AR CORRE',
                );
                vaz = prompt('DIANA: VAMOS!!!');
                console.clear();
                console.log('*VOCÊ SEGUE DIANA*');
            } else {
                console.log(
                    status.nome.toUpperCase() + ': DESCULPE, NÃO TENHO....',
                );
                console.log(
                    'DIANA: AH... ENTENDO, ENTÃO VAMOS TER QUE ENCONTRAR O RIO MESMO',
                );
                console.log(
                    'DIANA: TALVEZ SE VIERMOS POR AQUI PELA DIREITA PODEMOS ENCONTRAR O RIO',
                );
                console.log('*VOCÊ SEGUE DIANA*');
            }
        } else {
            console.log(
                'VOCÊ IGNORA O VIAJANTE E CONTINUA PROCURANDO PELO RIO',
            );
            console.log('SE PASSA 1 HORA...');
            relogio.tempo(1);
            relogio.reloginho();
            console.log('ENQUANTO VOCÊ PROCURA O RIO');
            if (princess == 3) {
                console.log('VOCÊ VÊ ALGO QUE VOCÊ JA VIU');
                console.log('SEU RANCOR PELO ACONTECIMENTO ANTERIOR');
                console.log('NÃO TE PERMITE SAIR DE COMBATE');
                varl = 3;
            } else {
                varl = 1;
            }
            console.log('VOCÊ CONSEGUE VER UM URSARING VINDO EM SUA DIREÇÃO');
            console.log('VOCÊ ENTRA EM COMBATE!!');
            pokeAleatorio('URSARING', 100, 20);
            luta();
        }
        console.log('VOCÊ SEGUE PROCURANDO O RIO');
        if (comidaViajante != 1) {
            console.log('VOCÊ NÃO CONSEGUE ACHAR O RIO E ENCONTRA');
            console.log('UM BELLSPROUT QUE ENVENENA SEU POKEMON');
            console.log(
                'E VOCÊ TEM QUE GASTAR SEUS IENES PARA CURÁ-LO DO ENVENENAMENTO',
            );
            status.azar(3, 10, 0);
            if (status.ienes <= 0) {
                console.log(
                    'PARECE QUE VOCÊ FICOU SEM DINHEIRO E MORREU DE FOME',
                );
                continue jogo;
            }
            status.bio();
            vaz = prompt('VOCÊ LEVA MAIS 1 HORA PARA TENTAR ENCONTRAR O RIO');
            relogio.tempo(1);
            relogio.reloginho();
            vaz = prompt();
            console.clear();
        }
        console.log('APÓS 2 HORAS PROCURANDO O RIO VOCÊ O ENCONTRA');
        relogio.tempo(2);
        relogio.reloginho();
        console.log(
            '*DIANA VAI EMBORA APÓS ACHAR O RIO E CONSEGUIR SUAS FRUTAS*',
        );
        console.log('VOCÊ CONSEGUE VER O SNORLAX DEITADO NO MEIO DO RIO');
        console.log('O QUE QUER FAZER?');
        console.log('-------------------------------------------');
        console.log('1 - TENTAR TIRAR O SNORLAX A FORÇA');
        console.log('2 e 3 - TENTAR TIRAR O SNORLAX USANDO CARISMA');
        console.log('--------------------------------------------');
        console.log();
        let snorlax = +prompt('RESPOSTA: ');
        validade(snorlax);
        if (snorlax == 1) {
            console.log(
                'VOCÊ INVOCA SEU POKEMON E JOGA ELE PARA ATACAR O SNORLAX',
            );
            pokeAleatorio('SNORLAX', 400, 100);
            varl = 3;
            luta();
            if (vidaDoAlea > 0) {
                vaz = prompt(
                    'VOCÊ ACABOU SENDO DERROTADO PELO SNORLAX E REINICIARÁ A MISSÃO',
                );
                continue vilar;
            }
        }
        if (snorlax == 2) {
            console.log('VOCÊ TENTA CONVERSAR COM O SNORLAX E TIRAR ELE DE LÁ');
            vaz = prompt('CHARISMA EVENT!!');
            console.clear();
            let carisma = 0;
            for (let i = 1; i <= 3; i++) {
                for (let i = 0; i < 500; i++) {
                    console.clear();
                    console.log('-------------------------------------');
                    dado_furtivo = Math.round(Math.random() * 20) + 3;
                    console.log(`ROLAGEM DE CARISMA: ${dado_furtivo}`);
                    console.log('-------------------------------------');
                }
                vaz = prompt();
                if (dado_furtivo >= 9) {
                    ++carisma;
                    vaz = prompt(
                        `PARABÉNS VOCÊ PASSOU NO ${i}º TESTE FALTA ${3 - i}`,
                    );
                }
            }
            if (carisma >= 2) {
                console.log('PARABÉNS VOCÊ CONSEGUIU CONVENCER O SNORLAX!!');
                console.log('O SNORLAX VAI EMBORA SEM CAUSAR ALVOROÇO!!');
                console.log('-------------------------------------');
            }
            if (carisma < 2) {
                varl = 3;
                pokeAleatorio('SNORLAX', 400, 100);
                luta();
                if (vidaDoAlea > 0) {
                    caminho.morte(150);
                    status.azar(0, 15, 1);
                    if (status.ienes <= 0) {
                        console.log(
                            'PARECE QUE VOCÊ FICOU SEM DINHEIRO E MORREU DE FOME',
                        );
                        continue jogo;
                    }
                    continue vilar;
                }
            }
        }
        console.log('VOCÊ CONSEGUIU TIRAR O SNORLAX DO RIO');
        console.log('VOCÊ VOLTOU PARA A VILA, ELES AGRADECEM E TE RECOMPENSAM');
        console.log(
            'NÃO SÓ COM DESCANSO MAS TAMBÉM COM UMA BOTA PARA ACELERAR',
        );
        console.log('SUA JORNADA ATÉ VIRIDIAN');
        status.gethp(status.maxHp);
        status.levelup(4, 250);
        status.evolução(1);
        console.log('VOCÊ SEGUE EM FRENTE SUA JORNADA');
        break vilar;
    }
    Jornada(500);
    console.log('VOCÊ CONSEGUIU CHEGAR EM VIRIDIAN DEPOIS DE MUITO TEMPO');
    console.log('SUA JORNADA FOI DIFICIL COM VARIOS DESAFIOS, MAS AGORA');
    console.log('RESTA APENAS 1 DESAFIO... O LIDER DE GINÁSIO');
    console.log('VOCÊ DEVE SEGUIR EM FRENTE E LUTAR CONTRA O LIDER DE GINÁSIO');
    console.log('VOCÊ QUER TREINAR ANTES DE LUTAR CONTRA O LIDER DE GINÁSIO?');
    console.log();
    console.log('1 - SIM');
    console.log('2 - NÃO');
    do {
        console.log('ESCOLHA UM NÚMERO');
        liderDeGinásio = prompt('RESPOSTA');
    } while (!lider.test(liderDeGinásio));
    if (liderDeGinásio == 1) {
        console.log('VOCÊ ESCOLHE LUTAR CONTRA MONSTROS ESPECIAIS');
        console.log(
            'E ESSES MONSTROS ESTÃO EM UMA GRAMA MAIS ESCURA QUE O NORMAL',
        );
        console.log('ELES DÃO MAIS XP');
        console.log('DIGITE UM NÚMERO!!');
        let pergunta = +prompt('QUER LUTAR QUANTAS VEZES? ->');
        for (let i = 0; i <= pergunta; i++) {
            varl = 2;
            mato();
            status.levelup(2);
        }
    }
    if (
        status.pokemon == 'Venusaur' ||
        status.pokemon == 'Charizard' ||
        status.pokemon == 'Blastoise'
    ) {
        status.maxHp = 1500;
    }
    status.gethp(status.maxHp);
    vaz = prompt();
    console.clear();
    console.log('VOCÊ VAI EM DIREÇÃO AO LIDER DE GINÁSIO');
    console.log('GIOVANNI: OLÁ QUERIDO TREINADOR POKEMON...');
    console.log('GIOVANNI: VOCÊ IRÁ LUTAR CONTRA MIN ');
    pokeAleatorio('NIDOKING', 1000, 150);
    varl = 0;
    luta();
    if (vidaDoAlea > 0) {
        console.log('GIOVANNI: INFELIZMENTE VOCÊ NÃO PÔDE ME DERROTAR');
        console.log('GIOVANNI: TERÁS QUE RECOMEÇAR TREINADOR AHAHAHAHA');
        break;
    }
    recomeço = prompt('QUER RECOMEÇAR? ->');
} while (
    recomeço.toLowerCase() == 's' ||
    recomeço.toLowerCase() == 'ss' ||
    recomeço.toLowerCase() == 'sim'
);
console.log('------------------------------------------------------');
vaz = prompt('ESSE É O FINAL DO JOGO');
console.log('VOCÊ PODE TER DERROTADO OU NÃO O LIDER DE GINÁSIO');
console.log('ISSO É APENAS UMA DEMO CRIADA POR IULIA');
console.log('IULIA NO MOMENTO DE CRIAÇÃO DESSE JOGO TEM 18 ANOS');
console.log('ESPERE ANSIOSO POR UMA CONTINUAÇÃO :)');
console.log('IULIA FICA FELIZ QUE VOCÊ JOGOU ATÉ AQUI ^^');
console.log('------------------------------------------------------');
vaz = prompt('ADEUS....');
