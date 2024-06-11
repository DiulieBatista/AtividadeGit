const ler = require('readline-sync');

let pagamento = ler.question("Informe a forma de pagamento: ").toLowerCase();
let produto = 50.00;

if (pagamento === "dinheiro") {
    produto = produto * 0.90;
    console.log("O valor do produto pago em dinheiro é: " + produto);
} else if (pagamento === "cheque") {
    produto = produto * 0.90;
    console.log("O valor do produto pago em cheque é: " + produto);
} else if (pagamento === "duasvezes") {
    produto = produto-(produto * 0.10);
    console.log("O valor do produto pago em duas vezes é: " + produto);
} else if (pagamento === "cartão de credito") {
    produto = produto * 0.15;
    console.log("O valor do produto pago em cartão credito a vista é: " + produto);

} else {
    console.log("Forma de pagamento inválida.");
}
