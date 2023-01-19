let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
// let maior = 0; 
let maior = numbers[0];
let impar = 0;
//let menor = 100;
let menor = numbers[0];
for(let i=0;i < numbers.length; i+=1){
    console.log(numbers[i]);
    
    //Cannot access 'soma' before initialization at Object.<anonymous> 
    //let soma = soma + numbers[i];
    soma = soma + numbers[i];

    if(numbers[i] > maior){
        maior = numbers[i];
    }
    if(numbers[i] < menor){
        menor = numbers[i];
    }

    if(numbers[i] % 2 !== 0){
        impar +=1;
    }
}

console.log("Soma = " +soma);
console.log("Media = "+soma/numbers.length);

if(numbers[numbers.length -1] >20){
    console.log("valor maior que 20");
}else{
    console.log("valor menor ou igual a 20");
}

console.log('Maior numero = ' + maior);

if(impar === 0){
    console.log('nenhum valor ímpar encontrado');
}else{
    console.log(impar + ' valores impares no nosso array.');
}

console.log('Menor numero = ' + menor);

let newArray = [];

for(i=1; i < 26; i+=1){
    newArray[i] = i;
    console.log(newArray[i])
    console.log(i+'/2 = '+ (newArray[i]/2));
}