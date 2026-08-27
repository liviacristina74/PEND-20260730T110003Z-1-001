class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
    vender() {
        if (this.estoque > 0) {
            this.estoque--;
            console.log(`Produto ${this.nome} vendido. Estoque restante: ${this.estoque}`);
        } else {
            console.log(`Produto ${this.nome} está fora de estoque.`);
        }
    }
    repor() {
        this.estoque++;
        console.log(`Produto ${this.nome} reposto. Estoque atual: ${this.estoque}`);
    }

    alterarPreco(novoPreco) {
        this.preco = novoPreco;
        console.log(`Preço do produto ${this.nome} alterado para: R$${this.preco.toFixed(2)}`);

    }

}

const produto1 = new Produto("Crocs", 49.90, 10);
console.log("Produto 1:", produto1);

const produto2 = new Produto("Saia", 99.90, 5);
console.log("Produto 2:", produto2);

const produto3 = new Produto("Salto", 149.90, 0);
console.log("Produto 3:", produto3);

console.log("--------");
console.log("Atributos do produto1:");
console.log("-", produto1.nome);
console.log("-", produto1.preco);
console.log("-", produto1.estoque);     

console.log("--------");
console.log("Atributos do produto2:");
console.log("-", produto2.nome);
console.log("-", produto2.preco);
console.log("-", produto2.estoque);

console.log("--------");
console.log("Atributos do produto3:");
console.log("-", produto3.nome);
console.log("-", produto3.preco);
console.log("-", produto3.estoque);
