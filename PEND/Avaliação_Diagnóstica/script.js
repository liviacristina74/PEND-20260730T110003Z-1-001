
//  EMAIL //
let email = document.getElementById('email');
let msgEmail = document.getElementById('msgEmail');

// quando a pessoa digita no email
email.addEventListener("input", function () {

    // validação bem simples 
    if (email.value.includes('@') && email.value.includes('.')) {
        msgEmail.textContent = "E-mail ok";
        msgEmail.className = "sucesso";
    } else {
        msgEmail.textContent = "E-mail inválido";
        msgEmail.className = "erro";
    }
});


// SENHA //
let senha = document.getElementById("senha");
let msgSenha = document.getElementById("msgSenha");

senha.addEventListener("input", function () {

    // se tiver menos de 6 caracteres considero fraca
    if (senha.value.length < 6) {
        msgSenha.textContent = "Senha fraca";
        msgSenha.style.color = "red";
    } else {
        msgSenha.textContent = "Senha ok";
        msgSenha.style.color = "green";
    }
});


// MOSTRAR SENHA // 
let verSenha = document.getElementById("verSenha");

// quando clicar no olhinho
verSenha.addEventListener("click", function () {

    if (senha.type === "password") {
        senha.type = "text"; // mostra
        verSenha.classList.replace('bi-eye', 'bi-eye-slash');
    } else {
        senha.type = "password"; // esconde
        verSenha.classList.replace('bi-eye-slash', 'bi-eye');
    }

});


// TELEFONE //
let telefone = document.getElementById('telefone');
let msgTel = document.getElementById('msgTel');

telefone.addEventListener("input", function () {
    let valor = telefone.value;

    // tira tudo que não for número
    valor = valor.replace(/\D/g, "");

    // começo da máscara (xx)
    if (valor.length > 0) {
        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    }

    // coloca o traço
    if (valor.length != 10) {
        valor = valor.replace(/(\d{5})(\d)/, "$1-$2");
    }

    telefone.value = valor;

    // validação básica
    if (valor.replace(/\D/g, "").if (numero.length != 11)) {
        msgTel.textContent = "Número inválido";
        msgTel.style.color = "red";
    } else {
        msgTel.textContent = "Número ok";
        msgTel.style.color = "green";
    }
});


//  BOTÃO CADASTRAR //
let btn = document.getElementById("btnCadastrar");
let msgCadastro = document.getElementById("msgCadastro");

btn.addEventListener("click", function () {

    let numero = telefone.value.replace(/\D/g, "");

    // só conferi o telefone (simples mesmo)
    if (numero.length != 11) {
        msgCadastro.textContent = "Não cadastrou";
        msgCadastro.style.color = "red";
    } else {
        msgCadastro.textContent = "Cadastrado com sucesso!";
        msgCadastro.style.color = "green";
    }

});
