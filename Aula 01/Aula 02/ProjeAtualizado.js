console.clear();
var prompt = require("prompt-sync")();
var bravo = 0;
console.log(`---------------CADASTRO-----------`);
let nomeDoHeroi = prompt("Digite seu Nome de Usuário: ");
let senha = prompt("Digite sua Senha: ");
while (nomeDoHeroi.length <= 3 || senha.length <= 3) {
  console.clear();
  console.log(`---------------CADASTRO-----------`);
  console.log(`SUA SENHA E NOME DE USUÁRIO 
    DEVE TER MAIS DE 3 CARACTERES`);
  nomeDoHeroi = prompt("Digite seu Nome de Usuário: ");
  senha = prompt("Digite sua Senha: ");
}
console.clear();
console.log(`-----------------LOGIN-------------`);
let LoginNome = prompt("Digite o Nome de Usuário: ");
let LoginSenha = prompt("Digite a Senha: ");
while (LoginNome != nomeDoHeroi || LoginSenha != senha) {
  console.log(`-----------------LOGIN-------------`);
  console.log("ERRO NO LOGIN!!");
  console.log("SUA SENHA OU NOME DE USUÁRIO ESTÁ INCORRETO");
  let nada = +prompt("TENTE NOVAMENTE...");
  LoginNome = prompt("Digite o Nome de Usuário: ");
  LoginSenha = prompt("Digite a Senha: ");
}
console.log("LOGADO!!");
console.log();
let nada2 = prompt("ENTER...");
console.clear("");
console.log("-------------- Diálogo ------------");
console.log(`O mundo está em caos, os monstros do inferno atacam casas, vilas, cidades.
Apenas um herói pode combatê-los e completar as missões que 
a Bruxa dá para não apenas salvar o mundo
mas também recompensar o Herói por sua bravura. Para avaliar se o Herói cumpriu sua missão, 
a Bruxa perguntará`);
console.log("-------------- -------- ------------");
let espaço = prompt("Enter para continuar...");
console.clear();
console.log(`Contador de Bravura:`, bravo);
console.log("-------------- Diálogo ------------");
console.log(`Olá... Herói`, nomeDoHeroi,`
Meu nome é Iulia Minerva de Toth "A Bruxa". Prazer em conhecê-lo....
Na tormenta os orcs ficam loucos e buscam o saque
e satisfação com mulheres humanas... Na vila Bluema houve um ataque`);
console.log();
let perg1 = prompt("Diga-me, você salvou as mulheres? ");
if (
  perg1.toLowerCase() == "sim" ||
  perg1.toLowerCase() == "s" ||
  perg1.toLowerCase() == "ss"
) {
  console.clear();
  console.log(`Interessante Héroi ${nomeDoHeroi}...`);
  bravo = bravo + 1;
} else {
  console.log(`Compreendo...`);
}
espaço = prompt("Enter para continuar...");
console.clear();
console.log(`Contador de Bravura:`, bravo);
console.log("-------- E Fala a Bruxa-------------");
console.log(`A tormenta trouxe muita infelicidade aos moradores, camponeses e qualquer ser vivo... a Igreja 
Católica movimentou
tropas de Cavaleiros Sagrados atrás daqueles ao lado da Tormenta.
Você soube disso. Na capital 
existiam cartazes de procurados
de pessoas inocentes que a Igreja caça em nome de Deus, 
com o argumento de Bruxaria pela Tormenta.`);
console.log();
let perg2 = prompt("Diga-me, você os libertou das garras da Igreja? ");
if (
  perg2.toLowerCase() == "sim" ||
  perg2.toLowerCase() == "s" ||
  perg2.toLowerCase() == "ss"
) {
  console.log(`Obrigada por libertar meus irmãos e irmãs, Herói!!`);
  bravo = bravo + 1;
} else {
  console.log(`Oh... que infelicidade`);
}
espaço = prompt("Enter para continuar...");
console.clear();
console.log(`Contador de Bravura:`, bravo);
console.log(`Em Nova Tristram os mortos vivos tomam conta, as caçadas servem para limpar 
a infestação de mortos vivos 
e livrar as pessoas dessa desgraça...`);
let perg3 = prompt("Diga-me, você fez todas as caçadas? ");
if (
  perg3.toLowerCase() == "sim" ||
  perg3.toLowerCase() == "s" ||
  perg3.toLowerCase() == "ss"
) {
  console.clear();
  console.log(`Parabéns.... Você é forte Herói!!`);
  bravo = bravo + 1;
} else {
  console.log(`Muitos morreram então....`);
}
espaço = prompt("Enter para continuar...");
console.clear();
console.log(`Contador de Bravura:`, bravo);
console.log(`Nas fendas nefalem você prova sua bravura, sua força, sua agilidade e inteligência.
Com baús e monstros que derrubam armas você melhora seu equipamento com 
itens poderosos e lendários.`);
console.log();
let perg4 = prompt(
  "Você conseguiu melhorar seu equipamento com um item lendário? "
);
if (
  perg4.toLowerCase() == "sim" ||
  perg4.toLowerCase() == "s" ||
  perg4.toLowerCase() == "ss"
) {
  console.clear();
  console.log(`Um belo equipamento... Digno de um Herói!!`);
  bravo = bravo + 1;
} else {
  console.log(`Se tropeçar, vai se machucar.....`);
}
espaço = prompt("Enter para continuar...");
console.clear();
console.log(`Contador de Bravura:`, bravo);
console.log(`Ao finalizar a fenda nefalem, Urushi, um belo espírito lhe dará uma pedra de fortalecimento,
que atribuirá força em seus equipamentos e efeitos heróicos que te ajudara em sua jornada.`);
console.log();
let perg5 = prompt(
  "Você conseguiu reclamar a pedra lendária de fortalecimento? "
);
if (
  perg5.toLowerCase() == "sim" ||
  perg5.toLowerCase() == "s" ||
  perg5.toLowerCase() == "ss"
) {
  console.clear();
  console.log(`Hmmm interessante! Equipamentos fortalecidos!!`);
  bravo = bravo + 1;
} else {
  console.log(`Por isso está ferido.... u.u`);
}
espaço = prompt("Enter para continuar...");
console.clear();
console.log(`Contador de Bravura:`, bravo);

if (bravo == 5) {
  console.log("------------------------------");
  console.log(`Parábens Herói, você completou todos os desafios
    com bravura, porém....`);
  console.log("!!!Os inimigos do inferno ficam mais fortes!!!");
  console.log(`-------------SUPLICIO XIII----------`);
  console.log(`Kadala: Sua força deverá ser provada novamente contra
  DIABLO!!!!
    DEVES MATAR O BOSS FINAL!!!... E lembre-se...
    A SORTE FAVORECE OS BRAVOS!!`);
  console.log(`Contador de Bravura: `, bravo);
} else if (bravo == 4) {
  console.log("--------------------------------|||");
  console.log(`Minhas gratificações Herói.... Sua jornada acaba aqui, parece
    que você deixou escapar um detalhe em sua aventura, porém se tornou
    muito forte e reclamou sua recompensa....`);
  console.log(`--------KADALA TE PARABENIZA-------`);
  console.log(`Contador de Bravura: `, bravo);
} else if (bravo == 3) {
  console.log(`------------------------------------`);
  console.log(`Você se tornou extremamente forte!`);
  console.log(`Porém falhou em sua jornada por pouco......`);
  let espaço = prompt("Aperte enter....");
  console.clear();
  console.log(`Milhares de pessoas morreram por seu erro....`);
  console.log(`Mas será recompensado por suas conquistas....`);
  let espaço2 = prompt("Aperte enter...");
  console.clear();
  console.log(`*A BRUXA LHE DÁ A CHANCE DE MORREM SEM DOR*`);
  console.log(`----------VOCÊ RESPAWNA!!!----------`);
}
if (bravo == 2 || bravo == 1) {
  console.log(`---------------FINAL----------------`);
  console.log(`O Sr. Herói falhou em sua jornada...`);
  let espaço = prompt("Aperte enter...");
  console.clear();
  console.log("*MONSTROS BATEM NA PORTA!!*");
  console.log(`Porém... conseguiu alguma coisa e....
  como recompensa irei te salvar....`);
  let espaço2 = prompt("Aperte enter...");
  console.clear();
  console.log(`*MONSTROS DO INFERNO INVADEM A CASA DA BRUXA!!!`);
  console.log(`------VOCÊ É TELETRANSPORTADO--------`);
  console.log(`.....................................`);
}

if (bravo == 0) {
  console.log(`---------------FINAL----------------`);
  console.log(`Sua jornada foi dificil....`);
  let espaço = prompt("Aperte enter...");
  console.clear();
  console.log("*BATEM NA PORTA!!*");
  console.log(`Você falhou miseravelmente em sua jornada
  e os demônios do inferno vieram te matar....`);
  let espaço2 = prompt("Aperte enter...");
  console.clear();
  console.log(`---------------FINAL----------------`);
  console.log(`*A bruxa desaparece e uma estaca perfura seu peito*`);
  console.log(`-------------VOCÊ MORRE------------`);
}
console.log(`A resposta da Primeira pegunta foi:`, perg1);
console.log(`A resposta da Segunda pegunta foi:`, perg2);
console.log(`A resposta da Terceira pegunta foi:`, perg3);
console.log(`A resposta da Quarta pegunta foi:`, perg4);
console.log(`A resposta da Quinta pegunta foi:`, perg5);

