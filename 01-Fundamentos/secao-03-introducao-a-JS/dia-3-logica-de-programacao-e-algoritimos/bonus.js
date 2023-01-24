let n = 5;

if (n > 0) {
    //     let square = '';
    //     console.log('\n Quadrado \n')

    //     for (let i = 0; i < n; i += 1) {
    //         square += '*'
    //     }

    //     for (let x = 0; x < n; x += 1) {
    //         console.log(square);
    //     }
    //     console.log('\n Triangulo Align Left\n')


    //     for (let i = 1; i <= n; i += 1) {
    //         let leftTriange = '';
    //         for (let x = 0; x < i; x += 1) {
    //             leftTriange += '*'
    //         }
    //         console.log(leftTriange)
    //     }

    //     console.log('\n Triangulo Align Right\n')

    //     let cont = n - 1;
    //     for (let i = 1; i <= n; i += 1) {
    //         let leftTriange = '';
    //         for (let x = 0; x < n; x += 1) {
    //             if (x < cont) {
    //                 leftTriange += ' '
    //             } else {
    //                 leftTriange += '*'
    //             }
    //         }
    //         console.log(leftTriange)
    //         cont -= 1;
    //     }


    console.log('\n Piramide \n')

    //Não consegui

    // let firstTime = true;
    // let middleOdd = (n / 2) + .5;
    // let up = middleOdd;
    // let down = middleOdd;
    // let pyramid = " ";



    // for (let i = 1; i <= n; i += 1) {

    //     if (firstTime) {
    //         for (let a = 1; a <= n; a += 1) {
    //             if (a === middleOdd) {
    //                 pyramid += '*';
    //             } else {
    //                 pyramid += ' ';
    //             }
    //         }
    //         firstTime = false;
    //         console.log(pyramid)
    //     }

    //     if (i % 2 !== 0) {
    //         up += 1;
    //         down -= 1;
    //         for (let a = 1; a <= n; a += 1) {
    //             if (a === up || a === down || a === middleOdd) {
    //                 pyramid += '*';
    //             } else {
    //                 pyramid += ' ';
    //             }
    //             console.log(pyramid)
    //         }
    //     }


    // }


    let n = 7;

    let symbol = '*';

    let inputLine = '';


    let midOfMatrix = (n + 1) / 2;

    let controlLeft = midOfMatrix;

    let controlRight = midOfMatrix;



    for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {

        for (let columnIndex = 1; columnIndex <= n; columnIndex += 1) {
            if (controlRight === n) {
                inputLine += symbol;
            } else if (columnIndex === controlLeft || columnIndex === controlRight) {

                inputLine = inputLine + symbol;

            } else {

                inputLine = inputLine + ' ';

            }

        }

        console.log(inputLine);

        inputLine = '';

        controlRight += 1;

        controlLeft -= 1

    };


}
else {
    console.log("Seu numero deve ser maior que zero!")
}