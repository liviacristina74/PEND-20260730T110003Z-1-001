class Aluno {
    constructor(nome, idade, curso, matrícula) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matrícula = matrícula;
    }
    aprender() {
        console.log(`${this.nome} está aprendendo`);
    }
    estudar() {
        console.log(`${this.nome} está estudando`);
    }
    apresentar() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, curso ${this.curso} e minha matrícula é ${this.matrícula}`);
    }
}

const aluno1 = new Aluno("Brayan", 17, "Mecanica", "12345");
console.log("Aluno 1:", aluno1);

const aluno2 = new Aluno("Lívia", 17, "Pedagogia", "67890");
console.log("Aluno 2:", aluno2);

const aluno3 = new Aluno("Júlia", 18, "Perícia Criminal", "54321");
console.log("Aluno 3:", aluno3);

//Metodos
aluno1.aprender();
aluno2.estudar();
aluno3.apresentar();

