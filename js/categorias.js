const urlParams = new URLSearchParams(window.location.search);
let playerName = decodeURIComponent(urlParams.get('player') || 'MARIO');
playerName = playerName.toUpperCase();

const score = parseInt(urlParams.get('score') || '0');

document.getElementById('playerNameDisplay').textContent = `JOGADOR: ${playerName}`;
document.getElementById('playerScore').textContent = `PONTOS: ${score}`;

let isDead = false;
let animationId = null;
let lastCloudSpawn = 0;
const MIN_CLOUD_SPAWN_INTERVAL = 600;
const cloudImagePath = '../images/nuvem.png';

const marioPatrol = document.getElementById('marioPatrol');
const patrolSprites = marioPatrol.querySelectorAll('.mario-sprite');
let patrolDirection = 1;
let patrolPos = 10;
let isPatrolJumping = false;
let patrolWalkingFrame = 0;
let lastWalkFrameTime = 0;
const PATROL_WALK_FRAME_DURATION = 300;

const hideAllPatrolSprites = () =>
    patrolSprites.forEach(s => {
        s.classList.remove('active');
        s.classList.add('hidden');
    });

const showPatrolSprite = (spriteClass) => {
    hideAllPatrolSprites();
    const sprite = marioPatrol.querySelector(spriteClass);
    if (sprite) {
        sprite.classList.remove('hidden');
        sprite.classList.add('active');
    }
};

const createCloud = () => {
    const cloudsContainer = document.querySelector('.clouds-container');
    const cloud = document.createElement('img');
    cloud.src = cloudImagePath;
    cloud.alt = 'Nuvem';

    const sizes = ['small', 'medium', 'large'];
    cloud.className = `cloud ${sizes[Math.floor(Math.random() * sizes.length)]}`;
    cloud.style.top = `${Math.random() * 27 + 8}vh`;

    const duration = 15000 + (Math.random() * 8000);
    cloud.style.animationDuration = `${duration}ms`;

    const removeCloud = () => cloud.parentNode?.removeChild(cloud);
    cloud.addEventListener('animationend', removeCloud);
    setTimeout(removeCloud, duration + 1000);

    cloudsContainer.appendChild(cloud);
};

const patrolMario = (timestamp) => {
    animationId = requestAnimationFrame(patrolMario);
    const now = performance.now();
    const containerWidth = window.innerWidth;

    if (timestamp - lastCloudSpawn > MIN_CLOUD_SPAWN_INTERVAL && Math.random() > 0.7) {
        createCloud();
        lastCloudSpawn = timestamp;
    }

    if (patrolPos >= containerWidth - 100) {
        patrolDirection = -1;
    } else if (patrolPos <= 10) {
        patrolDirection = 1;
    }

    patrolPos += 2 * patrolDirection;

    if (Math.random() < 0.02 && !isPatrolJumping) {
        isPatrolJumping = true;
        marioPatrol.style.bottom = '200px';
        showPatrolSprite(patrolDirection > 0 ? '.patrol-jump-right' : '.patrol-jump-left');

        setTimeout(() => {
            marioPatrol.style.bottom = '80px';
            isPatrolJumping = false;
        }, 500);

    } else if (!isPatrolJumping && now - lastWalkFrameTime > PATROL_WALK_FRAME_DURATION) {
        patrolWalkingFrame = 1 - patrolWalkingFrame;
        lastWalkFrameTime = now;

        const sprite = patrolDirection > 0
            ? (patrolWalkingFrame === 0 ? '.patrol-right' : '.patrol-walk-right')
            : (patrolWalkingFrame === 0 ? '.patrol-left' : '.patrol-walk-left');

        showPatrolSprite(sprite);
    }

    marioPatrol.style.left = patrolPos + 'px';
};

const killPatrolMario = () => {
    if (isDead) return;
    isDead = true;

    if (animationId) cancelAnimationFrame(animationId);

    showPatrolSprite('.patrol-dead');
    marioPatrol.classList.add('death');

    document.querySelectorAll('.cloud').forEach(cloud => cloud.style.animationPlayState = 'paused');
    document.getElementById('backgroundContainer').style.opacity = '0.4';

    setTimeout(showGameOverScreen, 2500);
};

const showGameOverScreen = () => {
    const oldOverlay = document.querySelector('.game-over-overlay');
    if (oldOverlay) oldOverlay.remove();

    const overlay = document.createElement('div');
    overlay.className = 'game-over-overlay';
    overlay.onclick = restartGame;
    overlay.style.cssText = `
        position: fixed;
        top: 0; left: 0;
        width: 100vw; height: 100dvh;
        background: rgba(0,0,0,0.95);
        z-index: 10000;
        backdrop-filter: blur(8px);
        padding: env(safe-area-inset-top) 0 env(safe-area-inset-bottom) 0;
        box-sizing: content-box;
    `;

    const gameOverBox = document.createElement('div');
    gameOverBox.style.cssText = `
        position: fixed;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(145deg, #8B0000, #DC143C);
        border: 8px solid #0F0600;
        border-top: 8px solid #FF4500;
        border-left: 8px solid #FF4500;
        padding: clamp(25px, 8vw, 50px);
        border-radius: 20px;
        text-align: center;
        font-family: 'Press Start 2P', monospace;
        color: #FFF;
        box-shadow: 20px 20px 0px #0F0600;
        max-width: clamp(300px, 90vw, 450px);
        width: 90vw;
        max-height: 70vh;
        overflow-y: auto;
        margin-bottom: env(safe-area-inset-bottom);
        z-index: 10001;
    `;

    gameOverBox.innerHTML = `
        <h1 style="
            font-size: clamp(20px, 10vw, 32px); 
            color: #FFD700; 
            text-shadow: 5px 5px 0px #000; 
            margin: 0 0 clamp(15px, 5vh, 30px) 0; 
            letter-spacing: 2px;
        ">GAME OVER</h1>
        <p style="
            font-size: clamp(14px, 6vw, 20px); 
            margin: clamp(15px, 5vh, 25px) 0; 
            text-shadow: 3px 3px 0px #000;
            line-height: 1.4;
        ">
            <span style="color: #FF6B35; font-size: clamp(16px, 7vw, 24px); font-weight: bold;">${playerName}</span><br>
            Pontos Finais: <span style="color: #FFD700; font-size: clamp(18px, 8vw, 28px); font-weight: bold;">${score}</span>
        </p>
        <div style="
            background: linear-gradient(145deg, #FF6B35, #FF8C42); 
            border: 5px solid #0F0600; 
            border-top: 5px solid #FAC2A7;
            border-left: 5px solid #FAC2A7;
            padding: clamp(12px, 4vw, 20px) clamp(25px, 8vw, 40px); 
            margin-top: clamp(20px, 6vh, 30px); 
            cursor: pointer; 
            display: inline-block; 
            box-shadow: 10px 10px 0px #0F0600; 
            font-size: clamp(12px, 4vw, 16px);
            border-radius: 10px;
            font-family: 'Press Start 2P', monospace;
            text-shadow: 2px 2px 0px #0F0600;
            transition: all 0.2s ease;
        " onclick="restartGame()" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='14px 14px 0px #0F0600'" 
        onmouseout="this.style.transform=''; this.style.boxShadow='10px 10px 0px #0F0600'">IR AO INICIO</div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(gameOverBox);
};

const goBackToGame = () => killPatrolMario();

const restartGame = () => {
    window.location.href = '../index.html';
};

const selectCategory = (category) => {
    window.location.href = `${category}-nivel.html?player=${encodeURIComponent(playerName)}&score=${score}&category=${category}`;
};

document.addEventListener('keydown', (e) => {
    if (isDead && e.code === 'Space') restartGame();
});

requestAnimationFrame(patrolMario);