// URLs de imagens de exemplo para sucesso e erro
const urlSucesso = "https://cdn-icons-png.flaticon.com/512/190/190411.png";
const urlErro = "https://www.shutterstock.com/image-vector/no-location-icon-forbidden-geolocation-260nw-2220867273.jpg";

// Obtém a imagem do HTML através do ID
const imagem = document.getElementById("status-img");

// Obtendo a localização do usuário
navigator.geolocation.getCurrentPosition(
    function (posicao) {
        console.log("Latitude: " + posicao.coords.latitude);
        console.log("Longitude: " + posicao.coords.longitude);
        console.log("Precisão: " + posicao.coords.accuracy + " metros");

        // Altera o atributo src para a imagem de sucesso
        if (imagem) {
            imagem.src = urlSucesso;
            imagem.alt = "Localização obtida com sucesso";
        }
    },
    // Função de erro
    function (erro) {
        console.log("Não foi possível obter a localização. erro: ", erro.message);

        // Altera o atributo src para a imagem de erro
        if (imagem) {
            imagem.src = urlErro;
            imagem.alt = "Erro ao obter localização";
        }
    }
);