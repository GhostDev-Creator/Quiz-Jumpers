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

const urlParams = new URLSearchParams(window.location.search);
const playerName = decodeURIComponent(urlParams.get('player') || 'MARIO');
const score = parseInt(urlParams.get('score') || '0');
const category = urlParams.get('category') || 'geral';

document.getElementById('playerNameDisplay').textContent = `JOGADOR: ${playerName}`;
document.getElementById('playerScore').textContent = `PONTOS: ${score}`;

let lastCloudSpawn = 0;
let lastFloorDetailSpawn = 0;
const MIN_CLOUD_SPAWN_INTERVAL = 4000;
const MIN_DETAIL_SPAWN_INTERVAL = 3500;
const cloudImagePath = '../images/nuvem.png';
const floorDetailImages = ['../images/bush-1.png', '../images/bush-2.png'];

const cloudsContainer = document.getElementById('cloudsContainer');
const floorDetailsContainer = document.getElementById('floorDetailsContainer');

const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

const createCloud = () => {
    const cloud = document.createElement('img');
    cloud.src = cloudImagePath;
    cloud.alt = 'Nuvem';
    const sizes = ['small', 'medium', 'large'];
    cloud.className = `cloud ${sizes[Math.floor(Math.random() * sizes.length)]}`;
    cloud.style.top = `${getRandomNumber(10, 40)}vh`;
    const duration = 20000 + Math.random() * 10000;
    cloud.style.animationDuration = `${duration}ms`;
    const removeCloud = () => cloud.parentNode?.removeChild(cloud);
    cloud.addEventListener('animationend', removeCloud);
    setTimeout(removeCloud, duration + 1000);
    cloudsContainer.appendChild(cloud);
};

const createFloorDetail = () => {
    const detail = document.createElement('img');
    detail.src = floorDetailImages[Math.floor(Math.random() * floorDetailImages.length)];
    detail.alt = 'Detalhe do Chão';
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
    if (timestamp - lastCloudSpawn > MIN_CLOUD_SPAWN_INTERVAL && Math.random() > 0.3) {
        createCloud();
        lastCloudSpawn = timestamp;
    }
    if (timestamp - lastFloorDetailSpawn > MIN_DETAIL_SPAWN_INTERVAL && Math.random() > 0.4) {
        createFloorDetail();
        lastFloorDetailSpawn = timestamp;
    }
    requestAnimationFrame(animateBackground);
};

const voltarCategorias = () => {
    window.location.href = `categorias.html?player=${encodeURIComponent(playerName)}&score=${score}`;
};

const selecionarNivel = (nivel) => {
    savePlayer({ name: playerName, score });

    window.location.href = `./${category}-quiz.html?player=${encodeURIComponent(playerName)}&score=${score}&nivel=${nivel}&category=${category}`;
};

document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') voltarCategorias();
    if (e.code === 'Enter' || e.code === 'Space') {
        const focused = document.activeElement;
        if (focused.classList.contains('escolha-nivel')) {
            const nivel = focused.querySelector('h1').textContent.toLowerCase();
            selecionarNivel(nivel);
        }
    }
});

requestAnimationFrame(animateBackground);
createCloud();
createFloorDetail();