const alunos = [];
const turma = new Turma();

const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const curso = document.querySelector("#curso");
const matrícula = document.querySelector("#matrícula");
const resultado = document.querySelector("#resultado");
const botaoCadastrar = document.querySelector("#botaoCadastrar");

class Aluno {
    constructor(nome, idade, curso, matrícula) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matrícula = matrícula;
    }

    estudar() {
        console.log(`${this.nome} está estudando.`);
    }

    apresentar() {
        console.log(`${this.nome} está fazendo uma ótima apresentação!`);
    }

    exibirNaTela() {
        resultado.innerHTML = "";

        alunos.forEach(aluno => {
            resultado.innerHTML += `
                <div>
                    <p>Nome: ${aluno.nome}</p>
                    <p>Idade: ${aluno.idade}</p>
                    <p>Curso: ${aluno.curso}</p>
                    <p>Matrícula: ${aluno.matrícula}</p>
                    <hr>
                </div>
            `;
        });
    }
}

class Turma {
    constructor() {
        this.alunos = [];
    }

    adicionarAluno(aluno) {
        this.alunos.push(aluno);
    }

    exibirNaTela() {
        const resultadoTurma = document.querySelector("#resultadoTurma");

        resultadoTurma.innerHTML = "";

        this.alunos.forEach(aluno => {
            resultadoTurma.innerHTML += `
                <div>
                    <p>Nome: ${aluno.nome}</p>
                    <p>Idade: ${aluno.idade}</p>
                    <p>Curso: ${aluno.curso}</p>
                    <p>Matrícula: ${aluno.matrícula}</p>
                </div>
            `;
        });
    }
}


// Botão cadastrar
botaoCadastrar.addEventListener("click", function () {

    const novoAluno = new Aluno(
        nome.value,
        idade.value,
        curso.value,
        matrícula.value
    );

    // Adiciona no array de alunos
    alunos.push(novoAluno);

    // Adiciona na turma
    turma.adicionarAluno(novoAluno);

    console.log(novoAluno);

    novoAluno.estudar();

    // Exibe os alunos
    novoAluno.exibirNaTela();

    // Exibe a turma
    turma.exibirNaTela();
});


// Alunos já cadastrados
const aluno1 = new Aluno(
    "Gabriela",
    19,
    "Biomedicina Estética",
    "12345"
);

const aluno2 = new Aluno(
    "João",
    20,
    "Engenharia de Software",
    "67890"
);

console.log(aluno1);
console.log(aluno2);


// Coloca os dois no array
alunos.push(aluno1);
alunos.push(aluno2);


// Coloca os dois na turma
turma.adicionarAluno(aluno1);
turma.adicionarAluno(aluno2);


// Executa os métodos
aluno1.estudar();
aluno1.apresentar();

aluno2.estudar();
aluno2.apresentar();


// Exibe os alunos
aluno1.exibirNaTela();

// Exibe a turma
turma.exibirNaTela();