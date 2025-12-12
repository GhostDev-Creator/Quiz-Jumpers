const perguntasPorNivel = {
    1: [
        {
            texto: "O que os seres vivos precisam para respirar?",
            respostas: ["Oxigênio", "Hidrogênio", "Nitrogênio", "Hélio"],
            correta: 0
        },
        {
            texto: "Qual astro ilumina a Terra durante o dia?",
            respostas: ["Lua", "Sol", "Júpiter", "Estrela Polar"],
            correta: 1
        },
        {
            texto: "Qual destes é um estado físico da água?",
            respostas: ["Gasoso", "Líquido", "Sólido", "Todos os anteriores"],
            correta: 3
        },
        {
            texto: "Qual é o planeta onde nós vivemos?",
            respostas: ["Vênus", "Terra", "Marte", "Júpiter"],
            correta: 1
        },
        {
            texto: "Qual destes animais é um mamífero?",
            respostas: ["Sapo", "Tartaruga", "Cachorro", "Cobra"],
            correta: 2
        },
        {
            texto: "Qual destes órgãos faz parte do sistema respiratório?",
            respostas: ["Coração", "Pulmões", "Fígado", "Rins"],
            correta: 1
        },
        {
            texto: "Qual é a principal fonte de energia da Terra?",
            respostas: ["Lua", "Sol", "Vento", "Plantas"],
            correta: 1
        },
        {
            texto: "O que a água se torna quando congela?",
            respostas: ["Vapor", "Gelo", "Nuvem", "Chuva"],
            correta: 1
        },
        {
            texto: "Qual desses animais vive na água?",
            respostas: ["Cachorro", "Gato", "Peixe", "Galinha"],
            correta: 2
        },
        {
            texto: "A Terra é...",
            respostas: ["Plana", "Redonda", "Triangular", "Quadrada"],
            correta: 1
        }
    ],

    2: [
        {
            texto: "Qual gás é essencial para a fotossíntese?",
            respostas: ["Oxigênio", "Dióxido de Carbono", "Hidrogênio", "Metano"],
            correta: 1
        },
        {
            texto: "Em qual camada da Terra encontramos magma?",
            respostas: ["Crosta", "Manto", "Núcleo Externo", "Núcleo Interno"],
            correta: 1
        },
        {
            texto: "Qual órgão é responsável por bombear sangue?",
            respostas: ["Pulmões", "Estômago", "Coração", "Rins"],
            correta: 2
        },
        {
            texto: "Qual destas é uma fonte de energia renovável?",
            respostas: ["Carvão", "Petróleo", "Energia Solar", "Gás Natural"],
            correta: 2
        },
        {
            texto: "Como se chama o processo das plantas produzirem seu próprio alimento?",
            respostas: ["Digestão", "Respiração", "Fotossíntese", "Germinação"],
            correta: 2
        },
        {
            texto: "Qual é o maior órgão do corpo humano?",
            respostas: ["Cérebro", "Coração", "Pele", "Fígado"],
            correta: 2
        },
        {
            texto: "A camada de ozônio protege contra:",
            respostas: ["Raios infravermelhos", "Radiação ultravioleta", "Som", "Calor"],
            correta: 1
        },
        {
            texto: "Quantos cromossomos tem um ser humano?",
            respostas: ["23", "46", "64", "92"],
            correta: 1
        },
        {
            texto: "Qual destes animais é um invertebrado?",
            respostas: ["Cavalo", "Elefante", "Borboleta", "Cachorro"],
            correta: 2
        },
        {
            texto: "Como se chama a transformação da água em vapor?",
            respostas: ["Solidificação", "Evaporação", "Condensação", "Sublimação"],
            correta: 1
        }
    ],

    3: [
        {
            texto: "Qual destes planetas possui o maior número de luas conhecidas?",
            respostas: ["Terra", "Marte", "Júpiter", "Vênus"],
            correta: 2
        },
        {
            texto: "Qual é o principal gás responsável pelo efeito estufa?",
            respostas: ["Oxigênio", "Nitrogênio", "Dióxido de Carbono", "Hélio"],
            correta: 2
        },
        {
            texto: "Qual é o nome do processo que transforma energia química em energia celular?",
            respostas: ["Fotossíntese", "Respiração Celular", "Fermentação", "Eletrólise"],
            correta: 1
        },
        {
            texto: "Qual é o metal líquido à temperatura ambiente?",
            respostas: ["Ferro", "Mercúrio", "Cobre", "Alumínio"],
            correta: 1
        },
        {
            texto: "Qual camada atmosférica fica mais próxima da superfície da Terra?",
            respostas: ["Estratosfera", "Troposfera", "Mesosfera", "Ionosfera"],
            correta: 1
        },
        {
            texto: "Qual é a unidade básica da vida?",
            respostas: ["Molécula", "Célula", "Orgão", "Tecido"],
            correta: 1
        },
        {
            texto: "Qual destes cientistas formulou as leis do movimento?",
            respostas: ["Einstein", "Galileu", "Newton", "Bohr"],
            correta: 2
        },
        {
            texto: "O DNA está localizado principalmente onde?",
            respostas: ["Centríolos", "Mitocôndrias", "Núcleo", "Lisossomos"],
            correta: 2
        },
        {
            texto: "O que é um eclipse solar?",
            respostas: ["A Lua passa atrás da Terra", "A Terra cobre a Lua", "A Lua bloqueia a luz do Sol", "O Sol apaga momentaneamente"],
            correta: 2
        },
        {
            texto: "Qual fenômeno explica o arco-íris?",
            respostas: ["Refração da Luz", "Eco", "Magnetismo", "Gravidade"],
            correta: 0
        }
    ],

    4: [
        {
            texto: "Qual teoria afirma que o universo está se expandindo?",
            respostas: ["Teoria da Matéria Escura", "Teoria da Relatividade Especial", "Teoria da Expansão Global", "Teoria do Big Bang"],
            correta: 3
        },
        {
            texto: "Qual partícula é responsável por definir o elemento químico?",
            respostas: ["Nêutron", "Próton", "Elétron", "Fóton"],
            correta: 1
        },
        {
            texto: "Qual fenômeno quântico descreve partículas se comportando como ondas?",
            respostas: ["Dualidade onda-partícula", "Superposição", "Emaranhamento", "Tunelamento"],
            correta: 0
        },
        {
            texto: "A fotossíntese ocorre principalmente em qual estrutura celular?",
            respostas: ["Mitocôndria", "Cloroplasto", "Ribossomo", "Retículo Endoplasmático"],
            correta: 1
        },
        {
            texto: "Qual é o segundo elemento mais abundante no universo?",
            respostas: ["Hidrogênio", "Hélio", "Oxigênio", "Carbono"],
            correta: 1
        },
        {
            texto: "Qual é a principal função da mitocôndria?",
            respostas: ["Produção de energia", "Síntese proteica", "Armazenamento genético", "Digestão celular"],
            correta: 0
        },
        {
            texto: "O que é um exoplaneta?",
            respostas: ["Planeta fora do Sistema Solar", "Planeta morto", "Planeta sem atmosfera", "Planeta sem órbita"],
            correta: 0
        },
        {
            texto: "O que é entropia?",
            respostas: ["Medida de organização", "Medida de gravidade", "Medida de desordem", "Tipo de energia"],
            correta: 2
        },
        {
            texto: "Qual força mantém os planetas em órbita?",
            respostas: ["Força Elétrica", "Força Magnética", "Força Gravitacional", "Força Nuclear"],
            correta: 2
        },
        {
            texto: "O que explica a mudança de frequências observada em ondas emitidas por estrelas em movimento?",
            respostas: ["Efeito Doppler", "Efeito Coriolis", "Efeito Raman", "Efeito Zeeman"],
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
    estadoJogo.categoria = urlParams.get('category') || 'ciencias';
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
