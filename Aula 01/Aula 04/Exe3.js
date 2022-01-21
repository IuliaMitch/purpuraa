console.clear();
var prompt = require('prompt-sync')();
/*Caixa Eletrônico - Faça um Programa para um caixa eletrônico. 
O programa deverá perguntar ao usuário a valor do saque e depois informar quantas notas de cada valor serão fornecidas. As notas disponíveis serão as de 1, 5, 10, 50 e 100 reais. O valor mínimo é de 10 reais e o máximo de 600 reais. 
O programa não deve se preocupar com a quantidade de notas existentes na máquina.
Exemplo 1: Para sacar a quantia de 256 reais, o programa fornece duas notas de 100, uma nota de 50, uma nota de 5 e uma nota de 1.
Exemplo 2: Para sacar a quantia de 399 reais, o programa fornece três notas de 100, uma nota de 50, quatro notas de 10, uma nota de 5 e quatro notas de 1.
*/
let dinheiro = +prompt('Diga quanto você quer sacar: R$');
console.log('Existem notas de 1 real, 5 reais, 10 reais, 50 reais e 100 reais');
console.log("Você irá sacar: R$",dinheiro);
if (dinheiro >= 100) {
    var notasDe100 = parseInt(dinheiro / 100);
    var notas100 = dinheiro % 100;
    console.log(notasDe100, "notas de 100");
}
else if (dinheiro < 100){
    var notasDe100 = parseInt(dinheiro /100);
    var notas100 = dinheiro % 100; }
if (notas100 >= 50) {
    var notasDe50 = parseInt(notas100 / 50);
    var notas50 = notas100 % 50;
    console.log(notasDe50, "notas de 50");
} else if (notas100 < 100){
    var notasDe50 = parseInt(dinheiro /50);
    var notas50 = dinheiro % 50; }
 if (notas50 >= 10){
     var notasDe10 = parseInt(notas50 / 10);
    var notas10 = notas50 % 10;
    console.log(notasDe10, "notas de 10");}
    else if (notas50 < 10){
        var notasDe10 = parseInt(notas50 /10);
        var notas10 = notas50 % 10; 
    }

    if (notas10 >= 5 ) {
        var notasDe5 = parseInt(notas10 / 5);
        var notas5 = notas10 % 5;
        console.log(notasDe5, "notas de 5");
    }
    else if (notas10 < 5){
        var notasDe5 = parseInt(notas50 /5);
        var notas5 = notas10 % 5; }
    if (notas5 >= 1) {
        var notasDe1 = parseInt(notas5 / 1);
        var notas1 = notas5 % 1;
        console.log(notasDe1, "notas de 1");
    }
    console.log();
    
