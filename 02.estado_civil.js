// Sexo e Estado Civil

const ler = require('readline-sync');

let nome = ler.question("Digite seu nome: ").toLowerCase();
let sexo = ler.question("Digite seu sexo: ").toLowerCase();
let estado = ler.question("Digite seu estado civil: ").toLowerCase();

let result;

console.log(nome);
console.log(sexo);
console.log(estado);

if (estado === 'casada' && sexo === 'feminino') {
    result = ler.questionFloat("Digite o tempo de casada: ");
}

console.log(result);

