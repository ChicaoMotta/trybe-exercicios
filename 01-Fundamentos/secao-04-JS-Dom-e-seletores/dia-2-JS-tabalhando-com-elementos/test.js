let x = document.getElementById('elementoOndeVoceEsta');
x.parentElement.style.color = 'red'

let y = document.getElementById('primeiroFilhoDoFilho')
y.innerText = 'Adicionar um texto a ele'

document.getElementById('pai').firstElementChild

document.getElementById('elementoOndeVoceEsta').firstElementChild

document.getElementById('elementoOndeVoceEsta').previousElementSibling

document.getElementById('elementoOndeVoceEsta').nextSibling

document.getElementById('elementoOndeVoceEsta').nextElementSibling

document.getElementById('pai').lastElementChild.previousElementSibling

// Crie um irmão para `elementoOndeVoceEsta`.

const pai = document.getElementById('pai'); // Recupere o elemento com o id pai

const irmaoElementoOndeVoceEsta = document.createElement('section'); // Crie um novo elemento

irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';

pai.appendChild(irmaoElementoOndeVoceEsta); // Adicione o elemento criado como filho do elemento com o id `pai`


// crie um filho para elementoOndeVoceEsta
let a = document.getElementById('elementoOndeVoceEsta');

let b = document.createElement('section');
b.id = 'SectionFilho'

a.appendChild(b);

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
let filhoDoFilhoDoFilho = document.createElement('section')

filhoDoFilhoDoFilho.id = 'filhoDoFilhoDoFilho'

primeiroFilhoDoFilho.appendChild(filhoDoFilhoDoFilho);


let essequi = document.getElementById('filhoDoFilhoDoFilho')
essequi.parentElement.parentElement.nextElementSibling;