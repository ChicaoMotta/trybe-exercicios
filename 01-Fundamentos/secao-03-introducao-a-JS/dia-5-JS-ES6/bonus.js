// const substituaX = nome => { const frase = `Tyber ${nome} aqui!`; return frase }

// console.log("🚀 ~ file: bonus.js:3 ~ substituaX", )


const substituaX = nome => {
    const frase = `Tyber x aqui!`;
    const fraseArray = frase.split(' ');
    // console.log("🚀 ~ file: bonus.js:9 ~ substituaX ~ frase:", fraseArray)

    for (let index = 0; index < fraseArray.length; index++) {
        if (fraseArray[index] === 'x') {
            fraseArray[index] = nome;
        }
    }
    return fraseArray.join(' ')
}

// console.log(substituaX("tiaguin"));

const minhasSkills = substituaX => {
    const skills = ['html', 'css', 'javascript'];
    let resultado = `${substituaX}\nMinhas três principais habilidades são: \n`
    for (let index = 0; index < skills.length; index++) {
        resultado += `${skills[index]}\n`;

    }
    return resultado;
}

console.log(minhasSkills(substituaX('tiaguin')))
