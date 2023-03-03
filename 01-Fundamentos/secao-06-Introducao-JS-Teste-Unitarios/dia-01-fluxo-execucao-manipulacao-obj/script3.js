// function changeBG(event) {
//     const liItem = document.querySelector('.gray');
//     if (liItem) {
//         liItem.classList.remove('gray');
//     }
//     event.target.classList.add('gray')
// }

function lineThrough(e) {
    if (e.target.className.includes('completed')) {
        console.log('hello')
        e.target.classList.remove('completed')
    } else {
        e.target.classList.add('completed')
    }
}

const listObject = {
    className: [],
    innerText: []
}
function saveToLocalStorage() {
    const ulLocation = document.getElementById('lista-tarefas');
    for (let index = 0; index < ulLocation.childNodes.length; index++) {
        listObject.className.push(ulLocation.childNodes[index].className)
        listObject.innerText.push(ulLocation.childNodes[index].innerText)
    }
    
    localStorage.setItem('listCollection', JSON.stringify(listObject));
}

const selectLi = () => {
    const li = document.getElementsByClassName('task');
    for (let index = 0; index < li.length; index += 1) {
        li[index].addEventListener('click', (event) => {
            let  backgroundColor = li[index];
            event.target.style.backgroundColor = 'gray';
            if (backgroundColor) {
                backgroundColor.style.backgroundColor = 'white';
                console.log(backgroundColor);
            }
        });
    }
};

function addBtn() {
    const addBtn = document.getElementById('criar-tarefa');
    const ulLocation = document.getElementById('lista-tarefas');
    addBtn.addEventListener('click', (e) => {
        let inputValue = document.getElementById('texto-tarefa');
        const createLiItem = document.createElement('li');
        createLiItem.className = 'task'
        createLiItem.innerText = inputValue.value;
        ulLocation.appendChild(createLiItem);
        inputValue.value = '';
        createLiItem.addEventListener('click', selectLi)
        createLiItem.addEventListener('dblclick', lineThrough)
    })
}

function resetBtn() {
    const resetBtn = document.getElementById('apaga-tudo')
    resetBtn.addEventListener('click', () => {
        const ulLocation = document.getElementById('lista-tarefas');
        ulLocation.innerHTML = '';
        localStorage.removeItem('listCollection')
    })
}

function removeBtn() {
    const removeBtn = document.getElementById('remover-finalizados');
    removeBtn.addEventListener('click', () => {
        const completed = document.querySelectorAll('.completed')
        completed.forEach(element => element.remove());
    })
}

function saveBtn() {
    const saveBtn = document.querySelector('#salvar-tarefas');
    saveBtn.addEventListener('click', saveToLocalStorage)
}

function loadList() {
    listParse = JSON.parse(localStorage.getItem('listCollection'));
    const ulLocation = document.getElementById('lista-tarefas');
    for (let index = 0; index < listParse.className.length; index++) {
        const createLiItem = document.createElement('li');
        createLiItem.className = listParse.className[index];
        createLiItem.innerText = listParse.innerText[index];
        ulLocation.appendChild(createLiItem);
        createLiItem.addEventListener('click', changeBG)
        createLiItem.addEventListener('dblclick', lineThrough)

    }
}

function moveUp(e) {
    const ulLocation = document.getElementById('lista-tarefas');
    if (document.querySelector(".gray") !== null && document.querySelector(".gray").previousElementSibling !== null) {
        let placeholderHTML = document.querySelector(".gray").previousElementSibling.outerHTML;
        document.querySelector(".gray").previousElementSibling.outerHTML = document.querySelector(".gray").outerHTML
        document.querySelector(".gray").nextElementSibling.outerHTML = placeholderHTML;

        for (let index = 0; index < ulLocation.childElementCount; index++) {
            ulLocation.childNodes[index].addEventListener('click', changeBG)
            ulLocation.childNodes[index].addEventListener('dblclick', lineThrough)
        }

    }
}

function moveDown(e) {
    const ulLocation = document.getElementById('lista-tarefas');
    if (document.querySelector(".gray") !== null && document.querySelector(".gray").nextElementSibling !== null) {
        let placeholderHTML = document.querySelector(".gray").nextElementSibling.outerHTML;
        document.querySelector(".gray").nextElementSibling.outerHTML = document.querySelector(".gray").outerHTML
        document.querySelector(".gray").outerHTML = placeholderHTML;

        for (let index = 0; index < ulLocation.childElementCount; index++) {
            ulLocation.childNodes[index].addEventListener('click', changeBG)
            ulLocation.childNodes[index].addEventListener('dblclick', lineThrough)
        }
    }
}

function moveBtn() {
    const up = document.querySelector('#mover-cima')
    const down = document.querySelector('#mover-baixo')

    up.addEventListener('click', moveUp)
    down.addEventListener('click', moveDown)
}

function removeTargetBtn() {
    const rmvTgtBtn = document.querySelector('#remover-selecionado')
    rmvTgtBtn.addEventListener('click', () => {
        const selected = document.querySelector('.gray');
        if (selected !== null || selected !== undefined) {
            selected.outerHTML = ''
        }
    })
}

window.onload = () => {
    addBtn();
    resetBtn();
    removeBtn();
    saveBtn();
    moveBtn();
    if (localStorage.getItem('listCollection') !== null) {
        loadList();
    }
    removeTargetBtn();
    selectLi();
}