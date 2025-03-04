const gameBoard = createGameContainer();
let isXTurn = true;
let whoIsWinner = '';


renderGameBoard();

document.addEventListener('click', handleCellClick);

function createGameContainer() {
    let gameContainer = document.createElement('div');
    
    let gameBoard = [];
    for (let i = 0; i < 3; i++) {
        gameBoard[i] = [];
        for (let j = 0; j < 3; j++) {
        gameBoard[i][j] = 'A';
    }
}
return gameBoard;
}

function renderGameBoard() {
    let gameContainer = document.querySelector('.game-container');
    gameContainer.innerHTML = '';

    // Create a table element
    const table = document.createElement('table');
    table.classList.add('game-board');

    for (let i = 0; i < 3; i++) {
        // Create a table row
        const row = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            // Create a table cell
            const cell = document.createElement('td');
            cell.classList.add('game-cell');
            cell.setAttribute('data-row', i);
            cell.setAttribute('data-col', j);
            cell.textContent = gameBoard[i][j]; // Populate cell with game board value
            row.appendChild(cell);
        }
        table.appendChild(row); // Add row to table
    }
    
    gameContainer.appendChild(table); // Add table to game container
}

function handleCellClick(event) {
    const cell = event.target;
    const row = cell.getAttribute('data-row');
    const col = cell.getAttribute('data-col');
    console.log(row, col);

    if (gameBoard[row][col] === 'A') {
        if (isXTurn) {
        gameBoard[row][col] = 'X';
        isXTurn = false;
        console.log(isXTurn);
        
    } 
        else{
            gameBoard[row][col] = '0';
            isXTurn = true;
        console.log(isXTurn);

        }
    }
    if(checkWin()){
        console.log(`${whoIsWinner} is the winner`);
    }

    renderGameBoard();
}

function checkWin() {
    for (let i = 0; i < 3; i++) {
        if(gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2] && gameBoard[i][0] !== 'A'){
            whoIsWinner = gameBoard[i][0];
            return true;
        }
    }
    
        if(gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2] && gameBoard[0][0] !== 'A'){
            whoIsWinner = gameBoard[0][0];
            return true;
        }
        if(gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0] && gameBoard[0][2] !== 'A'){
            whoIsWinner = gameBoard[0][2];
            return true;
        }
        return false;
        
}