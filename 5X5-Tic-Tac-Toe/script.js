const cells = document.querySelectorAll('.cell');
const restart = document.getElementById('button');
const board = Array(16).fill('');
const WinPatterns = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20]
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
