const ler = require('readline-sync');

let homem1 = ler.questionFloat("Informe sua idade  ")
let homem2 = ler.questionFloat("imforme  sua idade ")
let mulher1 = ler.questionFloat("Informe sua idade  ")
let mulher2 = ler.questionFloat("imforme  sua idade ")
let soma1=0;
let soma2=0;

if (homem1>mlher1) {
    if (mulher1>mulher2) {
    soma1=homem1+mulher2;
    soma2= homem2+ mulher1;
    console.log( "a soma da idade do homem mais velho com a muler mais nova e: "+ soma1);
    console.log(" a soma da iade do hoomem mais novo com a mulher mais velha e :"+ soma2);
        
    } else {
        soma1=homem1+mulher1;
        soma2= homem2+ mulher2;
        console.log( "a soma da idade do homem mais velho com a muler mais nova e: "+ soma1);
        console.log(" a soma da iade do hoomem mais novo com a mulher mais velha e :"+ soma2); 
    }
    
}  else {
    if (mulher1>mulher2) {
        soma1=homem2+mulher2;
        soma2= homem1+ mulher1;
        console.log( "a soma da idade do homem mais velho com a muler mais nova e: "+ soma1);
        console.log(" a soma da iade do hoomem mais novo com a mulher mais velha e :"+ soma2);
            
        } else {
            soma1=homem2+mulher1;
            soma2= homem1+ mulher2;
            console.log( "a soma da idade do homem mais velho com a muler mais nova e: "+ soma1);
            console.log(" a soma da iade do hoomem mais novo com a mulher mais velha e :"+ soma2); 
}

}