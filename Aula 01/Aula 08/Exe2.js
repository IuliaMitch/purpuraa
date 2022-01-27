let p = require("prompt-sync")();
console.clear();
console.log("FAREMOS O FATORIAL, ESCOLHA UM NÚMERO");
let FATORIAL = +p("RESPOSTA: ");
let resultado = 1;
var explicaFator = ''
  for (var x = 1; x <= FATORIAL; x++) {
    resultado = resultado * x;
    if(explicaFator != ''){
        explicaFator += 'x';
    }
    explicaFator += x;
    
}


console.log(FATORIAL+"! = "+explicaFator+" = "+resultado)

