//atividade 1
let texto_azul = document.getElementById("texto_azul");

texto_azul.addEventListener("click", function () {
    texto.style.color = "blue";
});

let texto_vermelho = document.getElementById("texto_vermelho");

texto_vermelho.addEventListener("click", function () {
    texto.style.color = "red";
});


//atividade 2
function alternarMensagem() {
    // 1. Obter referências do DOM
    var mensagem = document.getElementById("minhaMensagem");
    var botao = document.getElementById("btnToggle");

    // 2. Lógica para esconder/mostrar
    if (mensagem.style.display === "none") {
        mensagem.style.display = "block"; // Mostra
        botao.innerText = "Esconder Mensagem"; // Atualiza botão
    } else {
        mensagem.style.display = "none"; // Esconde
        botao.innerText = "Mostrar Mensagem"; // Atualiza botão
    }
}

//  3.Contador de caracteres
const textarea = document.getElementById('meuTexto');
const contador = document.getElementById('contador');

// Adiciona um "escutador" de eventos que roda ao digitar (input)
textarea.addEventListener('input', function () {
    // Obtém o tamanho atual do texto
    const totalCaracteres = textarea.value.length;
    // Atualiza o texto no parágrafo
    contador.textContent = totalCaracteres;
});


4. // --- contador de cliques  ---
let cliques = 0; // Inicia o contador
const botao2 = document.getElementById("meuBotao");
const display = document.getElementById("contador2");

// Adiciona um escutador de evento ao botão
botao2.addEventListener("click", function () {
    cliques++; // Aumenta o contador
    display.innerText = cliques; // Atualiza o número na tela
});


//  5.Criar elementos dinamicamente
const input = document.getElementById('itemInput');
const botao = document.getElementById('addBtn');
const lista = document.getElementById('lista');

//5. Função para adicionar o item
botao.addEventListener('click', function () {
    const texto = input.value; // Pega o texto do input

    if (texto.trim() !== "") { // Verifica se não está vazio
        const novoItem = document.createElement('li'); // Cria <li>
        novoItem.textContent = texto; // Define o texto do <li>
        lista.appendChild(novoItem); // Adiciona o <li> na <ul>
        input.value = ""; // Limpa o input
        input.focus(); // Coloca o foco de volta no input

        novoItem.addEventListener('click', function () {
            lista.removeChild(novoItem);
            // Exemplo de uso:
if (confirm("Deseja realmente excluir este item?")) {
  // Ação se o usuário clicar em "OK" (true)
  console.log("Item excluído.");
} else {
  // Ação se o usuário clicar em "Cancelar" (false)
  console.log("Ação cancelada.");
}
        });

    } else {
        alert("Por favor, digite algo.");
    }
});
     //desafio hard
   function validarFormulario() {
            // Obtém o valor do input e o parágrafo de mensagem
            var nomeInput = document.getElementById("nome").value;
            var mensagemElemento = document.getElementById("mensagem");

            // Verifica se o campo está vazio (removendo espaços extras com .trim())
            if (nomeInput.trim() === "") {
                mensagemElemento.textContent = "O campo nome é obrigatório";
                mensagemElemento.className = "erro"; // Aplica a cor vermelha
            } else {
                mensagemElemento.textContent = "Nome enviado com sucesso!";
                mensagemElemento.className = "sucesso"; // Aplica a cor verde
            }
        }
          //atividade 7- validação de email
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

        // Verificação simples de força de senha 
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