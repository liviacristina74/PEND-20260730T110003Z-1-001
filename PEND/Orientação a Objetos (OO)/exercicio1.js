// OBJETO: RETANGULO
// ATRIBUTOS: LARGURA, ALTURA, COR
// METODOS: DESENHAR, CALCULAR AREA, MOSTRAR INFORMAÇÕES
// Classe: Retangulo
class Retangulo {
    // Método que define os valores iniciais do objeto
    constructor(largura, altura, cor) {


        // OBJETOS SÃO CRIADOS A PARTIR DE UMA CLASSE, E CADA OBJETO TEM SEUS PRÓPRIOS VALORES PARA OS ATRIBUTOS DA CLASSE.
        this.largura = largura;
        this.altura = altura;
        this.cor = cor;
    }


    // Método que desenha o retângulo
    desenhar() {
        console.log("Retângulo desenhado.");
    }


    calcularArea() {
        console.log(`Área: ${this.largura * this.altura}`);
    }


    mostrarInformacoes() {
        console.log(
            `Retângulo ${this.cor} - Largura: ${this.largura}, Altura: ${this.altura}`
        );
    }
}


// Objetosc são instâncias de uma classe, ou seja, são criados a partir do molde da classe. Cada objeto tem seus próprios valores para os atributos da classe.
const retangulo1 = new Retangulo(10, 5, "Azul");
console.log("Retângulo 1:", retangulo1);


const retangulo2 = new Retangulo(8, 4, "Vermelho");
console.log("Retângulo 2:", retangulo2);


const retangulo3 = new Retangulo(12, 6, "Verde");
console.log("Retângulo 3:", retangulo3);


console.log("----------------------");
console.log("Atributos do Retângulo 1:");
console.log("-", retangulo1.largura);
console.log("-", retangulo1.altura);
console.log("-", retangulo1.cor);
console.log("----------------------");


console.log("----------------------");
console.log("Atributos do Retângulo 2:");
console.log("-", retangulo2.largura);
console.log("-", retangulo2.altura);
console.log("-", retangulo2.cor);
console.log("----------------------");


console.log("----------------------");
console.log("Atributos do Retângulo 3:");
console.log("-", retangulo3.largura);
console.log("-", retangulo3.altura);
console.log("-", retangulo3.cor);
console.log("----------------------");


// Métodos
retangulo1.desenhar();
retangulo1.calcularArea();
retangulo1.mostrarInformacoes();
