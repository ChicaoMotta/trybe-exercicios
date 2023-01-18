//Falar sobre esse codigo nao fazer o sort do jeito do video.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 1; index < numbers.length; index += 1) {

    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] < numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}

console.log(numbers)

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        if (numbers[index] > numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}

console.log(numbers);

let newNumbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for(let i=0; i<newNumbers.length;i+=1){
//     if(i === newNumbers.length-1){
//         newArray[i] = newNumbers[i]*2;
//         break;
//     }
//     newArray[i] = newNumbers[i] * newNumbers[i+1];
// }
//Esqueci de usar push.


for(let i=0; i<newNumbers.length;i+=1){
    let x = 0;
    if(i === newNumbers.length-1){
       x = newNumbers[i]*2;
       newArray.push(x);
        break;
    }
    x = newNumbers[i] * newNumbers[i+1];
    newArray.push(x);
}

console.log(newArray)