const ler = require('readline-sync');


let num = ler.questionFloat("Digite um número: ");

if (num % 3 == 0) { // identificar o numero multiplo de tres 


   console.log('o numero ${num} multiplo de tres');
} else {
    
   console.log('o numero ${num} multiplo d três ');
}
