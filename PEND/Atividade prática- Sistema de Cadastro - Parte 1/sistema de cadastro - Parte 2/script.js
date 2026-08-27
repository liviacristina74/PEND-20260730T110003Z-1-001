const produtos = [];

class Produto {
    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        return this.preco - (this.preco * (this.desconto / 100));
    }
}

const botao = document.querySelector("#botaoCadastrar");
const resultadoDiv = document.querySelector("#resultado");

// Função responsável por renderizar a lista no DOM
function renderizar() {
    resultadoDiv.innerHTML = "";

    produtos.forEach((prod, index) => {
        const precoComDesconto = prod.aplicarDesconto();

        resultadoDiv.innerHTML += `
            <p>
                <strong>Nome:</strong> ${prod.nome} <br>
                <strong>Preço:</strong> R$ ${prod.preco.toFixed(2)} <br>
                <strong>Categoria:</strong> ${prod.categoria || "Sem categoria"} <br>
                <strong>Desconto:</strong> ${prod.desconto}% <br>
                <button onclick="excluirProduto(${index})">Excluir</button>
            </p>
            <hr>
        `;
    });
}

// Função para remover o produto do Array e atualizar o DOM
function excluirProduto(indice) {
    produtos.splice(indice, 1); // Remove 1 item a partir do índice informado
    renderizar(); // Atualiza a tela
}

// Evento de cadastro de produtos
botao.addEventListener("click", () => {
    const nome = document.querySelector("#nome").value;
    const preco = Number(document.querySelector("#preco").value);
    const categoria = document.querySelector("#categoria").value;
    const desconto = Number(document.querySelector("#desconto").value) || 0;

    if (!nome || isNaN(preco) || preco <= 0) {
        alert("Por favor, preencha o nome e o preço corretamente!");
        return;
    }

    const novoProduto = new Produto(nome, preco, categoria, desconto);
    produtos.push(novoProduto);

    renderizar();

    // Limpa os campos
    document.querySelector("#nome").value = "";
    document.querySelector("#preco").value = "";
    document.querySelector("#categoria").value = "";
    document.querySelector("#desconto").value = "";
});

// Armazenar os produtos no localStorage antes de sair da página
window.addEventListener("beforeunload", () => {
    localStorage.setItem("produtos", JSON.stringify(produtos));
});

// Recuperar os produtos do localStorage ao carregar a página
window.addEventListener("load", () => {
    const dados = localStorage.getItem("produtos");
    if (dados) {
        const produtosSalvos = JSON.parse(dados);
        produtos.push(...produtosSalvos);
        renderizar();
    }
});

// Função para limpar o localStorage e a lista de produtos
function limparLocalStorage() {
    localStorage.removeItem("produtos");
    produtos.length = 0; // Limpa o array de produtos
    renderizar(); // Atualiza a tela
}

//Atualizar o localStorage após uma exclusão de produto
function atualizarLocalStorage() {
    localStorage.setItem("produtos", JSON.stringify(produtos));
}

// manter os produtos atualizados no localStorage após a exclusão
function excluirProduto(indice) {
    produtos.splice(indice, 1); // Remove 1 item a partir do índice informado
    atualizarLocalStorage(); // Atualiza o localStorage
    renderizar(); // Atualiza a tela
}   

// manter os produtos mesmo após fechar e abrir o navegador
window.addEventListener("load", () => {
    const dados = localStorage.getItem("produtos");
    if (dados) {
        const produtosSalvos = JSON.parse(dados);
        produtos.push(...produtosSalvos);
        renderizar();
    }
});