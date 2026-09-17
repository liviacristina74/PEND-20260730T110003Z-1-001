const botao = document.getElementById("buscarUsuarios");
const resultado = document.getElementById("resultado");
const queryselector = document.getElementById("querySelector");
const idUsuario = document.getElementById("idUsuario");

// // fetch + then +catch
// botao.addEventListener("click", () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(resposta => resposta.json())
//         .then(dados => {
//             //console.log(dados);
//             resultado.innerHTML = "";

//             dados.forEach(usuario => {
//                 resultado.innerHTML += `
//         <p>
//             <strong>${usuario.name}</strong> <br>
//             ${usuario.email} <br>
//             ${usuario.phone} <br>
//             ${usuario.website}
//         </p>
//         <hr>
//     `;
//             });

//         })
//         .catch(erro => {
//             console.log(" erro: " + erro);
//         });
// })

// fetch + async + await
// botao.addEventListener("click", async () => {
//     try {
//         const resposta = await fetch(
//            "https://jsonplaceholder.typicode.com/users"
//         );
//         const dados = await resposta.json();
//         resultado.innerHTML = "";

//         dados.forEach(usuario => {
//             resultado.innerHTML += `
//         <p>
//             <strong>${usuario.name}</strong> <br>
//             $(usuario.email)
//             </p>
//             <hr>
//         `;
//         }
//         );
//     } catch (erro) {
//         resultado.innerHTML = "Erro ao buscar usuários.";
//         console.log(erro);
//     }
// });

botao.addEventListener("click", async () => {

    const id = idUsuario.value;

    if (id === "") {
        resultado.innerHTML = "Por favor, insira um ID de usuário.";
        return;
    }
    try {
        const resposta = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const dados = await resposta.json();
        resultado.innerHTML += `
        <p>
            <strong>${dados.name}</strong> <br>
            ${dados.email} <br>
            ${dados.address.city} <br>
            ${dados.phone}


        </p>
        <hr>
        `;
    } catch (erro) {
        resultado.innerHTML = "Erro ao buscar usuários.";
        console.log(erro);
    }
});
