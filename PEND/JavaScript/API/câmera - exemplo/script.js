// Acessando a câmera do usuário
// obtendo o audio do usuário
//api navigator.mediaDevices.getUserMedia({
//objeto de configuração
//media: true, audio:true})

const video = document.querySelector("#camera");
const canvas = document.querySelector("#canvas");
const botao = document.querySelector("#botao");
const foto = document.querySelector("#foto");

navigator.mediaDevices.getUserMedia({
    video:true
})
.then(function(stream){
    video.srcObject = stream;
})
// Função de erro
.catch(function(erro){
    console.log(("erro ao acessar a câmera: ", erro))
    ;
});

// canvas + camera
botao.addEventListener("click", function(){
    
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;

    const contexto = canvas.getContext("2d");

    contexto.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height       
    );

    foto.src = canvas.toDataURL("image/png");
});

// permitir que o usuário tire foto com a tecla espaço
document.addEventListener("keydown", function(event){
    if(event.code === "Space"){
        botao.click();
    }
});
