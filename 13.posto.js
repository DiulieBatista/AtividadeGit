const ler = require('readline-sync');

var alcool = 4.70;
var gasolina = 5.86;

console.log("- ÁLCOOL: R$ 4,70/LITRO");
console.log("- GASOLINA: R$ 5,86/LITRO");

let combustivel = ler.question("- Digite o tipo de combustível (A - Álcool, G - Gasolina): ");
let litro = ler.questionFloat("- Digite a Quantidade de Litros: ");

let preco;

if (combustivel === "A") {
    if (litro <= 25) {
        preco = (litro * alcool) * (2 / 100);
    } else {
        preco = (litro * alcool) * (4 / 100);
    }
} else if (combustivel === "G") {
    if (litro <= 25) {
        preco = (litro * gasolina) * (3 / 100);
    } else {
        preco = (litro * gasolina) * (5 / 100);
    }
}

preco = preco.toFixed(2);

console.log("Total a ser pago: R$ " + preco);
