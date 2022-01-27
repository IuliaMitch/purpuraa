console.clear();
var prompt = require("prompt-sync")();
const APROVADOS = [];
const RECUPERACAO = [];
const REPROVADOS = [];
console.log(`-------------------
CALCULAREMOS SE OS ALUNOS SERÃO APROVADOS OU NÃO
DIGA QUANTOS ALUNOS QUER CALCULAR?
`);
let alunos = prompt("RESPOSTA: ");
for (let turn = 0; turn < alunos; turn++) {
  console.log(`DIGA A NOTA DO ${turn + 1}º ALUNO`);
  let notas = +prompt("RESPOSTA: ");
  if (notas >= 7) {
    APROVADOS.push(notas);
  }
  if (notas >= 5 && notas < 7) {
    RECUPERACAO.push(notas);
  } if(notas < 5) {
    REPROVADOS.push(notas);
  }
}
console.log(`-------------------------
${APROVADOS.length} Alunos foram aprovados
${RECUPERACAO.length} Alunos ficaram de recuperação
${REPROVADOS.length} Alunos foram reprovados
`);
console.log(`-------------------------
NOTAS DOS APROVADOS
${APROVADOS}
NOTAS DA RECUPERAÇÃO
${RECUPERACAO}
NOTAS DOS REPROVADOS
${REPROVADOS}
`);