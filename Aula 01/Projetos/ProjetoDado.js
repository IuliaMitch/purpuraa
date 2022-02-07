let p = require('prompt-sync')();
let qnt = +p('Quantas rodadas serão? ');
let qntP = +p('Quantos jogadores jogarão? ');
const Jogadores = [];
const jogo = () => {
    for (let i = 0; i < qntP; i++) {
        let jogador = {
            nome: p('Qual o nome do jogador: '),
            dado: 0,
            vitorias: 0,
        };
        Jogadores.push(jogador);
    }
    for (let i = 0; i < qnt; i++) {
        let dados = [];
        for (let i of Jogadores) {
            i.dado = Math.round(Math.random() * 5) + 1;
            dados.push(i.dado);
            dados.sort((a, b) => b - a);
        }
        for (let i of Jogadores) {
            if (i.dado == dados[0]) {
                ++i.vitorias;
                let vaz = p(`O VENCEDOR DESSE ROUND É ${i.nome.toUpperCase()}`);
                console.log(Jogadores);
                continue;
            }
        }
    }
};
const vitoria = () => {
    let vitori = [];
    for (let i of Jogadores) {
        vitori.push(i.vitorias);
    }
    vitori.sort((a, b) => b - a);
    for (let i of Jogadores) {
        if (i.vitorias == vitori[0]) {
            let vaz = p(
                `O JOGADOR COM MAIOR NÚMERO DE VITORIAS É ${i.nome.toUpperCase()}`,
            );
            break;
        }
    }
};
jogo();
vitoria();
console.log(Jogadores);
