document.getElementById("conteudo").innerHTML = "<p>Olá, mundo DOM! (Código HTML = inner.HTML)</p>";

document.getElementById("mensagem").textContent = "Texto simples, sem HTML.(textContent)";

document.getElementById("foto").setAttribute("src", "https://plus.unsplash.com/premium_photo-1681488413814-423ace855935?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29yYSVDMyVBNyVDMyVBM298ZW58MHx8MHx8fDA%3D");
document.getElementById("foto").setAttribute("height", "200px");
document.getElementById("foto").setAttribute("width", "200px");

let url = document.getElementById("link").getAttribute("href");
console.log(url); 

document.getElementById("caixa").style.backgroundColor = "lightblue";

document.getElementById("alerta").classList.add("destaque");
document.getElementById("alert").classList.remove("oculto")
let novoParagrafo = document.createElement("p");

novoParagrafo.textContent = "Este elemento foi criado pelo JavaScript.";

document.getElementById("container").appendChild(novoParagrafo);

let novoItem = document.createElement("li");
novoItem.textContent = "Item novo";
document.getElementById("lista").appendChild(novoItem);

let item = document.getElementById("item1");
document.getElementById("list").removeChild(item);