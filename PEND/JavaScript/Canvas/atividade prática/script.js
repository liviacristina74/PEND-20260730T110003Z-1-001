const canvas = document.getElementById('canvas');
const contexto = canvas.getContext('2d');

contexto.lineWidth = 6; // Define a largura da linha
contexto.lineCap = 'round'; // Define o estilo das extremidades da linha
contexto.lineJoin = 'round'; // Define o estilo das junções da linha
contexto.strokeStyle = 'black'; // Define a cor da linha

//desenho da cabeça do boneco
contexto.beginPath();
contexto.arc(100, 30, 20, 0, Math.PI * 2);
contexto.stroke();

//desenho do corpo do boneco
contexto.beginPath();
contexto.moveTo(100, 50);
contexto.lineTo(100, 150);
contexto.stroke();

//desenho dos braços do boneco
contexto.beginPath();
contexto.moveTo(100, 70);
contexto.lineTo(50, 100);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(100, 70);
contexto.lineTo(150, 100);
contexto.stroke();

//desenho das pernas do boneco
contexto.beginPath();
contexto.moveTo(100, 150);
contexto.lineTo(50, 200);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(100, 150);
contexto.lineTo(150, 200);
contexto.stroke();
