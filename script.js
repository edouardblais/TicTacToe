const createPlayer = (name, symbol) => {
    return { name, symbol };
};

const Gameboard = (() => {
    let board = [];
    for (let i=0; i<9; i++) {
        board.push('');
    }
    
    const gameboard = document.querySelector('.gameboard');
    
    board.forEach(() => {
        const square = document.createElement('div');
        square.classList.add('square');
        gameboard.appendChild(square);
    }) 

    return { board }

})();

const Gameflow = (() => {
    const player1 = createPlayer('Player 1', 'X');
    const player2 = createPlayer('Player 2', 'O');

    let activePlayer = player1;
    
    let winningConfigurations = [];

    let totalSquares = 9;

    let win = false;

    function updateWinningConfigurations() {
       winningConfigurations = [];
       winningConfigurations = [
        [Gameboard.board[0], Gameboard.board[1], Gameboard.board[2]],
        [Gameboard.board[3], Gameboard.board[4], Gameboard.board[5]], 
        [Gameboard.board[6], Gameboard.board[7], Gameboard.board[8]], 
        [Gameboard.board[0], Gameboard.board[3], Gameboard.board[6]], 
        [Gameboard.board[1], Gameboard.board[4], Gameboard.board[7]], 
        [Gameboard.board[2], Gameboard.board[5], Gameboard.board[8]], 
        [Gameboard.board[0], Gameboard.board[4], Gameboard.board[8]], 
        [Gameboard.board[2], Gameboard.board[4], Gameboard.board[6]]
       ];
    };

    function toggleActivePlayer() {
        activePlayer = activePlayer == player1? player2:player1;
    };

    function checkWin() {
        updateWinningConfigurations();
        for (let i = 0; i <winningConfigurations.length; i++) {
            for (let j = 0; j < 3; j++) {
                if (winningConfigurations[i][0] === 'X' && winningConfigurations[i][1] === 'X' && winningConfigurations[i][2] === 'X') {
                    console.log('Player 1 wins');
                    win = true;
                    resetGame()
                } else if (winningConfigurations[i][0] === 'O' && winningConfigurations[i][1] === 'O' && winningConfigurations[i][2] === 'O') {
                    console.log('Player 2 wins');
                    win = true;
                    resetGame();
                };
            };
        };
    };

    function checkIfSquareLeft() {
        if (totalSquares === 0 && win === false) {
            console.log('Draw!');
            resetGame();
        }
    }

    function resetGame() {
        Array.from(gameboard.children).forEach((square, index) => {
            square.classList.remove('X');
            square.classList.remove('O');
            Gameboard.board[index] = '';
            totalSquares = 9;
            win = false;
        })
    }
    
    const gameboard = document.querySelector('.gameboard');

    Array.from(gameboard.children).forEach((square, index) => {
        square.addEventListener('click', () => {
                square.classList.add(activePlayer.symbol);
                Gameboard.board[index] = activePlayer.symbol;
                totalSquares = totalSquares - 1;
                checkWin();
                checkIfSquareLeft();
                toggleActivePlayer();
            });
        })

})();