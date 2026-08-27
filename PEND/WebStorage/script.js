const nome = document.querySelector('#nome');
const botaoSalvar = document.querySelector('#salvar');
const botaoRecuperar = document.querySelector('#recuperar');
const botaoExcluir = document.querySelector('#excluir');

const resultadoStorage = document.querySelector('#resultado-storage');

// --- WEB STORAGE SIMPLES ---
botaoSalvar.addEventListener("click", function () {
    localStorage.setItem("nome", nome.value);
    resultadoStorage.textContent = "Nome salvo!";
});

botaoRecuperar.addEventListener("click", function () {
    const nomeRecuperado = localStorage.getItem("nome");
    resultadoStorage.textContent = `Nome armazenado/recuperado: ${nomeRecuperado}`;
});

botaoExcluir.addEventListener("click", function () {
    localStorage.removeItem("nome");
    resultadoStorage.textContent = "Nome excluído!";
});

// --- CADASTRO E LOCAL STORAGE DE PRODUTOS ---

// Carrega os produtos salvos no Local Storage ou inicia um array vazio
let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

// Renderiza os produtos já salvos assim que a página carrega
mostrarProdutos();

function cadastrarProduto() {
    const nomeProduto = document.getElementById("nome-produto").value;
    const preco = document.getElementById("preco").value;
    const categoria = document.getElementById("categoria").value;
    const desconto = document.getElementById("desconto").value;

    const produto = {
        nome: nomeProduto,
        preco: preco,
        categoria: categoria,
        desconto: desconto
    };

    // Adiciona o produto ao array
    produtos.push(produto);

    // Salva o array atualizado no Local Storage (Aba Application)
    localStorage.setItem("produtos", JSON.stringify(produtos));

    // Atualiza a tela
    mostrarProdutos();
}

function mostrarProdutos() {
    const container = document.getElementById("lista-produtos");
    if (!container) return;
    
    container.innerHTML = "";

    produtos.forEach((prod) => {
        container.innerHTML += `
            <p><strong>Produto:</strong> ${prod.nome} | <strong>Preço:</strong> R$ ${prod.preco} | <strong>Categoria:</strong> ${prod.categoria} | <strong>Desconto:</strong> ${prod.desconto}%</p>
        `;
    });
}