function validateLogin() {
    const loginBtn = document.querySelector('.enter');
    const loginEmail = document.querySelector('#loginEmail');
    const loginPass = document.querySelector('#loginPass');
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let returnAlert = null;
        if (loginEmail.value === 'tryber@teste.com' && loginPass.value === '123456') {
            returnAlert = alert('Olá, Tryber!');
        } else {
            returnAlert = alert('Email ou senha inválidos.');
        }
    });
}

window.onload = () => {
    validateLogin();
}