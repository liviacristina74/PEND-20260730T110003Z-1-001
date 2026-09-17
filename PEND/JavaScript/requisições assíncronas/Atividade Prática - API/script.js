const botao = document.getElementById("buscarCEP");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", consultarCep);

async function consultarCep() {

    const cep = document.getElementById("cep").value.trim();

    // Verifica se o CEP possui 8 números
    if (!/^\d{8}$/.test(cep)) {

        resultado.innerHTML = `
            <p class="erro">
                Digite um CEP válido com 8 números.
            </p>
        `;

        return;
    }

    resultado.innerHTML = " Consultando...";

    try {

        // URL da API pública ViaCEP
        const resposta = await fetch(
            `https://viacep.com.br/ws/${cep}/json/`
        );

        // Verifica se a resposta da API foi recebida corretamente
        if (!resposta.ok) {
            throw new Error("Erro ao consultar a API.");
        }

        // Converte a resposta para JSON
        const dados = await resposta.json();

        // Verifica se o CEP existe
        if (dados.erro) {

            resultado.innerHTML = `
                <p class="erro">
                    CEP não encontrado.
                </p>
            `;

            return;
        }

        // Apresenta os dados recebidos no DOM
        resultado.innerHTML = `
            <div class="sucesso">

                <h2> Endereço encontrado</h2>

                <p><strong>CEP:</strong> ${dados.cep}</p>

                <p><strong>Logradouro:</strong> ${dados.logradouro}</p>

                <p><strong>Bairro:</strong> ${dados.bairro}</p>

                <p><strong>Cidade:</strong> ${dados.localidade}</p>

                <p><strong>Estado:</strong> ${dados.uf}</p>

            </div>
        `;

    } catch (erro) {

        // Tratamento de erro
        resultado.innerHTML = `
            <p class="erro">
                 Ocorreu um erro ao consultar a API.
                <br>
                Verifique sua conexão com a internet.
            </p>
        `;

        console.error(erro);
    }
}