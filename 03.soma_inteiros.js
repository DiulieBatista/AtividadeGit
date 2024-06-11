// Soma de Valores Inteiros 


const ler = require('readline-sync');


let num1 = ler.questionFloat("imforme o numero A :");
let num2 = ler.questionFloat("imforme o numero B :");
let num3 = ler.questionFloat("imforme o numero C :");

soma = num1 + num2;

if (soma <= num3) {
    console.log("A soma de A+B e menor que C :  ");
    
} else {
    console.log (" A Soma de A+B é maior que C:  ");
}


