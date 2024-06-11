const ler = require('readline-sync');


let peso = ler.questionFloat("imforme o seu peso   :");
let altura = ler.questionFloat("imforme a sua altura :");
let IMC;


 IMC = peso /(altura*altura);
 IMC=IMC.toFixed(2);// para arrendodar as casas decimais 

if (IMC < 18.5) {

    console.log("o imc esta abaixo do peso  " + IMC );

 } else if (IMC >= 18,5 && IMC < 25 ){

    console.log("o imc esta com peso normal  " + IMC );  

 }else if (IMC >= 25 && IMC < 30) {

    console.log("o imc esta acima  do peso  " + IMC );

 } else {
    
    console.log("o imc esta obeso  " + IMC );  

 }
 

