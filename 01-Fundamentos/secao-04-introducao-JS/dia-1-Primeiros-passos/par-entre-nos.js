const num1 = 4;
const num2 = 1;
const num3 = 3;
let bool = false;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    bool = true;
}
console.log("Numero par = " + bool);


bool = false;
if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
    bool = true;
}
console.log("Numero impar = " + bool);


const cost = 2.30;
const sold = 4.00;

if (cost < 0 || sold < 0) {
    console.log("Valor invalido");
} else {
    let totalCost = cost + (cost * .2);
    let profit = (sold - totalCost)

    console.log("Lucro de 1000 vendas = " + profit * 1000);
}

let bruto = 4000;
let corrigidoINSS;
let IR;
let liquido;

if (bruto < 0) {
    console.log("Valor de salario invalido.");
} else {
    if (bruto < 1556.94) {
        corrigidoINSS = bruto - (bruto * .8);
    } else if (bruto < 2594.93 && bruto >= 1556.94) {
        corrigidoINSS = bruto - (bruto * .9);
    } else if (bruto < 5189.83 && bruto >= 2594.93) {
        corrigidoINSS = bruto - (bruto * .11);
    } else {
        corrigidoINSS = bruto - 570.88;
    }

    if (corrigidoINSS < 1903.99) {
        IR = 0;
    } else if (corrigidoINSS < 2826.66 && corrigidoINSS >= 1903.99) {
        IR = (corrigidoINSS * .075) - 142.80;
    } else if (corrigidoINSS < 3751.06 && corrigidoINSS >= 2826.66) {
        IR = (corrigidoINSS * .15) - 354.80;
    } else if (corrigidoINSS < 4664.69 && corrigidoINSS >= 3751.06) {
        IR = (corrigidoINSS * .225) - 636.13;
    } else {
        IR = (corrigidoINSS * .275) - 869.36;
    }

    liquido = corrigidoINSS - IR;

    console.log("Salario liquido = " + liquido);
}