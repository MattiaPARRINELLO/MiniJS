const statusDisplay = document.querySelector('.game--status'); //game state element

let gameActive = true; //game active
let currentPlayer = "X"; //current player
let gameState = ["", "", "", "", "", "", "", "", ""]; //game state

const winningMessage = () => `Player ${currentPlayer} has won!`; //winning message

const drawMessage = () => `Game ended in a draw!`; //draw message

const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`; //current player turn

statusDisplay.innerHTML = currentPlayerTurn(); //display current player turn

const winningConditions = [ //winning conditions
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical
    [0, 4, 8], [2, 4, 6] //diagonal
];

function handleCellPlayed(clickedCell, clickedCellIndex) { //handle cell played
    gameState[clickedCellIndex] = currentPlayer; //update game state
    clickedCell.innerHTML = currentPlayer; //update cell
}

function handlePlayerChange() { //handle player change
    currentPlayer = currentPlayer === "X" ? "O" : "X"; //change current player
    statusDisplay.innerHTML = currentPlayerTurn(); //display current player turn
}

function handleResultValidation() { //handle result validation
    let roundWon = false; //round won

    for (let i = 0; i <= 7; i++) { //for each winning condition
        const winCondition = winningConditions[i]; //get winning condition
        let a = gameState[winCondition[0]]; //get a
        let b = gameState[winCondition[1]]; //get b
        let c = gameState[winCondition[2]]; //get c

        if (a === '' || b === '' || c === '') { //if a, b, or c is empty
            continue; //continue
        }
        if (a === b && b === c) { //if a, b, and c are equal
            roundWon = true; //round won
            break //break
        }
    }

    if (roundWon) { //if round won
        statusDisplay.innerHTML = winningMessage(); //display winning message
        gameActive = false; //game active
        return; //return
    }

    let roundDraw = !gameState.includes(""); //round draw

    if (roundDraw) { //if round draw
        statusDisplay.innerHTML = drawMessage(); //display draw message
        gameActive = false; //game active
        return; //return
    }

    handlePlayerChange(); //handle player change
}

function handleCellClick(clickedCellEvent) { //handle cell click
    const clickedCell = clickedCellEvent.target; //get clicked cell
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index')); //get clicked cell index

    if (gameState[clickedCellIndex] !== "" || !gameActive) { //if clicked cell is not empty or game is not active
        return; //return
    }

    handleCellPlayed(clickedCell, clickedCellIndex); //handle cell played
    handleResultValidation(); //handle result validation
}

function handleRestartGame() { //handle restart game
    gameActive = true; //game active
    currentPlayer = "X"; //current player
    gameState = ["", "", "", "", "", "", "", "", ""]; //game state

    statusDisplay.innerHTML = currentPlayerTurn(); //display current player turn
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = ""); //clear cells
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick)); //add event listener to each cell
document.querySelector('.game--restart').addEventListener('click', handleRestartGame); //add event listener to restart game