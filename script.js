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

    function toggleActivePlayer() {
        activePlayer = activePlayer == player1? player2:player1;
    };

    const gameboard = document.querySelector('.gameboard');
    Array.from(gameboard.children).forEach((square, index) => {
        square.addEventListener('click', () => {
                square.classList.add(activePlayer.symbol);
                Gameboard.board[index] = activePlayer.symbol;
                toggleActivePlayer();
            });
        })

})();