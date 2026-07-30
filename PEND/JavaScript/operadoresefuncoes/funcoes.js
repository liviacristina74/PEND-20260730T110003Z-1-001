function saudacao() {
    console.log("Olá,JavaScript!");
}

saudacao();

function nome(nome) {
    console.log("Olá, " + nome);
}
nome("ana")

function somar(a,b) {
    return a+b;
}

console.log(somar(5,3));

//7.Criar função que calcula o IMC
//8.Criar função que verifica se o número é par ou ímpar 

//7.
function imc(peso,altura) {
    return peso/(altura*altura)
}


let peso = 50;
let altura = 1.60

console.log("O cálculo do IMC é: ",imc(peso,altura));

//8.
function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

// Exemplo de uso:
console.log(verificarParOuImpar(10)); // Saída: Par
console.log(verificarParOuImpar(7));  // Saída: Ímpar

console.log ("FUNÇÔES NATIVAS" );

let agora = new Date();
console.log(agora);

function mostrarDataHora() {
    let data = new Date();

    console.log("Dia:", data.getDate());
    console.log("Mês:", data.getMonth() + 1);
    console.log("Ano:", data.getFullYear());
    console.log("Hora:", data.getHours());
    console.log("Minutos:", data.getMinutes());
}
mostrarDataHora();

// 1. Criar o objeto de data atual
const data = new Date();

// 2. Função auxiliar para adicionar "0" à esquerda se o número for < 10
function formatarDoisDigitos(numero) {
    return (numero < 10 ? '0' : '') + numero;
}

// 3. Extrair componentes
const dia = formatarDoisDigitos(data.getDate());
const mes = formatarDoisDigitos(data.getMonth() + 1); // Meses vão de 0-11
const ano = data.getFullYear();
const horas = formatarDoisDigitos(data.getHours());
const minutos = formatarDoisDigitos(data.getMinutes());
const segundos = formatarDoisDigitos(data.getSeconds());

// 4. Exibir no formato hh:mm:ss dd/mm/aaaa
console.log(`${horas}:${minutos}:${segundos} ${dia}/${mes}/${ano}`);

// 5. Exibir os seus logs específicos
console.log("Dia: " + dia);
console.log("Minutos: " + minutos);

console.log("FUNÇÕES MATEMÁTICAS")

console.log(Math.PI)

function calcularOperacoes(numero) {
    console.log("Raiz:", Math.sqrt(numero));
    console.log("Arredondado:", Math.round(numero));
    console.log("Para Cima:", Math.ceil(numero));
    console.log("Para Baixo:", Math.floor(numero));
// Usando Math.pow()
    console.log("quadrado:",Math.pow(numero, 2)); 
    console.log( "valor absoluto:",Math.abs(numero)); 

}
calcularOperacoes(-7.8);

//Desafio: Incluir na função calcularOperacoes
//Quadrado: (exemplo: 10 ao quadrado)
//Valor absoluto: (exemplo: -5 = 5)

// --- Resultados para: -7.8 ---
// Raiz: NaN
// Arredondado: -8
// Para Cima: -7
// Para Baixo: -8
// Quadrado: 60.84
// Valor absoluto: 7.8

console.log("FUNÇÕES STRING")

function analisarTexto(texto) {
    console.log("Tamanho:", texto.length);
    console.log("Maiúsculo:", texto.toUpperCase());
    console.log("Minúsculo:", texto.toLowerCase());
}
analisarTexto("JavaScript");

function oQueFazEssaFuncao(frase) {  // verifica se contém a frase JavaScript
    console.log(frase.includes("JavaScript"));
}
oQueFazEssaFuncao("Eu estudo JavaScript"); //verifica se contém a frase JavaScript

function eEssaAqui(nome,curso) { //Junta String //concatena
    return "Aluno:" + nome + "| Curso:" + curso;
}
console.log(eEssaAqui("José", "Front-End")); //Junta String // concatena


