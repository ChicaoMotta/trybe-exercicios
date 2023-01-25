// let roman = {
//     I: 1,
//     IV: 4,
//     V: 5,
//     IX: 9,
//     X: 10,
//     XL: 40,
//     L: 50,
//     XC: 90,
//     C: 100,
//     CD: 400,
//     D: 500,
//     CM: 900,
//     M: 1000
// }



// let teste = "MCDXLIV";

// function numerals(string) {

//     let number = 0;

//     for (let i = 0; i < string.length; i += 1) {
//         let placeholder = roman[string[i]];

//         if (roman[string[i]] < roman[string[i + 1]] && i < string.length - 1) {

//             placeholder = roman[string[i + 1]] - roman[string[i]];
//             i += 1;
//         }

//         number += placeholder;

//         console.log(i + ": " + placeholder);
//     }


//     return number;
// }

// console.log(numerals(teste));

// let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

// function arrayOfNumbers(vector) {
//     let newArray = [];
//     let evenArray = [];

//     for (let key of vector) {
//         newArray = key;

//         for (let positon of newArray) {

//             if(positon % 2 === 0){
//                 evenArray.push(positon);
//             }
//         }
//     }

//     return evenArray
// }

// console.log(arrayOfNumbers(vector));


const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
];