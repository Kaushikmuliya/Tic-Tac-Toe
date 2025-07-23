const cells = document.querySelectorAll('.cell');
const restart = document.getElementById('button');
const board = Array(16).fill('');
const WinPatterns = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
]

let currentPlayer = 'X';
cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (cell.textContent === '') {
            board[index] = currentPlayer;
            cell.textContent = currentPlayer;
            cell.className = 'cell';
            cell.classList.add(currentPlayer);
        }
        if (checkWin(currentPlayer)) {
            setTimeout(() => {
                alert(currentPlayer + ' Wins!');
                board.fill('');
                cells.forEach(cell => {
                    cell.textContent = '';
                    cell.className = 'cell';
                });
                currentPlayer = 'X';
            }, 300);
        }
        else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
    );
});

function checkWin(player) {
    return WinPatterns.some(pattern => {
        return pattern.every(index => (board[index] === player));
    });
}

restart.addEventListener('click', () => {
    board.fill('');
    cells.forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'X';
});
