console.clear();
var prompt = require('prompt-sync')();
var l1 = +prompt('Digite um valor pro primeiro lado: ');
var l2 = +prompt('Digite um valor pro segundo lado: ');
var l3 = +prompt('Digite um valor pro terceiro lado: ');
if (l1 > l2 && l2 > l3) {
    var a = l1
    var b = l2
    var c = l3
    console.log('L1 é o maior lado', a, b, c);
}
else if (l2 > l1 && l1 > l3) {
    var a = l2 
    var b = l1
    var c = l3 
    console.log(`L2 é o maior lado`, a, b, c);}
else if (l3 > l2 && l2 > l1){
    var a = l3
    var b = l2
    var c = l1
    console.log('L3 é o maior lado',
    a, b, c);}
    else if (l3 > l1 && l1 > l2) {
        var a = l3
        var b = l1
        var c = l2
        console.log('L3 é o maior lado',
        a, b, c);}
    else if (l1 > l3 && l3 > l2) {
        var a = l1
        var b = l3
        var c = l2
        console.log('L1 é o maior lado',
        a, b, c);}
    else if (l2 > l3 && l3 > l1) {
        var a = l2
        var b = l3
        var c = l1
        console.log('L2 é o maior lado',
        a, b, c);}
    if (l1 > l2 && l2 == l3) {
        var a = l1
        var b = l2
        var c = l3
        console.log('L1 é o maior lado', a, b, c);}
    else if (l2 > l1 && l1 == l3) {
        var a = l2
        var b = l1
        var c = l3
        console.log('L2 é o maior lado', a, b, c); }
    else if (l3 > l2 && l2 == l1) {
        var a = l3
        var b = l2
        var c = l1
        console.log('L3 é o maior lado', a, b, c);}
    else if (l3 == l2 && l2 > l1) {
        var a = l3
        var b = l2
        var c = l1
        console.log('L3 é o maior lado', a, b, c);}
    else if (l1 == l2 && l2 > l3) {
        var a = l1
        var b = l2
        var c = l3
        console.log('L1 é o maior lado', a, b, c);}

        if (a >= (b+c)){
            console.log("Não forma um triangulo!");
        } 
        else {
        if ((a*a)==(b*b+c*c)){
            console.log("Triangulo retangulo!");
        } if ((a*a) > (b*b+c*c)){
            console.log("Triangulo obtusangulo!");
        } if ((a*a) < (b*b+c*c)){
            console.log("Triangulo acutangulo!");
        } if ((a == b) && (b == c)){
            console.log("Triangulo equilatero");
        } if ((a == b && a != c) || (b == c && b != a) ){
            console.log("Triangulo isosceles");
        } 
    }