const cells = document.querySelectorAll('.cell');
const winningMessageTextElement = document.querySelector('.winning-message');
const restartButton = document.getElementById('restart-button');

const xClass = 'x';
const circleClass = 'circle';

let currentPlayer = xClass;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleClick(cell) {
    const cellClass = currentPlayer;
    cell.classList.add(cellClass);
    cell.removeEventListener('click', handleClick);
    if (checkWin(cellClass)) {
        endGame(false);
    } else if (isDraw()) {
        endGame(true);
    } else {
        swapPlayer();
    }
}

function checkWin(cellClass) {
    return winningConditions.some(condition => {
        return condition.every(index => {
            return cells[index].classList.contains(cellClass);
        });
    });
}

function isDraw() {
    return [...cells].every(cell => {
        return cell.classList.contains(xClass) || cell.classList.contains(circleClass);
    });
}

function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!';
    } else {
        winningMessageTextElement.innerText = `${currentPlayer} Wins!`;
    }
    winningMessageTextElement.classList.add('show');
    restartButton.classList.add('show');
}

function restartGame() {
    currentPlayer = xClass;
    winningMessageTextElement.classList.remove('show');
    restartButton.classList.remove('show');
    cells.forEach(cell => {
        cell.classList.remove(xClass);
        cell.classList.remove(circleClass);
        cell.addEventListener('click', handleClick);
    });
}

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

restartButton.addEventListener('click', restartGame);