 function validarEmail() {
            // 1. Pegar o valor do campo
            var email = document.getElementById('email').value;
            var mensagem = document.getElementById('mensagem');
            
            // 2. Lógica de validação simples: precisa ter @ e .
            if (email.includes('@') && email.includes('.')) {
                mensagem.textContent = "E-mail válido!";
                mensagem.className = "sucesso";
            } else {
                mensagem.textContent = "Erro: E-mail inválido. Verifique o @ e o .";
                mensagem.className = "erro";
            }
        }

         const senha = document.getElementById("senha");
        const mensagem = document.getElementById("mensagem");

senha.addEventListener("input", function() {
    if (senha.value.length < 6) {
        mensagem.textContent = "Senha fraca";
        mensagem.style.color = "red";
    } else {
        mensagem.textContent = "Senha aceitável";
        mensagem.style.color = "green";
    }
});
let senha1 = document.querySelector("#senha");
let botao = document.querySelector("#botaoSenha");


botao.addEventListener("click",function(){
    if (senha.type === "password") {
        senha.setAttribute('type', 'text');
        botao.classList.replace('bi-eye-fill', 'bi-eye-slash');

    } else {
        senha.setAttribute('type', 'password');
        botao.classList.replace('bi-eye-slash', 'bi-eye-fill');


    }

});
