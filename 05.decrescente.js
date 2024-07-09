const ler = require('readline-sync');


let num1 = ler.questionInt("imforme um  numero  :");
let num2 = ler.questionInt("imforme outro numero :");
let num3 = ler.questionInt("imforme outro numero  :");


if (Number(num1)>Number(num2)) {

    if (Number(num2)>Number(num3)) {
        console.log("ordem decrecente: "+ num1+num2+num3);
    } else if (Number(num1)>Number(num3)){
        console.log("ordem decrecente"+num1+num3+num2);
    }else{
        console.log("ordem decrecente"+num3+num1+num2);
    }

} else if(Number(num2)>(Number(num1))) {
    console.log
}

