const perguntasPorNivel = {
    1: [
        {
            texto: "Qual alimento é comum no café da manhã em muitos países?",
            respostas: ["Arroz", "Ovo", "Peixe cru", "Pimenta"],
            correta: 1
        },
        {
            texto: "Qual destes é um tipo de massa italiana?",
            respostas: ["Sushi", "Spaghetti", "Taco", "Curry"],
            correta: 1
        },
        {
            texto: "O sushi é um prato tradicional de qual país?",
            respostas: ["China", "Japão", "Coreia do Sul", "Tailândia"],
            correta: 1
        },
        {
            texto: "Qual destes é um prato mexicano?",
            respostas: ["Taco", "Pizza", "Croissant", "Samosa"],
            correta: 0
        },
        {
            texto: "O brigadeiro é um doce típico de qual país?",
            respostas: ["Brasil", "Portugal", "Argentina", "Espanha"],
            correta: 0
        },
        {
            texto: "Qual fruta é muito consumida em todo o mundo?",
            respostas: ["Banana", "Jabuticaba", "Caju", "Figo-da-Índia"],
            correta: 0
        },
        {
            texto: "A pizza é originalmente de qual país?",
            respostas: ["França", "Espanha", "Itália", "Alemanha"],
            correta: 2
        },
        {
            texto: "Guacamole é feito principalmente de:",
            respostas: ["Tomate", "Abacate", "Banana", "Cenoura"],
            correta: 1
        },
        {
            texto: "Que ingrediente é comum em sobremesas no mundo todo?",
            respostas: ["Sal", "Açúcar", "Pimenta", "Orégano"],
            correta: 1
        },
        {
            texto: "Qual bebida é tradicional em muitas culturas?",
            respostas: ["Leite", "Refrigerante", "Água com gás", "Chá"],
            correta: 3
        }
    ],

    2: [
        {
            texto: "O curry é um prato tradicional de qual região?",
            respostas: ["Índia", "Chile", "Canadá", "África do Sul"],
            correta: 0
        },
        {
            texto: "Qual destas comidas é considerada 'street food' mundial?",
            respostas: ["Pipoca", "Lagosta", "Foie gras", "Sushi de luxo"],
            correta: 0
        },
        {
            texto: "Qual é o principal ingrediente do hummus?",
            respostas: ["Ervilha", "Grão-de-bico", "Soja", "Milho"],
            correta: 1
        },
        {
            texto: "A paella é um prato típico de qual país?",
            respostas: ["Espanha", "Itália", "Marrocos", "Grécia"],
            correta: 0
        },
        {
            texto: "O macaron é uma sobremesa famosa de qual país?",
            respostas: ["França", "Alemanha", "Egito", "China"],
            correta: 0
        },
        {
            texto: "O ramen é um tipo de:",
            respostas: ["Doce", "Sopa de macarrão", "Carne assada", "Arroz temperado"],
            correta: 1
        },
        {
            texto: "Qual país é famoso pelo chocolate?",
            respostas: ["Suíça", "Peru", "Índia", "Egito"],
            correta: 0
        },
        {
            texto: "O falafel é típico de qual região?",
            respostas: ["Oriente Médio", "Escandinávia", "Polinésia", "Austrália"],
            correta: 0
        },
        {
            texto: "O kimchi é um alimento tradicional da:",
            respostas: ["China", "Coreia", "Índia", "Tailândia"],
            correta: 1
        },
        {
            texto: "Qual prato é feito com arroz e açafrão na culinária espanhola?",
            respostas: ["Risoto", "Paella", "Tempurá", "Pad Thai"],
            correta: 1
        }
    ],

    3: [
        {
            texto: "Qual país é reconhecido mundialmente pela produção de azeite de oliva?",
            respostas: ["Grécia", "Japão", "Canadá", "Coreia do Sul"],
            correta: 0
        },
        {
            texto: "A culinária mediterrânea é caracterizada pelo consumo de:",
            respostas: ["Carnes processadas", "Azeite e vegetais", "Fast food", "Doces industrializados"],
            correta: 1
        },
        {
            texto: "Qual destes pratos é tradicional do Oriente Médio?",
            respostas: ["Ceviche", "Kebab", "Nhoque", "Tempurá"],
            correta: 1
        },
        {
            texto: "A técnica culinária 'fermentação' é muito usada para produzir:",
            respostas: ["Sopas", "Pães", "Carnes grelhadas", "Massas"],
            correta: 1
        },
        {
            texto: "A gastronomia japonesa valoriza principalmente:",
            respostas: ["Sabor extremamente forte", "Frituras pesadas", "Freshness e equilíbrio", "Molhos apimentados"],
            correta: 2
        },
        {
            texto: "O prato 'Pad Thai' é originário de qual país?",
            respostas: ["Vietnam", "Tailândia", "Filipinas", "Laos"],
            correta: 1
        },
        {
            texto: "O ingrediente principal do ceviche é:",
            respostas: ["Carne bovina", "Peixe cru marinado", "Frango cozido", "Vegetais crus"],
            correta: 1
        },
        {
            texto: "A culinária mexicana é famosa pelo uso de:",
            respostas: ["Pimenta e milho", "Açafrão e peixe", "Coco e banana", "Batata e queijo"],
            correta: 0
        },
        {
            texto: "O tofu é um alimento feito de:",
            respostas: ["Trigo", "Soja", "Milho", "Amendoim"],
            correta: 1
        },
        {
            texto: "O pesto tradicional é feito com manjericão, alho, azeite, sal e:",
            respostas: ["Castanha-do-pará", "Nozes", "Amêndoas", "Pinoli"],
            correta: 3
        }
    ],

    4: [
        {
            texto: "A fusão gastronômica acontece quando:",
            respostas: ["Misturam-se técnicas e ingredientes de culturas diferentes", "Cozinham em alta pressão", "Usam apenas ingredientes locais", "Retiram todos os temperos"],
            correta: 0
        },
        {
            texto: "Qual destes países tem culinária considerada patrimônio imaterial da humanidade?",
            respostas: ["México", "Rússia", "Suécia", "Canadá"],
            correta: 0
        },
        {
            texto: "O wagyu é um tipo de carne reconhecido por:",
            respostas: ["Ser extremamente apimentado", "Alta marmorização", "Vir de aves", "Ter baixo teor de gordura"],
            correta: 1
        },
        {
            texto: "O miso é produzido por meio de:",
            respostas: ["Fritura", "Fermentação da soja", "Congelamento", "Defumação"],
            correta: 1
        },
        {
            texto: "O açafrão é uma das especiarias mais caras do mundo por causa:",
            respostas: ["Da falta de sabor", "Da forma complexa de cultivo e colheita", "Do excesso de produção", "Do baixo uso culinário"],
            correta: 1
        },
        {
            texto: "A gastronomia molecular estuda:",
            respostas: ["Sementes", "Reações físico-químicas dos alimentos", "Cozinhar apenas no micro-ondas", "Herança cultural dos pratos"],
            correta: 1
        },
        {
            texto: "O prato 'Pho' é tradicional de qual país?",
            respostas: ["Laos", "Vietnam", "Malásia", "Coreia"],
            correta: 1
        },
        {
            texto: "O ghee, usado na culinária indiana, é um tipo de:",
            respostas: ["Leite de coco", "Manteiga clarificada", "Farinha de arroz", "Molho apimentado"],
            correta: 1
        },
        {
            texto: "O termo 'umami' refere-se a:",
            respostas: ["Sabor doce", "Sabor salgado", "Sabor azedo", "Sabor agradável/completo"],
            correta: 3
        },
        {
            texto: "O tempeh é feito a partir de soja fermentada e é tradicional de:",
            respostas: ["Indonésia", "China", "Índia", "Japão"],
            correta: 0
        }
    ]
};

const tempoPorNivel = {
    'facil': 20,
    'medio': 30,
    'dificil': 35,
    'expert': 40
};

let estadoJogo = {
    nome: '',
    categoria: '',
    nivel: '',
    nivelId: 0,
    pontuacao: 0,
    perguntaAtual: 0
};

let timerInterval;
let tempoRestante = 30;
let jogoBloqueado = false;
let perguntasAtuais = [];
let nivelAtual = 'facil';

const loadPlayer = () => {
    try {
        return JSON.parse(localStorage.getItem('marioPlayer') || '{}');
    } catch {
        return { name: 'MARIO', score: 0 };
    }
};

const savePlayer = (player) => {
    localStorage.setItem('marioPlayer', JSON.stringify(player));
};

function tocarSomAcerto() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);

    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);

    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + 0.2);
}

function tocarSomErro() {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator1 = audioCtx.createOscillator();
    const oscillator2 = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator1.connect(gainNode);
    oscillator2.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator1.frequency.setValueAtTime(200, audioCtx.currentTime);
    oscillator2.frequency.setValueAtTime(150, audioCtx.currentTime);

    gainNode.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);

    oscillator1.start(audioCtx.currentTime);
    oscillator2.start(audioCtx.currentTime);
    oscillator1.stop(audioCtx.currentTime + 0.4);
    oscillator2.stop(audioCtx.currentTime + 0.4);
}

function atualizarHeader() {
    const nomeJogador = document.getElementById('nome-jogador');
    const pontuacaoSpan = document.getElementById('pontuacao');

    if (nomeJogador) nomeJogador.textContent = `JOGADOR: ${estadoJogo.nome}`;
    if (pontuacaoSpan) pontuacaoSpan.textContent = estadoJogo.pontuacao;
}

function atualizarTimer() {
    const timerEl = document.getElementById('timer');
    const perguntaEl = document.getElementById('pergunta-texto');

    timerEl.textContent = `${tempoRestante}s`;
    timerEl.classList.toggle('perigo', tempoRestante <= 5);

    perguntaEl.innerHTML = `${perguntasAtuais[estadoJogo.perguntaAtual].texto}`;
}

function iniciarTimer() {
    tempoRestante = tempoPorNivel[nivelAtual] || 30;
    atualizarTimer();

    timerInterval = setInterval(() => {
        tempoRestante--;
        atualizarTimer();

        if (tempoRestante <= 0) {
            clearInterval(timerInterval);
            respostaErradaPorTempo();
        }
    }, 1000);
}

function pararTimer() {
    clearInterval(timerInterval);
}

function carregarPergunta() {
    if (estadoJogo.nivelId === 0 || !perguntasPorNivel[estadoJogo.nivelId]) {
        document.getElementById('pergunta-texto').textContent = 'Erro: Nível não encontrado!';
        return;
    }

    perguntasAtuais = perguntasPorNivel[estadoJogo.nivelId];

    if (estadoJogo.perguntaAtual >= perguntasAtuais.length) {
        finalizarJogo();
        return;
    }

    const pergunta = perguntasAtuais[estadoJogo.perguntaAtual];
    document.getElementById('pergunta-texto').innerHTML = pergunta.texto;

    document.querySelectorAll('.escolha').forEach((div, i) => {
        div.querySelector('h1').textContent = pergunta.respostas[i];
        div.classList.remove('resposta-correta', 'resposta-incorreta', 'selecionada');
        div.style.pointerEvents = 'auto';
        div.setAttribute('aria-pressed', 'false');
    });

    jogoBloqueado = false;
    iniciarTimer();
}

function checarResposta(e) {
    if (jogoBloqueado) return;

    jogoBloqueado = true;
    pararTimer();

    const divEscolha = e.currentTarget;
    const indice = Array.from(document.querySelectorAll('.escolha')).indexOf(divEscolha);
    const correta = perguntasAtuais[estadoJogo.perguntaAtual].correta;

    document.querySelectorAll('.escolha').forEach(div => {
        div.style.pointerEvents = 'none';
    });

    if (indice === correta) {
        estadoJogo.pontuacao += 10;
        divEscolha.classList.add('resposta-correta');
        divEscolha.setAttribute('aria-pressed', 'true');
        tocarSomAcerto();
    } else {
        divEscolha.classList.add('resposta-incorreta');
        document.querySelectorAll('.escolha')[correta].classList.add('resposta-correta');
        tocarSomErro();
    }

    atualizarHeader();
    savePlayer({ name: estadoJogo.nome, score: estadoJogo.pontuacao });

    setTimeout(() => {
        estadoJogo.perguntaAtual++;
        carregarPergunta();
    }, 2000);
}

function respostaErradaPorTempo() {
    if (jogoBloqueado) return;

    jogoBloqueado = true;
    tocarSomErro();

    const correta = perguntasAtuais[estadoJogo.perguntaAtual].correta;

    document.getElementById('pergunta-texto').innerHTML =
        `${perguntasAtuais[estadoJogo.perguntaAtual].texto}<br><span style="color: #ff4444;">Tempo esgotado!</span>`;

    document.querySelectorAll('.escolha')[correta].classList.add('resposta-correta');
    document.querySelectorAll('.escolha').forEach(div => {
        div.style.pointerEvents = 'none';
    });

    atualizarHeader();
    savePlayer({ name: estadoJogo.nome, score: estadoJogo.pontuacao });

    setTimeout(() => {
        estadoJogo.perguntaAtual++;
        carregarPergunta();
    }, 2000);
}

function finalizarJogo() {
    pararTimer();
    const total = perguntasAtuais.length;
    document.getElementById('pergunta-texto').innerHTML =
        `Fim do jogo!<br>Pontuação: ${estadoJogo.pontuacao}/${total * 10}<br>Você acertou ${Math.round(estadoJogo.pontuacao / 10)}/${total} perguntas!<br><small>Redirecionando...</small>`;

    document.querySelectorAll('.escolha').forEach(div => {
        div.style.display = 'none';
    });

    savePlayer({ name: estadoJogo.nome, score: estadoJogo.pontuacao });

    setTimeout(() => {
        window.location.href = '../index.html';
    }, 4000);
}

function voltarInicio() {
    window.location.href = 'categorias.html';
}

const cloudsContainer = document.getElementById('cloudsContainer');
const floorDetailsContainer = document.getElementById('floorDetailsContainer');
let lastCloudSpawn = 0;
let lastFloorDetailSpawn = 0;

const createCloud = () => {
    const cloud = document.createElement('img');
    cloud.src = '../images/nuvem.png';
    cloud.alt = 'Nuvem';
    const sizes = ['small', 'medium', 'large'];
    cloud.className = `cloud ${sizes[Math.floor(Math.random() * sizes.length)]}`;
    cloud.style.top = `${Math.random() * 30 + 10}vh`;
    const duration = 20000 + Math.random() * 10000;
    cloud.style.animationDuration = `${duration}ms`;
    const removeCloud = () => cloud.parentNode?.removeChild(cloud);
    cloud.addEventListener('animationend', removeCloud);
    setTimeout(removeCloud, duration + 1000);
    cloudsContainer.appendChild(cloud);
};

const createFloorDetail = () => {
    const detail = document.createElement('img');
    detail.src = '../images/bush-1.png';
    detail.alt = 'Detalhe';
    const sizes = ['small', 'medium', 'large'];
    detail.className = `floor-detail ${sizes[Math.floor(Math.random() * sizes.length)]}`;
    const duration = 15000 + Math.random() * 8000;
    detail.style.animationDuration = `${duration}ms`;
    const removeDetail = () => detail.parentNode?.removeChild(detail);
    detail.addEventListener('animationend', removeDetail);
    setTimeout(removeDetail, duration + 1000);
    floorDetailsContainer.appendChild(detail);
};

const animateBackground = (timestamp) => {
    if (timestamp - lastCloudSpawn > 4000 && Math.random() > 0.3) {
        createCloud();
        lastCloudSpawn = timestamp;
    }
    if (timestamp - lastFloorDetailSpawn > 3500 && Math.random() > 0.4) {
        createFloorDetail();
        lastFloorDetailSpawn = timestamp;
    }
    requestAnimationFrame(animateBackground);
};

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    estadoJogo.nome = decodeURIComponent(urlParams.get('player') || 'MARIO');
    estadoJogo.categoria = urlParams.get('category') || 'culinaria';
    estadoJogo.nivel = urlParams.get('nivel') || 'facil';
    estadoJogo.nivelId = { 'facil': 1, 'medio': 2, 'dificil': 3, 'expert': 4 }[estadoJogo.nivel] || 1;
    nivelAtual = estadoJogo.nivel;

    estadoJogo.pontuacao = 0;

    savePlayer({ name: estadoJogo.nome, score: 0 });

    atualizarHeader();

    document.querySelectorAll('.escolha').forEach(div => {
        div.addEventListener('click', checarResposta);

        div.addEventListener('keydown', function (e) {
            if ((e.key === 'Enter' || e.key === ' ') && !jogoBloqueado) {
                e.preventDefault();
                checarResposta({ currentTarget: this });
            }
        });
    });

    carregarPergunta();
    requestAnimationFrame(animateBackground);
});
