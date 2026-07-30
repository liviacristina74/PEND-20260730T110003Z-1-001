let senha = document.querySelector("#senha");
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
