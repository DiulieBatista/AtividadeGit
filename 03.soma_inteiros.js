// Soma de Valores Inteiros 

const ler = require('readline-sync');

let A = ler.questionFloat("Digite um número :  ");
let B = ler.questionFloat("Digite outro número:");
let C;

if (A == B ) {
   C = A + B;
   console.log( "a soma de A+ B e:  " + C);

} else { 
    C = A * B;
    console.log( " a multiplicação de a+b e :" + C);

}
