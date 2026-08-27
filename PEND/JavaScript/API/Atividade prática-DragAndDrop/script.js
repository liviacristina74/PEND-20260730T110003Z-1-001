const iceCreams = document.querySelectorAll('.ice-cream');
const coneTarget = document.getElementById('cone-target');
const scoopsList = document.getElementById('scoops-list');
const feedbackText = document.getElementById('feedback-text');

// Configura os eventos de arrastar para os sorvetes
iceCreams.forEach(iceCream => {
  iceCream.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', iceCream.id);
    iceCream.classList.add('dragging'); // Feedback 1: opacidade reduzida
  });

  iceCream.addEventListener('dragend', () => {
    iceCream.classList.remove('dragging');
  });
});

// Permite a soltura sobre a área da casquinha
coneTarget.addEventListener('dragover', (e) => {
  e.preventDefault();
  coneTarget.classList.add('drag-over'); // Feedback 2: destaque da casquinha
});

coneTarget.addEventListener('dragleave', () => {
  coneTarget.classList.remove('drag-over');
});

// Ação de soltar o sabor na casquinha
coneTarget.addEventListener('drop', (e) => {
  e.preventDefault();
  coneTarget.classList.remove('drag-over');

  const flavorId = e.dataTransfer.getData('text/plain');
  const draggedElement = document.getElementById(flavorId);

  if (draggedElement) {
    const flavorName = draggedElement.getAttribute('data-flavor');

    // Remove o texto inicial se for a primeira bola de sorvete
    if (feedbackText) {
      feedbackText.style.display = 'none';
    }

    // Criar elemento da bola adicionada
    const newScoop = document.createElement('div');
    newScoop.classList.add('scoop-item', flavorId);
    newScoop.textContent = `1x Bola de ${flavorName}`;

    // Ação pós-drop: Adiciona a bola à casquinha
    scoopsList.appendChild(newScoop);
  }
});