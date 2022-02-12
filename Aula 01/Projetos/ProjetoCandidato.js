let p = require('prompt-sync')();
let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;
let VotoEmBranco = 0;
let VotoNulo = 0;
let resultado;
console.clear();
function autorizaVoto(anoDeNascimento){
    if(anoDeNascimento > 2006){
        return resultado = 'NEGADO'
    }
    if(anoDeNascimento <= 2006 && anoDeNascimento >= 2005){
        return resultado = 'OPCIONAL'
    }
    if(anoDeNascimento <= 2004){
        return resultado = 'OBRIGATÓRIO'
    }
}
function votacao(autorizacao, voto){
    if(autorizacao == 'OBRIGATÓRIO' || autorizacao == 'OPCIONAL'){
    if(voto = 1){
        candidato1++
    }
    if(voto = 2){
        candidato2++
    }
    if(voto = 3){
        candidato3++
    }
    if(voto = 4){
        VotoEmBranco++
    }
    if(voto = 5){
        VotoNulo++
    }
} if(autorizacao == 'NEGADO'){
    console.log('VOCÊ NÃO PODE VOTAR!!!');
}
}
function exibirResultado(){
    console.log(`O TOTAL DE VOTOS NO PRIMEIRO CANDIDATO FOI ${candidato1}`);
    console.log(`O TOTAL DE VOTOS NO SEGUNDO CANDIDATO FOI ${candidato2}`);
    console.log(`O TOTAL DE VOTOS NO TERCEIRO CANDIDATO FOI ${candidato3}`);
    console.log(`O TOTAL DE VOTOS EM BRANCO FOI ${VotoEmBranco}`);
    console.log(`O TOTAL DE VOTOS NULOS FOI ${VotoNulo}`);
}
let votagem;
let ano;
let pergunta = 'sim';
while(pergunta == 'sim'){
    console.log(`
    1 - CANDIDATO 1
    2 - CANDIDATO 2
    3 - CANDIDATO 3
    4 - VOTO EM BRANCO
    5 - VOTO NULO
    `)
    ano = +p('DIGA SEU ANO DE NASCIMENTO: ');
    autorizaVoto(ano);
    votagem = +p('DIGA SEU VOTO: ')
    console.log(resultado)
    votacao(resultado, votagem);
    pergunta = p('TEM MAIS ALGUM ELEITOR? ');
}
exibirResultado();