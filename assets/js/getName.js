document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const usuario = document.getElementById('usuario').value;

            localStorage.setItem('usuario', usuario);

            window.location.href = '/sucesso';
        });
    } else {
        console.error('Elemento com ID "loginForm" não encontrado.');
    }
});

if (window.location.pathname.includes('/sucesso')) {
    const usuario = localStorage.getItem('usuario'); 
    if (usuario) {
       
        const bemVindo = document.getElementById('bemVindo');
        if (bemVindo) {
            bemVindo.textContent = `Bem-vindo(a), ${usuario}!`;
        } else {
            console.error('Elemento com ID "bemVindo" não encontrado.');
        }
    } else {
        console.error('Usuário não encontrado no localStorage.');
    }
}