// Função para criar os elementos do contador
function criarContador() {
    const container = document.getElementById('contador');

    // Criação do título
    const titulo = document.createElement('h2');
    titulo.innerText = 'Total';

    // Contador total
    const contadorTotal = document.createElement('h1');
    contadorTotal.innerText = '0';
    contadorTotal.id = 'total';

    // Função para atualizar o total
    function atualizarTotal() {
        const homens = parseInt(document.getElementById('contadorHomens').innerText);
        const mulheres = parseInt(document.getElementById('contadorMulheres').innerText);
        const total = homens + mulheres;
        document.getElementById('total').innerText = total;
    }

    // Botão de reset
    const resetButton = document.createElement('button');
    resetButton.innerHTML = '⟳';
    resetButton.className = 'reset';
    resetButton.onclick = function() {
        document.getElementById('contadorHomens').innerText = '0';
        document.getElementById('contadorMulheres').innerText = '0';
        atualizarTotal();
    };

    // Criação do contador de homens e mulheres
    function criarContadorGenero(titulo, id, imgSrc) {
        const containerGenero = document.createElement('div');
        containerGenero.className = 'gender-box';

        const iconeGenero = document.createElement('img');
        iconeGenero.src = imgSrc;

        const nomeGenero = document.createElement('h3');
        nomeGenero.innerText = titulo;

        const contadorGenero = document.createElement('h1');
        contadorGenero.innerText = '0';
        contadorGenero.className = 'counter';
        contadorGenero.id = id;

        // Botões de + e -
        const botaoMais = document.createElement('button');
        botaoMais.innerText = '+';
        botaoMais.onclick = function() {
            const contadorAtual = parseInt(contadorGenero.innerText);
            contadorGenero.innerText = contadorAtual + 1;
            atualizarTotal();
        };

        const botaoMenos = document.createElement('button');
        botaoMenos.innerText = '-';
        botaoMenos.className = 'red';
        botaoMenos.onclick = function() {
            const contadorAtual = parseInt(contadorGenero.innerText);
            if (contadorAtual > 0) {
                contadorGenero.innerText = contadorAtual - 1;
                atualizarTotal();
            }
        };

        // Adicionando os elementos ao container de gênero
        containerGenero.appendChild(iconeGenero);
        containerGenero.appendChild(nomeGenero);
        containerGenero.appendChild(botaoMais);
        containerGenero.appendChild(botaoMenos);
        containerGenero.appendChild(contadorGenero);

        return containerGenero;
    }

    // Adicionar os contadores de homens e mulheres
    const homens = criarContadorGenero('Homens', 'contadorHomens', 'https://img.icons8.com/ios/50/000000/user-male-circle.png');
    const mulheres = criarContadorGenero('Mulheres', 'contadorMulheres', 'https://img.icons8.com/ios/50/000000/user-female-circle.png');

    // Container para os contadores de gênero
    const genderContainer = document.createElement('div');
    genderContainer.className = 'gender-container';
    genderContainer.appendChild(homens);
    genderContainer.appendChild(mulheres);

    // Adicionar os elementos ao container principal
    container.appendChild(titulo);
    container.appendChild(contadorTotal);
    container.appendChild(resetButton);
    container.appendChild(genderContainer);
}

// Inicializar o contador ao carregar a página
window.onload = criarContador;
