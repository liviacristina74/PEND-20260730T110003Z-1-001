// --- CONFIGURAÇÃO & ESTADO DA APLICAÇÃO ---
// ID do artista Luan Santana na API pública do MusicBrainz
const ARTIST_MBID = "1a00a94d-17bf-4f10-9b5a-27a3c3f9a72b";
const API_URL = `https://musicbrainz.org/ws/2/event?artist=${ARTIST_MBID}&fmt=json`;

let allEvents = []; // Guarda a lista completa vinda da API

// --- SELEÇÃO DE ELEMENTOS DO DOM ---
const eventsContainer = document.getElementById("eventsContainer");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resetBtn = document.getElementById("resetBtn");
const loadingEl = document.getElementById("loading");

// Elementos do Modal
const eventModal = document.getElementById("eventModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalLocation = document.getElementById("modalLocation");
const modalType = document.getElementById("modalType");
const favoriteBtn = document.getElementById("favoriteBtn");

// --- REQUISIÇÃO À API EXTERNA (Fetch API) ---
async function fetchLuanSantanaEvents() {
  showLoading(true);
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Falha ao carregar eventos da API.");

    const data = await response.json();
    allEvents = data.events || [];

    // Se a API não retornar eventos recentes no momento, geramos dados de demonstração
    if (allEvents.length === 0) {
      allEvents = getFallbackEvents();
    }

    renderEvents(allEvents);
  } catch (error) {
    console.warn("Erro na API, exibindo eventos de backup:", error);
    allEvents = getFallbackEvents();
    renderEvents(allEvents);
  } finally {
    showLoading(false);
  }
}

// --- MANIPULAÇÃO DO DOM: Renderizar Cards ---
function renderEvents(events) {
  // Limpa o container antes de adicionar novos elementos
  eventsContainer.innerHTML = "";

  if (events.length === 0) {
    eventsContainer.innerHTML = "<p>Nenhum evento encontrado para esta busca.</p>";
    return;
  }

  // Criação dinâmica de elementos
  events.forEach((event) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const dateFormatted = event.life_span?.begin || "Data a confirmar";
    const title = event.name || "Show Luan Santana";
    const type = event.type || "Concerto";

    card.innerHTML = `
      <div>
        <h3>${title}</h3>
        <p> <strong>Data:</strong> ${dateFormatted}</p>
        <p> <strong>Tipo:</strong> ${type}</p>
      </div>
      <button class="btn-details">Ver Detalhes</button>
    `;

    // Event listener para abrir detalhes
    const btnDetails = card.querySelector(".btn-details");
    btnDetails.addEventListener("click", () => openModal(event));

    eventsContainer.appendChild(card);
  });
}

// --- TRATAMENTO DE EVENTOS & FILTROS ---
function filterEvents() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const filtered = allEvents.filter((event) => {
    const nameMatch = event.name.toLowerCase().includes(searchTerm);
    const typeMatch = (event.type || "").toLowerCase().includes(searchTerm);
    return nameMatch || typeMatch;
  });
  renderEvents(filtered);
}

// --- MODAL (Abertura/Fechamento) ---
function openModal(event) {
  modalTitle.textContent = event.name || "Show Luan Santana";
  modalDate.textContent = event.life_span?.begin || "A confirmar";
  modalLocation.textContent = event.disambiguation || "Local a confirmar / Arena Principal";
  modalType.textContent = event.type || "Apresentação Ao Vivo";

  eventModal.classList.remove("hidden");
}

function closeModalWindow() {
  eventModal.classList.add("hidden");
}

// Controla o indicador visual de carregamento
function showLoading(isLoading) {
  if (isLoading) {
    loadingEl.classList.remove("hidden");
  } else {
    loadingEl.classList.add("hidden");
  }
}

// --- DADOS DE BACKUP (Fallback em caso de limites da API) ---
function getFallbackEvents() {
  return [
    {
      name: "Luan City 2.0 - São Paulo",
      type: "Festival / Solo",
      life_span: { begin: "2026-10-15" },
      disambiguation: "Allianz Parque, São Paulo - SP"
    },
    {
      name: "Turnê Luan Santana - Rio de Janeiro",
      type: "Show",
      life_span: { begin: "2026-11-20" },
      disambiguation: "Jeunesse Arena, Rio de Janeiro - RJ"
    },
    {
      name: "Luan Sunset - Belo Horizonte",
      type: "Open Air",
      life_span: { begin: "2026-12-05" },
      disambiguation: "Esplanada do Mineirão, Belo Horizonte - MG"
    },
    {
      name: "Especial de Fim de Ano Luan Santana",
      type: "Gravação DVD",
      life_span: { begin: "2026-12-28" },
      disambiguation: "Curitiba - PR"
    }
  ];
}

// --- EVENT LISTENERS ---
searchBtn.addEventListener("click", filterEvents);

searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") filterEvents();
});

resetBtn.addEventListener("click", () => {
  searchInput.value = "";
  renderEvents(allEvents);
});

closeModal.addEventListener("click", closeModalWindow);

// Fechar modal clicando fora da caixa de conteúdo
window.addEventListener("click", (e) => {
  if (e.target === eventModal) closeModalWindow();
});

favoriteBtn.addEventListener("click", () => {
  alert("Evento salvo nos seus favoritos!");
  closeModalWindow();
});

// --- INICIALIZAÇÃO ---
document.addEventListener("DOMContentLoaded", fetchLuanSantanaEvents);