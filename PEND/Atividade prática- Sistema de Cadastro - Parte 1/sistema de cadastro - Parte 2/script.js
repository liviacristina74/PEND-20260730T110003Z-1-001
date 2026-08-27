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

botao.addEventListener("click", () => {
    // 1. Pega os valores atualizados dos inputs
    const nome = document.querySelector("#nome").value;
    const preco = Number(document.querySelector("#preco").value);
    const categoria = document.querySelector("#categoria").value;
    const desconto = Number(document.querySelector("#desconto").value) || 0; // se vazio, considera 0

    // Validação simples
    if (!nome || isNaN(preco) || preco <= 0) {
        alert("Por favor, preencha o nome e o preço corretamente!");
        return;
    }

    // 2. Cria um novo objeto Produto com os dados digitados
    const novoProduto = new Produto(nome, preco, categoria, desconto);

    // 3. Adiciona o produto cadastrado na lista
    produtos.push(novoProduto);

    // 4. Limpa a div de resultados e redesenha a lista com todos os cadastrados
    resultadoDiv.innerHTML = "";

    produtos.forEach((prod) => {
        const precoComDesconto = prod.aplicarDesconto();

        resultadoDiv.innerHTML += `
            <p>
                <strong>Produto:</strong> ${prod.nome} | 
                <strong>Preço Original:</strong> R$ ${prod.preco.toFixed(2)} | 
                <strong>Com Desconto (${prod.desconto}%):</strong> R$ ${precoComDesconto.toFixed(2)} | 
                <strong>Categoria:</strong> ${prod.categoria || "Sem categoria"}
            </p>
        `;
    });

    // 5. Limpa os campos de texto para o próximo cadastro
    document.querySelector("#nome").value = "";
    document.querySelector("#preco").value = "";
    document.querySelector("#categoria").value = "";
    document.querySelector("#desconto").value = "";
});