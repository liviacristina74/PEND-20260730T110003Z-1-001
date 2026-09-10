// Acessando a câmera do usuário
// obtendo o audio do usuário
//api navigator.mediaDevices.getUserMedia({
//objeto de configuração
//media: true, audio:true})
navigator.mediaDevices.getUserMedia({
    audio:true
})
.then(function(stream){
    const video = document.querySelector("#camera");
    video.srcObject = stream;
})
// Função de erro
.catch(function(erro){
    console.log(("erro ao acessar a câmera: ", erro))
    ;
});