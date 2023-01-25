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

let vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

function arrayOfNumbers(vector) {
    let newArray = [];
    let evenArray = [];

    for (let key of vector) {
        newArray = key;

        for (let positon of newArray) {
            
            if(positon % 2 === 0){
                evenArray.push(positon);
            }
        }
    }

    return evenArray
}
 
console.log(arrayOfNumbers(vector));