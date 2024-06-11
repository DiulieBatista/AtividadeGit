// PAR E IMPAR 

const ler = require('readline-sync');


let num = ler.questionFloat("Digite um número: ");
let par;
let impar;

if (num % 2 == 0) { // identificar o numero par 
    par = num + 8;
   console.log("A soma dos números pares é " + par);
} else {
    impar = num + 10;
   console.log("A soma dos números ímpares é " + impar);
}
