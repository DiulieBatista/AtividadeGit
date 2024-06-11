const ler = require('readline-sync');


let salario = ler.questionFloat("imforme o valor do seu salario bruto   :");
let parcelas = ler.questionFloat("imforme o numero de parcelas  :");
let result 

result = salario *0.25;

if(parcelas <= result ){

console.log( "o  emprestimo  pode ser consedido ");

} else{
    console.log( "o  emprestimo não pode ser consedido ");
}


