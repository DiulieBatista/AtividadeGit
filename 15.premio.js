const ler = require('readline-sync');


let meta =1500.00;
let num = ler.questionFloat("Digite o valor da venda: ");

if (num >= meta) {
     console.log(" voce ganhou o premio ");
} else {
    console.log(" voce não  ganhou o premio ");
}