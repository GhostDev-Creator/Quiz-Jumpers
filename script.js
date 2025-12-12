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

const loadRanking = () => {
    try {
        return JSON.parse(localStorage.getItem('marioRanking') || '[]');
    } catch {
        return [];
    }
};

const saveRanking = (ranking) => {
    localStorage.setItem('marioRanking', JSON.stringify(ranking.slice(0, 5)));
};

const updateRanking = (playerName, score) => {
    let ranking = loadRanking();
    const existingIndex = ranking.findIndex(r => r.name === playerName);
    
    if (existingIndex > -1) {
        if (score > ranking[existingIndex].score) {
            ranking[existingIndex].score = score;
        }
    } else {
        ranking.push({ name: playerName, score });
    }
    
    ranking.sort((a, b) => b.score - a.score);
    saveRanking(ranking);
    displayRanking();
};

const displayRanking = () => {
    const ranking = loadRanking();
    const table = document.querySelector('.table-ranking');
    table.innerHTML = '<div class="ranking-title">TOP 5</div>';
    
    ranking.slice(0, 5).forEach((player, index) => {
        const row = document.createElement('div');
        row.className = `ranking-row ${index === 0 ? 'rank-1' : ''}`;
        row.innerHTML = `
            <div class="ranking-position">#${index + 1}</div>
            <div class="ranking-player">${player.name}</div>
            <div class="ranking-score">${player.score}pts</div>
        `;
        table.appendChild(row);
    });
};

const currentPlayer = loadPlayer();
if (currentPlayer.score > 0) {
    updateRanking(currentPlayer.name.toUpperCase(), currentPlayer.score);
}

const mario = document.querySelector('.mario');
const marioSprites = mario.querySelectorAll('.mario-sprite');
const questionBlock = document.getElementById('questionBlock');
const pauseMenu = document.getElementById('pauseMenu');
const closeMenuBtn = document.getElementById('closeMenu');
const playerNameInput = document.getElementById('playerName');
const playerNameDisplay = document.getElementById('playerNameDisplay');
const startButton = document.querySelector('.start');
const gameOverScreen = document.getElementById('gameOverScreen');
const finalScoreElement = document.getElementById('finalScore');

const cloudsContainer = document.querySelector('.clouds-container');
const floorDetailsContainer = document.querySelector('.floor-details-container');

const jumpDurationMs = 480;
const speed = 3;
const marioWidth = 50;
const getContainerWidth = () => document.querySelector('.container').offsetWidth;
const MIN_CLOUD_SPAWN_INTERVAL = 550;
const MIN_DETAIL_SPAWN_INTERVAL = 800;
const cloudImagePath = './images/nuvem.png';
const floorDetailImages = ['./images/bush-1.png', './images/bush-2.png'];

let pressedKeys = {};
let score = 0;
let isJumping = false;
let questionBlockAlreadyHit = false;
let lastCloudSpawn = 0;
let lastFloorDetailSpawn = 0;
let isDead = false;
let deathTimeout = null;
let facingRight = true;
let isWalking = false;
let gamePaused = false;
let walkAnimationFrame = 0;
let lastWalkFrameTime = 0;
const WALK_FRAME_DURATION = 200;

playerNameDisplay.textContent = `JOGADOR: ${currentPlayer.name || 'MARIO'}`;
const playerScoreElement = document.getElementById('playerScore');
if (playerScoreElement) playerScoreElement.textContent = `PONTOS: 0`;

displayRanking();

const spriteStates = {
    idleRight: '.idle-right', idleLeft: '.idle-left',
    walkRight: '.walk-right', walkLeft: '.walk-left',
    jumpRight: '.jump-right', jumpLeft: '.jump-left', dead: '.dead'
};

const hideAllSprites = () => marioSprites.forEach(s => { s.classList.remove('active'); s.classList.add('hidden'); });
const showSprite = (spriteClass) => {
    hideAllSprites();
    const sprite = mario.querySelector(spriteClass);
    if (sprite) { sprite.classList.remove('hidden'); sprite.classList.add('active'); }
};

const updateMarioSprite = () => {
    if (isDead) { 
        showSprite(spriteStates.dead); 
        return; 
    }
    
    if (isJumping) { 
        showSprite(facingRight ? spriteStates.jumpRight : spriteStates.jumpLeft); 
        return; 
    }
    
    if (isWalking) {
        const sprite = walkAnimationFrame === 0 
            ? (facingRight ? spriteStates.idleRight : spriteStates.idleLeft)
            : (facingRight ? spriteStates.walkRight : spriteStates.walkLeft);
        showSprite(sprite);
    } else {
        showSprite(facingRight ? spriteStates.idleRight : spriteStates.idleLeft);
    }
};

const getRandomNumber = (min, max) => Math.random() * (max - min) + min;
const freezeGame = () => { gamePaused = true; pressedKeys = {}; document.body.style.pointerEvents = 'none'; };
const unfreezeGame = () => { gamePaused = false; document.body.style.pointerEvents = 'auto'; };

const showPauseMenu = () => {
    freezeGame();
    pauseMenu.classList.remove('hidden');
    playerNameInput.value = currentPlayer.name || 'MARIO';
    playerNameInput.focus();
    playerNameInput.select();
};

const handleStartButton = () => {
    const newPlayerName = playerNameInput.value.toUpperCase().trim() || 'MARIO';
    savePlayer({ name: newPlayerName, score: 0 });
    window.location.href = 'quiz/categorias.html?player=' + encodeURIComponent(newPlayerName) + '&score=' + score;
};

const closePauseMenu = () => {
    pauseMenu.classList.add('hidden');
    unfreezeGame();
    killMario();
};

const jump = () => {
    if (isJumping || isDead || gamePaused) return;
    
    isJumping = true;
    mario.classList.add('jump');
    updateMarioSprite();
    
    setTimeout(() => {
        mario.classList.remove('jump');
        isJumping = false;
        updateMarioSprite();
    }, jumpDurationMs);
};

const moveMario = () => {
    if (isDead || gamePaused) return;
    
    const currentLeft = parseFloat(getComputedStyle(mario).left) || 0;
    const containerWidth = getContainerWidth();
    let dx = 0;
    
    const isMovingRight = pressedKeys['ArrowRight'] || pressedKeys['d'] || pressedKeys['D'];
    const isMovingLeft = pressedKeys['ArrowLeft'] || pressedKeys['a'] || pressedKeys['A'];
    
    if (isMovingRight) { 
        dx += speed; 
        facingRight = true; 
        isWalking = true; 
    }
    else if (isMovingLeft) { 
        dx -= speed; 
        facingRight = false; 
        isWalking = true; 
    }
    else {
        isWalking = false;
        walkAnimationFrame = 0;
    }
    
    const now = performance.now();
    if (isWalking && now - lastWalkFrameTime > WALK_FRAME_DURATION) {
        walkAnimationFrame = 1 - walkAnimationFrame;
        lastWalkFrameTime = now;
    }
    
    updateMarioSprite();
    
    let newLeft = Math.max(0, Math.min(currentLeft + dx, containerWidth - marioWidth));
    mario.style.left = `${newLeft}px`;
};

const checkQuestionBlockCollision = () => {
    if (!isJumping || questionBlockAlreadyHit || isDead || gamePaused) return;
    
    const marioRect = mario.getBoundingClientRect();
    const blockRect = questionBlock.getBoundingClientRect();
    
    const horizontalOverlap = marioRect.left < blockRect.right && marioRect.right > blockRect.left;
    const headHitBlock = marioRect.top <= blockRect.bottom && marioRect.top >= blockRect.bottom - 15;
    
    if (horizontalOverlap && headHitBlock) {
        mario.classList.remove('jump');
        isJumping = false;
        
        questionBlockAlreadyHit = true;
        questionBlock.classList.add('hit');
        questionBlock.style.transform = 'translateY(-12px)';
        
        showPauseMenu();
        
        setTimeout(() => {
            questionBlock.classList.remove('hit');
            questionBlock.style.transform = 'translateY(0)';
            questionBlockAlreadyHit = false;
        }, 800);
    }
};

const killMario = () => {
    if (isDead) return;
    isDead = true;
    pressedKeys = {};
    isJumping = false;
    showSprite(spriteStates.dead);
    mario.classList.add('death');
    clearTimeout(deathTimeout);
    deathTimeout = setTimeout(() => {
        document.querySelector('.container')?.style.setProperty('opacity', '0.3');
        document.body.style.pointerEvents = 'all';
        finalScoreElement.textContent = score;
        gameOverScreen.classList.remove('hidden');
    }, 2500);
};

const restartGame = () => location.reload();

const createCloud = () => {
    const cloud = document.createElement('img');
    cloud.src = cloudImagePath;
    cloud.alt = 'Nuvem';
    const sizes = ['small', 'medium', 'large'];
    cloud.className = `cloud ${sizes[Math.floor(Math.random() * sizes.length)]}`;
    cloud.style.top = `${getRandomNumber(8, 35)}vh`;
    const duration = 15000 + Math.random() * 8000;
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
    const duration = 12000 + Math.random() * 6000;
    detail.style.animationDuration = `${duration}ms`;
    const removeDetail = () => detail.parentNode?.removeChild(detail);
    detail.addEventListener('animationend', removeDetail);
    setTimeout(removeDetail, duration + 1000);
    floorDetailsContainer.appendChild(detail);
};

const isMobileDevice = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    return (
        /android|iphone|ipad/i.test(userAgent) ||
        (/mobile/i.test(userAgent) && !/windows/i.test(userAgent)) ||
        (window.matchMedia("(pointer: coarse)").matches && window.innerWidth < 992)
    );
};

const createTouchControls = () => {
    if (!isMobileDevice()) {
        console.log('Desktop detectado - controles touch desabilitados');
        return;
    }
    
    console.log('Mobile detectado - criando controles touch OTIMIZADOS');
    
    const controls = document.createElement('div');
    controls.id = 'touch-controls';
    controls.style.cssText = `
        position: fixed;
        bottom: 15px;
        left: 15px;
        right: 15px;
        display: flex;
        justify-content: space-between;
        z-index: 1000;
        pointer-events: none;
        user-select: none;
        gap: 10px;
    `;
    
    const leftBtn = document.createElement('div');
    leftBtn.id = 'left-btn';
    leftBtn.innerHTML = '←';
    leftBtn.style.cssText = `
        width: 60px; height: 60px; 
        background: rgba(255,100,100,0.85);
        border-radius: 50%; 
        display: flex; align-items: center; justify-content: center;
        font-size: 22px; font-weight: bold; color: white; 
        text-shadow: 0 1px 3px rgba(0,0,0,0.7);
        pointer-events: auto; 
        box-shadow: 0 3px 10px rgba(0,0,0,0.4);
        transition: all 0.1s ease;
        border: 2px solid rgba(255,255,255,0.3);
    `;
    
    const rightBtn = document.createElement('div');
    rightBtn.id = 'right-btn';
    rightBtn.innerHTML = '→';
    rightBtn.style.cssText = leftBtn.style.cssText;
    
    const jumpBtn = document.createElement('div');
    jumpBtn.id = 'jump-btn';
    jumpBtn.innerHTML = '↑';
    jumpBtn.style.cssText = `
        width: 60px; height: 60px; 
        background: rgba(100,150,255,0.85);
        border-radius: 50%; 
        display: flex; align-items: center; justify-content: center;
        font-size: 22px; font-weight: bold; color: white; 
        text-shadow: 0 1px 3px rgba(0,0,0,0.7);
        pointer-events: auto; 
        box-shadow: 0 3px 10px rgba(0,0,0,0.4);
        transition: all 0.1s ease;
        border: 2px solid rgba(255,255,255,0.3);
    `;
    
    leftBtn.addEventListener('touchstart', (e) => { e.preventDefault(); pressedKeys['ArrowLeft'] = true; }, { passive: false });
    leftBtn.addEventListener('touchend', (e) => { e.preventDefault(); pressedKeys['ArrowLeft'] = false; }, { passive: false });
    rightBtn.addEventListener('touchstart', (e) => { e.preventDefault(); pressedKeys['ArrowRight'] = true; }, { passive: false });
    rightBtn.addEventListener('touchend', (e) => { e.preventDefault(); pressedKeys['ArrowRight'] = false; }, { passive: false });
    jumpBtn.addEventListener('touchstart', (e) => { e.preventDefault(); jump(); }, { passive: false });
    
    const leftRightContainer = document.createElement('div');
    leftRightContainer.style.cssText = 'display: flex; gap: 10px;';
    leftRightContainer.appendChild(leftBtn);
    leftRightContainer.appendChild(rightBtn);
    
    controls.appendChild(leftRightContainer);
    controls.appendChild(jumpBtn);
    document.body.appendChild(controls);
};

const fixMobileKeyboard = () => {
    if (!isMobileDevice()) return;
    
    const input = document.getElementById('playerName');
    if (!input) return;
    
    input.addEventListener('focus', () => {
        setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
        }, 200);
    });
    
    input.addEventListener('blur', () => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    });
};

fixMobileKeyboard();

const gameLoop = (timestamp) => {
    if (!isDead && !gamePaused) {
        moveMario();
        checkQuestionBlockCollision();
    }
    if (timestamp - lastCloudSpawn > MIN_CLOUD_SPAWN_INTERVAL && Math.random() > 0.7) {
        createCloud();
        lastCloudSpawn = timestamp;
    }
    if (timestamp - lastFloorDetailSpawn > MIN_DETAIL_SPAWN_INTERVAL && Math.random() > 0.6) {
        createFloorDetail();
        lastFloorDetailSpawn = timestamp;
    }
    requestAnimationFrame(gameLoop);
};

closeMenuBtn.addEventListener('click', closePauseMenu);
playerNameInput.addEventListener('keypress', (e) => e.key === 'Enter' && closePauseMenu());
startButton.addEventListener('click', handleStartButton);

document.addEventListener('keydown', (e) => {
    if (gamePaused || isDead) return;
    pressedKeys[e.key] = true;
    if ((e.code === 'Space' || e.key.toLowerCase() === 'w' || e.key === 'ArrowUp') && !isJumping) {
        e.preventDefault();
        jump();
    }
    if (e.key.toLowerCase() === 'k') killMario();
});

document.addEventListener('keyup', (e) => {
    if (gamePaused || isDead) return;
    pressedKeys[e.key] = false;
});

document.addEventListener('keydown', (e) => {
    if (!gameOverScreen.classList.contains('hidden') && e.code === 'Space') {
        e.preventDefault();
        restartGame();
    }
});

gameOverScreen.addEventListener('click', (e) => {
    if (!gameOverScreen.classList.contains('hidden')) {
        restartGame();
    }
});

gameOverScreen.addEventListener('touchstart', (e) => {
    if (!gameOverScreen.classList.contains('hidden')) {
        e.preventDefault();
        restartGame();
    }
}, { passive: false });

showSprite(spriteStates.idleRight);
createTouchControls();
createCloud();
createFloorDetail();
requestAnimationFrame(gameLoop);