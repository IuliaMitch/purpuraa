console.clear();
var prompt = require("prompt-sync")();
do {
  console.log(`EM SUMMUNERS'RIFT EXISTEM CAMPEÕES, LUTADORES QUE PROVAM SUA HABILDIADE
  LUTANDO CONTRA OUTROS CAMPEÕES.
  NESSE JOGO TEM UMA MODALIDADE CHAMADA X1
  EM QUE 1 CAMPEÃO SÓ LUTA CONTRA APENAS 1 CAMPEÃO
  DESSA VEZ TEMOS E ATIRADORES`);
  console.log('VOCÊ QUER JOGAR X1 DAS LENDAS?');
  let pergunta1 = prompt('RESPOSTA: ');
  if(pergunta1.toLowerCase() != 'sim' && pergunta1.toLowerCase() != 'ss' && pergunta1.toLowerCase() != 's'){
    break;
    
  }
  console.clear();
  console.log("-----------X1 DAS LENDAS-----------");
  let qnt = +prompt("Quantos turnos quer jogar: ");
  qnt++
  let vitorias = 0;
  let derrotas = 0;
  const X1 = ["Ezreal", "Ashe", "Kaisa"];
  let alvo;
  var regex = /[1-3]/
  for (var turno = 1; turno < qnt; turno++) {
    console.log(`VOCÊ TEM ${vitorias} VITORIAS`);
    console.log(`TURNO: ${turno}`);
    console.log(`
1-${X1[0]}
2-${X1[1]}
3-${X1[2]}
`);
    aleaNum = Math.floor(Math.random() * X1.length);
    selecionado = X1[aleaNum];
    alvo = +prompt("Escolha o número campeão: ");
    escolha = X1[alvo - 1];
    while(!regex.test(alvo)) {
      console.log("Você não escolheu um acima. Tente novamente...");
      console.log(`
1-${X1[0]}
2-${X1[1]}
3-${X1[2]}
  `);
      alvo = prompt("Escolha o número campeão: ");
      escolha = X1[alvo - 1];
    }
    console.log(`Você pickou ${escolha}`);
    if (escolha == X1[0] && selecionado == X1[1]) {
      vitorias++;
      console.log(`VOCÊ GANHOU A FASE DE ROTAS DO TURNO ${turno}`);
      console.log(`SEU ADVERSÁRIO ESCOLHEU ${X1[1]}`);
      let cont = prompt("ENTER PARA CONTINUAR...");
      console.clear;
      continue;
    }
    if (escolha == X1[1] && selecionado == X1[2]) {
      vitorias++;
      console.log(`VOCÊ GANHOU A FASE DE ROTAS DO TURNO ${turno}`);
      console.log(`SEU ADVERSÁRIO ESCOLHEU ${X1[2]}`);
      let cont = prompt("ENTER PARA CONTINUAR...");
      console.clear;
      continue;
    }
    if (escolha == X1[2] && selecionado == X1[0]) {
      vitorias++;
      console.log(`VOCÊ GANHOU A FASE DE ROTAS DO TURNO ${turno}`);
      console.log(`SEU ADVERSÁRIO ESCOLHEU ${X1[1]}`);
      let cont = prompt("ENTER PARA CONTINUAR...");
      console.clear;
      continue;
    } else if (escolha == selecionado) {
      console.log(`EMPATE NA FASE DE ROTAS DO TURNO ${turno}`);
      console.log(`VOCÊ E SEU ADVERSÁRIO ESCOLHERAM O MESMO CAMPEÃO`);
      let cont = prompt("ENTER PARA CONTINUAR...");
      console.clear;
      continue;
    } else {
      derrotas++;
      console.log(`DERROTA NA FASE DE ROTAS DO TURNO ${turno}`);
      console.log(`SEU ADVERSÁRIO ESCOLHEU ${selecionado}`);
      let cont = prompt("ENTER PARA CONTINUAR...");
      console.clear;
      continue;
    }
  }

  if (vitorias > derrotas) {
    console.log(`-----------PARABÉNS--------------`);
    console.log(`VOCÊ GANHOU O X1 DAS LENDAS`);
  } else if (vitorias < derrotas) {
    console.log(`----------INFELIZMENTE-----------`);
    console.log(`VOCÊ PERDEU O X1 DAS LENDAS....`);
  } else {
    console.log(`--------------EITA---------------`);
    console.log(`PARECE QUE EMPATOU O X1, XD`);
  }
  console.log(`TURNOS JOGADOS:${turno - 1}`);
  console.log(`QUANTIDADE DE VITORIAS: ${vitorias}`);
  console.log(`QUANTIDADE DE DERROTAS: ${derrotas}`);
  console.log("ACABOU A PARTIDA!!!");
  console.log(`-----------------------------------`);
  console.log("QUER CONTINUAR JOGANDO?");
  var pergunta = prompt("RESPOSTA: ");
  console.clear();
} while (
  pergunta.toLowerCase() == "sim" ||
  pergunta.toLowerCase() == "s" ||
  pergunta.toLowerCase() == "ss"
);
