let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};


// console.log(leitor.nome + leitor.sobrenome + leitor.livrosFavoritos[0].titulo)

leitor.livrosFavoritos.push( {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
});

console.log(leitor.livrosFavoritos.length)

// console.log(leitor)