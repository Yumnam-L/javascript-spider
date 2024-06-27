let currentPlayer = 'X';
let gameActive = true;
let gridSize = 3;
let gameState = Array(gridSize * gridSize).fill('');
let timer;
let timeLeft = 10;

document.addEventListener('DOMContentLoaded', () => {
    createGrid(gridSize);
    startTimer();
    document.getElementById('reset-btn').addEventListener('click', resetGame);
});

function createGrid(size) {
    const gridElement = document.getElementById('grid');
    gridElement.innerHTML = '';
    gridElement.style.gridTemplateColumns = `repeat(${size}, 100px)`;
    gameState = Array(size * size).fill('');
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-index', i);
        cell.addEventListener('click', handleCellClick);
        gridElement.appendChild(cell);
    }
}

function handleCellClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (gameState[index] !== '' || !gameActive) {
        return;
    }

    gameState[index] = currentPlayer;
    cell.textContent = currentPlayer;
    if (checkWinner()) {
        document.getElementById('player-turn').textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
        clearInterval(timer);
    } else if (!gameState.includes('')) {
        document.getElementById('player-turn').textContent = 'Draw!';
        gameActive = false;
        clearInterval(timer);
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.getElementById('player-turn').textContent = `Player ${currentPlayer}'s turn`;
        resetTimer();
    }
}

function checkWinner() {
    const winConditions = [];
    for (let i = 0; i < gridSize; i++) {
        winConditions.push(Array.from({ length: gridSize }, (_, k) => i * gridSize + k));
        winConditions.push(Array.from({ length: gridSize }, (_, k) => k * gridSize + i));
    }
    winConditions.push(Array.from({ length: gridSize }, (_, k) => k * gridSize + k));
    winConditions.push(Array.from({ length: gridSize }, (_, k) => (k + 1) * gridSize - (k + 1)));

    return winConditions.some(condition => condition.every(index => gameState[index] === currentPlayer));
}

function startTimer() {
    timeLeft = 10;
    document.getElementById('time-left').textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft -= 1;
        document.getElementById('time-left').textContent = timeLeft;
        if (timeLeft === 0) {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('player-turn').textContent = `Player ${currentPlayer}'s turn`;
            resetTimer();
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    startTimer();
}

function resetGame() {
    gameActive = true;
    currentPlayer = 'X';
    document.getElementById('player-turn').textContent = `Player ${currentPlayer}'s turn`;
    createGrid(gridSize);
    resetTimer();
}

// Add event listener to dynamically change grid size
document.addEventListener('keydown', (event) => {
    if (event.key === '3') {
        gridSize = 3;
    } else if (event.key === '4') {
        gridSize = 4;
    } else if (event.key === '5') {
        gridSize = 5;
    } else {
        return;
    }
    resetGame();
});
