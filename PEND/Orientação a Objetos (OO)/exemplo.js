// classe é um modelo do paradigma de orientação a objetos, ela é um molde para criar objetos.
class Carro {

    //atributos são as características do objeto, são as variáveis que definem o estado do objeto.
    marca;
    modelo;
    ano;
    cor;

    // o construtor é um método especial que é chamado quando um objeto é criado a partir da classe. Ele é usado para inicializar os atributos do objeto.
    constructor(marca, modelo, ano, cor) {
        //o this significa "este objeto" Ele serve para dizer que aquele atributo pertence ao objeto que está sendo criado. Ele é usado para diferenciar os atributos do objeto dos parâmetros do construtor.
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
    //
    ligar() {
        console.log("O carro está ligado");
    }
    //
    acelerar() {
        console.log("acelerando");

    }
    //chamando o método frear do objeto.
    frear() {
        console.log('${this.modelo} freiou');
    }
}
//objetos são instâncias de uma classe, ou seja, são criados a partir do molde da classe. Cada objeto tem seus próprios valores para os atributos da classe.
const carro1 = new Carro("Volkswagen", "Gol", 2022, "Branco");
console.log("carro1: ", carro1);

// atributos do carro2
const carro2 = new Carro("Toyota", "Corolla", 2025, "Preto");
console.log("carro2: ", carro2);

console.log("--------");
console.log("Atributos do carro1:");
console.log("-", carro1.marca);
console.log("-", carro1.modelo);
console.log("-", carro1.ano);
console.log("-", carro1.cor);

//atributos do carro3 
const carro3 = new Carro("Honda", "Ferrari", 2023, "Cinza");
console.log("carro3: ", carro3);

console.log("--------");
console.log("Atributos do carro3:");
console.log("-", carro3.marca);
console.log("-", carro3.modelo);
console.log("-", carro3.ano);
console.log("-", carro3.cor);



//métodos são as ações que o objeto pode realizar, são as funções que definem o comportamento do objeto. Eles podem acessar e modificar os atributos do objeto.
carro1.ligar();

//chamando o método acelerar do objeto carro1
carro2.acelerar();

carro1.ligar();
carro2.frear();
carro3.acelerar();





