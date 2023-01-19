let factorial = 1;
for(let i = 1; i <= 10 ; i +=1){
    factorial *=  i;
}

console.log(factorial);

let word  = 'tryber';
let reverse = "";

for(i= 1; i <= word.length; i +=1){
    reverse += (word[word.length-i]);
}
console.log(reverse)

let array = ['java', 'javascript', 'python', 'html', 'css'];
let menor = array[0];
let maior = array[0];

for(i=1; i < array.length; i+=1){
    if (menor.length > array[i].length){
        menor = array[i];
    }
}

console.log(menor)

for(i=1; i < array.length; i+=1){
    if (maior.length < array[i].length){
        maior = array[i];
    }
}

console.log(maior)


//asked for help
let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }

  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }

}

console.log(biggestPrimeNumber);