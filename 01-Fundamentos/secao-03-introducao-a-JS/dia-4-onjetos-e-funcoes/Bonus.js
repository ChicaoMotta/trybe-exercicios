let roman = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000
}

let number = 0;

let teste = "MCDXLIV";

function numerals(string) {

    for (let i = 0; i < string.length; i += 1) {
        let placeholder = roman[string[i]];
        if (roman[string[i]] < roman[string[i + 1]] && i < string.length - 1) {
            placeholder = roman[string[i + 1]] - roman[string[i]];
            i += 1
        }

        number += placeholder;

        console.log(i + ": " + placeholder);
    }


    return number;
}

console.log(numerals(teste));