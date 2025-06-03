const formLogin = document.getElementById('form');

     // Adiciona um "listener" para o evento de 'submit' do formulário
    formLogin.addEventListener('submit', (e)=> {
        // Previne o comportamento padrão de envio do formulário 
        e.preventDefault();

        // DOM: Pega os valores do usuário e da senha
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;
            const email = document.getElementById('email').value;
            const adress = document.getElementById('adress').value;
            const people = document.getElementById('people').value;
            window.location.href = 'quiz.html'; // Redireciona se o usuario e senha estiverem corretos
   

});