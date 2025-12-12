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

const tempoPorNivel = { 'facil': 20, 'medio': 30, 'dificil': 35, 'expert': 40 };
const pontosPorNivel = { 'facil': 10, 'medio': 20, 'dificil': 30, 'expert': 40 };

let estadoJogo = { nome: '', categoria: '', nivel: '', nivelId: 0, pontuacao: 0, perguntaAtual: 0 };
let timerInterval;
let tempoRestante = 30;
let jogoBloqueado = false;
let perguntasAtuais = [];
let nivelAtual = 'facil';

const savePlayer = (p) => localStorage.setItem('marioPlayer', JSON.stringify(p));

function tocarSomAcerto() {
    const a = new (window.AudioContext || window.webkitAudioContext)();
    const o = a.createOscillator();
    const g = a.createGain();
    o.connect(g); g.connect(a.destination);
    o.frequency.setValueAtTime(800, a.currentTime);
    o.frequency.exponentialRampToValueAtTime(1200, a.currentTime + 0.1);
    g.gain.setValueAtTime(0.3, a.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, a.currentTime + 0.2);
    o.start(a.currentTime); o.stop(a.currentTime + 0.2);
}

function tocarSomErro() {
    const a = new (window.AudioContext || window.webkitAudioContext)();
    const o1 = a.createOscillator();
    const o2 = a.createOscillator();
    const g = a.createGain();
    o1.connect(g); o2.connect(g); g.connect(a.destination);
    o1.frequency.setValueAtTime(200, a.currentTime);
    o2.frequency.setValueAtTime(150, a.currentTime);
    g.gain.setValueAtTime(0.2, a.currentTime);
    g.gain.exponentialRampToValueAtTime(0.01, a.currentTime + 0.4);
    o1.start(a.currentTime); o2.start(a.currentTime);
    o1.stop(a.currentTime + 0.4); o2.stop(a.currentTime + 0.4);
}

function atualizarHeader() {
    const nome = document.getElementById('nome-jogador');
    const pts = document.getElementById('pontuacao');
    if (nome) nome.textContent = `JOGADOR: ${estadoJogo.nome}`;
    if (pts) pts.textContent = estadoJogo.pontuacao;
}

function atualizarTimer() {
    document.getElementById('timer').textContent = `${tempoRestante}s`;
    document.getElementById('timer').classList.toggle('perigo', tempoRestante <= 5);
    document.getElementById('pergunta-texto').innerHTML = perguntasAtuais[estadoJogo.perguntaAtual].texto;
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
    if (!perguntasPorNivel[estadoJogo.nivelId]) {
        document.getElementById('pergunta-texto').textContent = 'Erro: Nível não encontrado!';
        return;
    }
    perguntasAtuais = perguntasPorNivel[estadoJogo.nivelId];
    if (estadoJogo.perguntaAtual >= perguntasAtuais.length) {
        finalizarJogo();
        return;
    }
    const p = perguntasAtuais[estadoJogo.perguntaAtual];
    document.getElementById('pergunta-texto').innerHTML = p.texto;
    document.querySelectorAll('.escolha').forEach((d, i) => {
        d.querySelector('h1').textContent = p.respostas[i];
        d.classList.remove('resposta-correta', 'resposta-incorreta', 'selecionada');
        d.style.pointerEvents = 'auto';
        d.setAttribute('aria-pressed', 'false');
    });
    jogoBloqueado = false;
    iniciarTimer();
}

function checarResposta(e) {
    if (jogoBloqueado) return;
    jogoBloqueado = true;
    pararTimer();
    const d = e.currentTarget;
    const indice = Array.from(document.querySelectorAll('.escolha')).indexOf(d);
    const correta = perguntasAtuais[estadoJogo.perguntaAtual].correta;
    document.querySelectorAll('.escolha').forEach(x => x.style.pointerEvents = 'none');
    
    if (indice === correta) {
        const pontosNivel = pontosPorNivel[nivelAtual] || 10;
        estadoJogo.pontuacao += pontosNivel;
        d.classList.add('resposta-correta');
        d.setAttribute('aria-pressed', 'true');
        tocarSomAcerto();
    } else {
        d.classList.add('resposta-incorreta');
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
        perguntasAtuais[estadoJogo.perguntaAtual].texto + "<br><span style='color: #ff4444;'>Tempo esgotado!</span>";
    document.querySelectorAll('.escolha')[correta].classList.add('resposta-correta');
    document.querySelectorAll('.escolha').forEach(x => x.style.pointerEvents = 'none');
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
    const pontosNivel = pontosPorNivel[nivelAtual] || 10;
    const pontosMaximos = total * pontosNivel;
    const acertos = Math.round(estadoJogo.pontuacao / pontosNivel);
    
    document.getElementById('pergunta-texto').innerHTML =
        `Fim do jogo!<br>Pontuação: ${estadoJogo.pontuacao}/${pontosMaximos}<br>Você acertou ${acertos}/${total} perguntas!<br><small>Redirecionando...</small>`;
    document.querySelectorAll('.escolha').forEach(d => d.style.display = 'none');
    savePlayer({ name: estadoJogo.nome, score: estadoJogo.pontuacao });
    setTimeout(() => {
        window.location.href = '../index.html';
    }, 4000);
}

function voltarInicio() {
    const params = new URLSearchParams({
        player: estadoJogo.nome,
        score: estadoJogo.pontuacao,
        category: estadoJogo.categoria,
        nivel: estadoJogo.nivel
    });
    window.location.href = 'categorias.html?' + params.toString();
}

document.addEventListener('DOMContentLoaded', function () {
    const url = new URLSearchParams(window.location.search);
    estadoJogo.nome = decodeURIComponent(url.get('player') || 'MARIO');
    estadoJogo.categoria = url.get('category') || 'culinaria';
    estadoJogo.nivel = url.get('nivel') || 'facil';
    estadoJogo.nivelId = { 'facil': 1, 'medio': 2, 'dificil': 3, 'expert': 4 }[estadoJogo.nivel] || 1;
    nivelAtual = estadoJogo.nivel;
    estadoJogo.pontuacao = parseInt(url.get('score') || '0');
    atualizarHeader();
    
    document.querySelectorAll('.escolha').forEach(d => {
        d.addEventListener('click', checarResposta);
        d.addEventListener('keydown', function (e) {
            if ((e.key === 'Enter' || e.key === ' ') && !jogoBloqueado) {
                e.preventDefault();
                checarResposta({ currentTarget: this });
            }
        });
    });
    carregarPergunta();
});
