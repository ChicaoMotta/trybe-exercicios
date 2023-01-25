let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
let info2 = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//console.log('Bem vinda, ' + info.personagem);

info['recorrente'] = 'Sim';

for (let chaves in info) {
    console.log(chaves + ': ' + info[chaves])
}

for (let key in info) {
    if (
        key === 'recorrente' &&
        info[key] === 'Sim' &&
        info2[key] === 'Sim'
    ) {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[key] + ' e ' + info2[key]);
    }
}