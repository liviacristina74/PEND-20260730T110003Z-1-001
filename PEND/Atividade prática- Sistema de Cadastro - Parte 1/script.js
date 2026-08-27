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

    exibirNaTela() {
        const resultadoProduto = document.querySelector("#resultadoProduto");
        const precoComDesconto = this.aplicarDesconto();

        if (resultadoProduto) {
            resultadoProduto.textContent = `Produto: ${this.nome} | Preço Original: R$ ${this.preco.toFixed(2)} | Com Desconto (${this.desconto}%): R$ ${precoComDesconto.toFixed(2)} | Categoria: ${this.categoria}`;
        }
    }
}

// Captura do botão e adição do evento de clique
const botao = document.querySelector("#botaoCadastrar");

botao.addEventListener("click", () => {
    // Pega os valores digitados nos inputs
    const nome = document.querySelector("#nome").value;
    const preco = Number(document.querySelector("#preco").value);
    const categoria = document.querySelector("#categoria").value;
    const desconto = Number(document.querySelector("#desconto").value);


    // Validação simples
    if (!nome || isNaN(preco)) {
        alert("Por favor, preencha pelo menos o nome e o preço do produto!");
        return;
    }

    // Cria a nova instância da classe Produto e exibe na tela
    const novoProduto = new Produto(nome, preco, categoria, desconto);
    localStorage.setItem("produto", JSON.stringify(novoProduto));
    novoProduto.exibirNaTela();
});

// Recupera os dados do produto armazenado no localStorage, se houver 
const dados = localStorage.getItem("produto");
if (dados) {
    const produtoSalvo = JSON.parse(dados);

    const produto = new Produto(
        produtoSalvo.nome,
        produtoSalvo.preco,
        produtoSalvo.categoria,
        produtoSalvo.desconto
    );
    produto.exibirNaTela();
}   

