const ler = require('readline-sync');

let nome = ler.question("Informe seu nome  ")
let vendas = ler.questionFloat("Informe a quantidade de produtos vendidos ")


 if (vendas >=450 ) {
    result  = vendas*10;
    console.log("O valor da comissão é: ", nome, ",",result  );


} else if (vendas >=200 ) {
    result = vendas* 7.50;
    console.log("O valor da comissão é: ", nome, ",",result  );
    

}else if (vendas < 200) {
    result  = vendas* 5.00;
    console.log("O valor da comissão é: ", nome, ",",result   );

} else {
    
}