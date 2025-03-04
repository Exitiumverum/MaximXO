const AUDIO = new Audio('./Blackened skies mix12.wav'); // Update the path as necessary

let gameBoard = createGameContainer();
let isXTurn = true;
let isGameOver = false;
let whoIsWinner = '';



if(isGameOver){
    console.log(`${whoIsWinner} is the winner`);
    document.querySelector('.modal .game-over').classList.remove('hidden');
    document.querySelector('.modal .draw').classList.remove('hidden');
}else{
    renderGameBoard();
}
if(!isGameOver){
document.addEventListener('click', handleCellClick);
}


function createGameContainer() {
    let gameContainer = document.createElement('div');
    
    let gameBoard = [];
    for (let i = 0; i < 3; i++) {
        gameBoard[i] = [];
        for (let j = 0; j < 3; j++) {
        gameBoard[i][j] = ' ';
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
    if(cell.classList.contains('btn')){
        AUDIO.pause();
        
        isXTurn = true;
        isGameOver = false;
        gameBoard = createGameContainer();
        console.log(whoIsWinner);
        
        document.querySelector('.winner').textContent = whoIsWinner;
        renderGameBoard();
        document.querySelector('.game-over').classList.add('hidden');
        document.querySelector('.draw').classList.add('hidden');
    }
    const row = cell.getAttribute('data-row');
    const col = cell.getAttribute('data-col');
    console.log(row, col);

    if (gameBoard[row][col] === ' ') {
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
        isGameOver = true;
        document.querySelector('.game-over').classList.remove('hidden');
        console.log(`${whoIsWinner} is the winner`);
        document.querySelector('.winner').textContent = whoIsWinner;
    }

    renderGameBoard();
}

function checkWin() {
    for (let i = 0; i < 3; i++) {
        if(gameBoard[i][0] === gameBoard[i][1] && gameBoard[i][1] === gameBoard[i][2] && gameBoard[i][0] !== ' '){
            whoIsWinner = gameBoard[i][0];
            return true;
        }
    }
   
    for(let i = 0; i < 3; i++){
        if(gameBoard[0][i] === gameBoard[1][i] && gameBoard[1][i] === gameBoard[2][i] && gameBoard[0][i] !== ' '){
            whoIsWinner = gameBoard[0][i];
            return true;
    }
    }

        if(gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2] && gameBoard[0][0] !== ' '){
            whoIsWinner = gameBoard[0][0];
            return true;
        }
        if(gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0] && gameBoard[0][2] !== ' '){
            whoIsWinner = gameBoard[0][2];
            return true;
        }

        if(gameBoard.every(row => row.every(cell => cell !== ' '))){
            openDrawModal();
        }
        return false;
        
}

function openDrawModal(){
    // Play the audio file
    AUDIO.currentTime = 209;
    AUDIO.play();

    document.querySelector('.draw').classList.remove('hidden');
    
    isGameOver = true;
}