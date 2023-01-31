const a = frase => {
    let split = frase.split(' ')
    let word = '?'
    for (const i in split) {

        if (split[i] > word) {
            word = split[i]
        }
    }
    return word;
}

console.log(a('Antonio foi ao banheiro e nao sabemos o que aconteceu'));