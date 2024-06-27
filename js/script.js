document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Evita o comportamento padrão do formulário de ser enviado

            // Obtém os valores dos campos de entrada
            const TipoEmail = document.getElementById("username").value; // Aqui obtém o email do campo username
            const password = document.getElementById("password").value;

            // Exibe os dados no console do navegador (opcional)
            console.log("Usuário:", TipoEmail);
            console.log("Senha:", password);

            EntrarCadastro(TipoEmail, password);
        });
    }

    const togglePassword = document.getElementById('togglePassword');
    const passwordField = document.getElementById('password');

    togglePassword.addEventListener('click', function() {
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);
        togglePassword.textContent = type === 'password' ? 'Mostrar Senha' : 'Ocultar Senha';
    });
});

async function EntrarCadastro(TipoEmail, password) {
    try {
        const response = await fetch('http://localhost:5170/api/Autenticacao/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: TipoEmail,
                senhaHash: password
            })
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Login bem-sucedido:", data);
            window.location.href = "index_2.html"; // Redireciona para a página de sucesso
        } else {
            console.error('Credenciais inválidas');
            alert('Credenciais inválidas');
        }
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        alert('Erro ao fazer login');
    }
}
