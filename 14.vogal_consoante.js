const ler = require('readline-sync');

let letra = ler.question("Digite uma letra: ").toLowerCase();

if (letra === 'a'|| letra === 'e' ||  letra === 'i' || letra === 'o' || letra === 'u') {
    console.log("A letra digitada foi uma vogal: " + letra);
} else {
    console.log("A letra digitada foi uma consoante: " + letra);
}
