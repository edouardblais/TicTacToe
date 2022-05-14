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

    const winningConfigurations = [
        [Gameboard.board[0], Gameboard.board[1], Gameboard.board[2]], 
        [Gameboard.board[3], Gameboard.board[4], Gameboard.board[5]], 
        [Gameboard.board[6], Gameboard.board[7], Gameboard.board[8]], 
        [Gameboard.board[0], Gameboard.board[3], Gameboard.board[6]], 
        [Gameboard.board[1], Gameboard.board[4], Gameboard.board[7]], 
        [Gameboard.board[2], Gameboard.board[5], Gameboard.board[8]], 
        [Gameboard.board[0], Gameboard.board[4], Gameboard.board[8]], 
        [Gameboard.board[2], Gameboard.board[4], Gameboard.board[6]]
    ];

    function toggleActivePlayer() {
        activePlayer = activePlayer == player1? player2:player1;
    };

    function checkWin() {
        winningConfigurations.forEach((i) => {
            if (i === [activePlayer.symbol, activePlayer.symbol, activePlayer.symbol]) {
                console.log('winner!')
            }
        })
    }

    const gameboard = document.querySelector('.gameboard');
    Array.from(gameboard.children).forEach((square, index) => {
        square.addEventListener('click', () => {
                square.classList.add(activePlayer.symbol);
                Gameboard.board[index] = activePlayer.symbol;
                checkWin();
                toggleActivePlayer();
            });
        })

})();