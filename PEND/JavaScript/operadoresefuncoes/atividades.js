// Data e hora atual
const data = new Date();

function formatarDoisDigitos(numero) {
  return (numero < 10 ? "0" : "") + numero;
}

const dia = formatarDoisDigitos(data.getDate());
const mes = formatarDoisDigitos(data.getMonth() + 1);
const ano = data.getFullYear();
const horas = formatarDoisDigitos(data.getHours());
const minutos = formatarDoisDigitos(data.getMinutes());
const segundos = formatarDoisDigitos(data.getSeconds());

console.log(`${horas}:${minutos}:${segundos} ${dia}/${mes}/${ano}`);
console.log("Dia:", dia);
console.log("Minutos:", minutos);


// Função para soma e média
function calcularSomaEMedia(num1, num2) {
  const soma = num1 + num2;
  const media = soma / 2;

  console.log("Soma:", soma);
  console.log("Média:", media);
}

calcularSomaEMedia(10, 5);


// Função para processar nome
function processarNome(nome) {
  const quantidade = nome.length;
  const nomeMaiusculo = nome.toUpperCase();

  console.log("Quantidade de letras:", quantidade);
  console.log("Nome em maiúsculo:", nomeMaiusculo);
}

processarNome("João Silva");


// Função para verificar se contém HTML
function verificaHTML(frase) {
  return frase.toLowerCase().includes("html");
}

console.log(verificaHTML("Eu amo programar em HTML!"));
console.log(verificaHTML("JavaScript é diferente de html."));
console.log(verificaHTML("Vamos aprender CSS?"));
