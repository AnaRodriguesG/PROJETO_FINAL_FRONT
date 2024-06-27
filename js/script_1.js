document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário de ser enviado

    // Obtém os valores dos campos de entrada
    const username = document.getElementById("username").value;
    const email = document.getElementById("TipoEmail").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("http://localhost:5170/api/Usuarios/Cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome: username, email: email, senhaHash: password }),
      });

      // Verifica se a requisição foi bem-sucedida
      if (response.ok) {
        // Limpa os campos de entrada após o envio bem-sucedido
        document.getElementById("username").value = "";
        document.getElementById("TipoEmail").value = "";
        document.getElementById("password").value = "";

        // Redireciona para a página principal
        window.location.href = "index.html";
      } else {
        console.error("Failed to register:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });
});
