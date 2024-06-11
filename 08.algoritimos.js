const ler = require('readline-sync');


let num1 = ler.questionFloat("imforme um  numero  :");
let num2 = ler.questionFloat("imforme outro numero :");

soma=num1+num2;

if(soma > 20){
    soma =soma+ 8 ;
    console.log("A soma dos números + 20 " + soma );
} else if ( soma <=20 ) {
    soma =soma-5 ;
    console.log("A soma dos números - 5 " + soma );
    
} else {
    
}
