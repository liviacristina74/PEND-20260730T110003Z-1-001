console.log("Olá, JavaScript");

let a = 10;
let b = 3;

console.log("adição + : " , a + b);
console.log("subtração - :" , a-b);
console.log("multiplicação * :" , a * b);
console.log("divisão / :" , a / b);
console.log("resto de divisão % :" , a % b);
console.log("exponenciação ** :" , a ** b);

let contador = 5;
contador++;
console.log(contador);


let nota1 = 8.5
let nota2 = 7.0
let nota3 = 9.0

let media = (nota1 + nota2 + nota3) / 3;
console.log (media)

let dividendo = 10;
let divisor = 3;
let resto = dividendo % divisor; // 10 / 3 = 3 com resto 1

console.log(resto); // Resultado: 1

let x = 10;
let y = "10";

console.log("igual(valor):" , x == y);
console.log("Igual(valor e tipo):"  , x === y);
console.log( "Diferente(valor):" ,x != y);
console.log("Diferente(valor e tipo):" , x !== y);

//Exercicios
//3. Comparar idade para verificar se é maior de idade
//4. Comparar dois números e mostrar qual é maior

let idade = 20; // Exemplo de idade

if (idade >= 18) {
    console.log("A pessoa é maior de idade.");
} else {
    console.log("A pessoa é menor de idade.");
}

let num1 = 10;
let num2 = 25;

if (num1 > num2) {
    console.log("O maior número é: " + num1);
} else if (num2 > num1) {
    console.log("O maior número é: " + num2);
} else {
    console.log("Os números são iguais.");
}

console.log("operadores.lógicos");
let idade2 = 20;
let temCarteira = true

console.log(idade2 >= 18 && temCarteira);

let chovendo = false;
let guardaChuva = true;

console.log(chovendo || guardaChuva);

let ligado = false; 

console.log(!ligado); // true 

//5.Verificar se um aluno foi aprovado (nota >= 7 e frequência >= 75%)
//6.Verificar acesso com login OU token 

let nota = 7; 
let frequencia = 80;

if (nota >= 7 && frequencia >= 75 ) {
    console.log("Aluno aprovado");
} else {
    console.log("Aluno reprovado");
}

let login = true
let token = false

if (login == true || token == true){
    console.log("você entrou!");
}

