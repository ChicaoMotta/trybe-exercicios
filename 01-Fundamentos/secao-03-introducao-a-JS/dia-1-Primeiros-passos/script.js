const a = 1;
const b = 2;
const c = 3;
const num = 4;
const ang1 = 60;
const ang2 = 60;
const ang3 = 60;
const peca = "rei";
let grade = 77;

console.log("\n Operadores \n")
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b + "\n");

console.log("\n if/else \n")

if (a > b) {
    console.log("a maior que b");
}
else {
    console.log("b maior que a");
}


if (a > b && a > c) {
    console.log("a maior que b & c");
}
else if (b > a && b > c) {
    console.log("b maior que a & c");
} else {
    console.log('c maior que a & b');
}

if (num > 0) {
    console.log("Numero positivo");
} else if (num < 0) {
    console.log("Numero positivo");
} else {
    console.log("Numero positivo");
}

if (ang1 + ang2 + ang3 !== 180 || ang1 <= 0 || ang2 <= 0 || ang3 <= 0) {
    bool = false;
    console.log("Triangulo = " + bool);
} else {
    bool = true;
    console.log("Triangulo = " + bool);
}

console.log("\n Switch case \n");

switch (peca.toLowerCase()) {
    case 'rei':
        console.log('Rei-> Uma casa apenas para qualquer direção.');
        break;

    case 'bispo':
        console.log('Bispo-> Diagonal.');
        break;

    case 'rainha':
        console.log('Rainha-> Diagonal, horizontal e vertical.');
        break;

    case 'cavalo':
        console.log('Cavalo -> "L" pode pular sobre as peças.');
        break;

    case 'torre':
        console.log('Torre -> Horizontal e vertical.');
        break;

    case 'peão':
        console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
        break;

    default:
        console.log('Erro, peça inválida!');
        break;
}

console.log('\n Percent \n');

if(grade >= 90 && grade < 101){
    grade = "A";
}else if (grade < 90 && grade >=80){
    grade = "B";
}else if (grade <80 && grade >=70){
    grade = "C";
}else if (grade <70 && grade >=60){
    grade = "D";
}else if (grade <60 && grade >=50){
    grade = "E";
}else if (grade <50 &&  grade >=0){
    grade = "F";
}else{
    grade = "invalida esolha um numero entre 0 - 100";
}

console.log("Nota : " +  grade);