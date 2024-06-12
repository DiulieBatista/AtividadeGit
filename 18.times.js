const ler = require('readline-sync');


let time1 = ler.question("Informe o nome do time ")
let time2 = ler.question("Informe o nome do time ")


let gol1 = ler.questionFloat("Informe a quantidade de gols marcados ")
let gol2 = ler.questionFloat("Informe a quantidade de gols marcados ")

if (gol1 > gol2) {
     console.log (" venceu "+ time1)
} else if (gol2 > gol1){
    console.log (" venceu "+ time2)
}else{
    console.log (" empate ")
}