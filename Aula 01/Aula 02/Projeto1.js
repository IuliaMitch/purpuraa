console.clear();
var prompt = require('prompt-sync')();
var bravo = 0
console.log(`Contador de Bravura: ${bravo}`);
console.log('-------------- Diálogo ------------');
console.log(`O mundo está em caos, os monstros do inferno atacam casas, vilas, cidades.
Apenas um herói pode combatê-los e completar as missões que 
a Bruxa dá para não apenas salvar o mundo
mas também recompensar o Herói por sua bravura. Para avaliar se o Herói cumpriu sua missão, 
a Bruxa perguntará`);
console.log('-------------- -------- ------------');
let espaço = prompt();
console.clear();
console.log(`Contador de Bravura: `,bravo);
let nomeDoHeroi = prompt ('Diga-me seu nome Herói: ');
console.clear();
console.log('-------------- Diálogo ------------');
console.log(`Olá... Herói ${nomeDoHeroi}
Meu nome é Iulia Minerva de Toth "A Bruxa". Prazer em conhecê-lo....
Na tormenta os orcs ficam loucos e buscam o saque
e satisfação com mulheres humanas... Na vila Bluema houve um ataque`);
let perg1 = prompt('Diga-me, você salvou as mulheres? ');
if (perg1.toLowerCase() == 'sim' || perg1 == 'Sim' || perg1 == 'SIM' || perg1 == 's' || perg1 == 'ss') 
{
    console.clear();
    console.log(`Interessante Héroi ${nomeDoHeroi}`); 
bravo = bravo + 1;}
else {console.log(`Compreendo...`);}
console.log(`Contador de Bravura: `,bravo);
console.log('-------- E Fala a Bruxa-------------')
console.log(`A tormenta trouxe muita infelicidade aos moradores, camponeses e qualquer ser vivo... a Igreja 
Católica movimentou
tropas de Cavaleiros Sagrados atrás daqueles ao lado da Tormenta.
Você soube disso. Na capital 
existiam cartazes de procurados
de pessoas inocentes que a Igreja caça em nome de Deus, 
com o argumento de Bruxaria pela Tormenta.`);
let perg2 = prompt('Diga-me, você os libertou das garras da Igreja? ');
if (perg2.toLowerCase() == 'sim' || perg2 == 'Sim' || perg2 == 'SIM' || perg2 == 's' || perg2 == 'ss') 
{
    console.clear();
    console.log(`Obrigada por libertar meus irmãos e irmãs, Herói!!`); 
bravo = bravo + 1;}
else {console.log(`Oh... que infelicidade`);}
console.log(`Contador de Bravura: `,bravo);
console.log(`Em Nova Tristram os mortos vivos tomam conta, as caçadas servem para limpar 
a infestação de mortos vivos 
e livrar as pessoas dessa desgraça...`);
let perg3 = prompt('Diga-me, você fez todas as caçadas? ');
if (perg3.toLowerCase() == 'sim' || perg3 == 'Sim' || perg3 == 'SIM' || perg3 == 's' || perg3 == 'ss') 
{
    console.clear();
    console.log(`Obrigada por libertar meus irmãos e irmãs, Herói!!`); 
bravo = bravo + 1;}
else {console.log(`Oh... que infelicidade`);}
console.log(`Contador de Bravura: `,bravo);
console.log(`Nas fendas nefalem você prova sua bravura, sua força, sua agilidade e inteligência.
Com baús e monstros que derrubam armas você melhora seu equipamento com 
itens poderosos e lendários.`);
let perg4 = prompt('Você conseguiu melhorar seu equipamento com um item lendário? ');
if (perg4.toLowerCase() == 'sim' || perg4 == 'Sim' || perg4 == 'SIM' || perg4 == 's' || perg4 == 'ss') 
{
    console.clear();
    console.log(`Obrigada por libertar meus irmãos e irmãs, Herói!!`); 
bravo = bravo + 1;}
else {console.log(`Oh... que infelicidade`);}
console.log(`Contador de Bravura: `,bravo);
console.log(`Ao finalizar a fenda nefalem, Urushi, um belo espírito lhe dará uma pedra de fortalecimento,
que atribuirá força em seus equipamentos e efeitos heróicos que te ajudara em sua jornada.`);
let perg5 = prompt('Você conseguiu reclamar a pedra lendária de fortalecimento? ');
if (perg5.toLowerCase() == 'sim' || perg5 == 'Sim' || perg5 == 'SIM' || perg5 == 's' || perg5 == 'ss') 
{
    console.clear();
    console.log(`Obrigada por libertar meus irmãos e irmãs, Herói!!`); 
bravo = bravo + 1;}
else {console.log(`Oh... que infelicidade`);}
console.log(`Contador de Bravura: `,bravo);

if (bravo == 5) {
    console.log('------------------------------');
    console.log(`Parábens Herói, você completou todos os desafios
    com bravura, porém....`);
    console.log('!!!Os inimigos do inferno ficam mais fortes!!!');
    console.log(`-------------SUPLICIO XIII----------`);
    console.log(`Kadala: Sua força deverá ser provada novamente
    agora você é mais forte que ninguém... Lembre-se
    A SORTE FAVORECE OS BRAVOS!!`);
    console.log(`Contador de Bravura: `,bravo);
}
else if (bravo == 4) {
    console.log('--------------------------------|||');
    console.log(`Minhas gratificações Herói.... Sua jornada acaba aqui, parece
    que você deixou escapar um detalhe em sua aventura, porém se tornou
    muito forte e reclamou sua recompensa....`);
    console.log(`--------KADALA TE PARABENIZA-------`);
    console.log(`Contador de Bravura: `,bravo);
}
else if (bravo == 3) {
    console.clear();
}
if (bravo == 2 || bravo == 1)
if (bravo == 0) {
    console.log(``)
}
console.log(`A primeira pergunta foi ${perg1}`);
console.log(`A segunda pergunta foi ${perg2}`);
console.log(`A terceira pergunta foi ${perg3}`);
console.log(`A quarta pergunta foi ${perg4}`);
console.log(`A quinta pergunta foi ${perg5}`);

