const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

// Configura a linha
// contexto.strokeStyle = "black"; // Define a cor da linha
// contexto.lineWidth = 2;        // Define a largura (opcional)

// Desenho da linha
contexto.beginPath();
contexto.moveTo(10, 0);      // Inicia em (10, 0) para não cortar na borda superior
contexto.lineTo(50, 200);
contexto.lineTo(50,10);
contexto.stroke();

//desenho do retângulo
contexto.fillRect(50,50,150,100); // Desenha um retângulo preenchido com a cor atual de preenchimento
contexto.strokeRect(250,50,150,100); // Desenha um retângulo contornado com a cor atual de contorno

//desenho do círculo
contexto.beginPath();
contexto.arc(250, 250, 50, 0, Math.PI * 2); // Desenha um círculo no ponto (250, 250) com raio 50
contexto.stroke(); // Contorna o círculo
