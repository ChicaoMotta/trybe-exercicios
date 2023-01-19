let n = 5;

if (n > 0) {
    let square = '';
    console.log('\n Quadrado \n')

    for (let i = 0; i < n; i += 1) {
        square += '*'
    }

    for (let x = 0; x < n; x += 1) {
        console.log(square);
    }
    console.log('\n Triangulo Align Left\n')


    for (let i = 1; i <= n; i += 1) {
        let leftTriange = '';
        for (let x = 0; x < i; x += 1) {
            leftTriange += '*'
        }
        console.log(leftTriange)
    }

    console.log('\n Triangulo Align Right\n')

    let cont = n - 1;
    for (let i = 1; i <= n; i += 1) {
        let leftTriange = '';
        for (let x = 0; x < n; x += 1) {
            if (x < cont) {
                leftTriange += ' '
            } else {
                leftTriange += '*'
            }
        }
        console.log(leftTriange)
        cont -= 1;
    }


    console.log('\n Piramide \n')


    for (let i = 1; i <= n; i += 1) {
        let pyramid = "";
        for (let x = 0; x < i; x += 1) {
            leftTriange += '*'
        }
        console.log(leftTriange)
    }


}
else {
    console.log("Seu numero deve ser maior que zero!")
}