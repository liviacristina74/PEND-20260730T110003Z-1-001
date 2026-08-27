const produtos = [];

function cadastrarProduto() {

    const nome = document.getElementById("nome").value;
    const preco = document.getElementById("preco").value;
    const categoria = document.getElementById("categoria").value;
    const desconto = document.getElementById("desconto").value;

    const produto = {
        nome: nome,
        preco: preco,
        categoria: categoria,
        desconto: desconto
    };

    produtos.push(produto);

    mostrarProdutos();
}

function excluirProduto(indice) {

    produtos.splice(indice, 1);

    mostrarProdutos();
}

function mostrarProdutos() {

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    produtos.forEach((produto, indice) => {

        resultado.innerHTML += `
            <p>
                Nome: ${produto.nome}<br>
                Preço: R$ ${produto.preco}<br>
                Categoria: ${produto.categoria}<br>
                Desconto: ${produto.desconto} %
            </p>

            <button onclick="excluirProduto(${indice})">
                Excluir
            </button>

            <hr>
        `;
    });
}