const statusDisplay=document.querySelector(".game--status");let gameActive=!0,currentPlayer="X",gameState=["","","","","","","","",""];const winningMessage=()=>`Player ${currentPlayer} has won!`,drawMessage=()=>"Game ended in a draw!",currentPlayerTurn=()=>`It's ${currentPlayer}'s turn`;statusDisplay.innerHTML=currentPlayerTurn();const winningConditions=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function handleCellPlayed(e,t){gameState[t]=currentPlayer,e.innerHTML=currentPlayer}function handlePlayerChange(){currentPlayer="X"===currentPlayer?"O":"X",statusDisplay.innerHTML=currentPlayerTurn()}function handleResultValidation(){let e=!1;for(let t=0;t<=7;t++){const a=winningConditions[t];let n=gameState[a[0]],r=gameState[a[1]],l=gameState[a[2]];if(""!==n&&""!==r&&""!==l&&(n===r&&r===l)){e=!0;break}}return e?(statusDisplay.innerHTML=`Player ${currentPlayer} has won!`,void(gameActive=!1)):gameState.includes("")?void handlePlayerChange():(statusDisplay.innerHTML="Game ended in a draw!",void(gameActive=!1))}function handleCellClick(e){const t=e.target,a=parseInt(t.getAttribute("data-cell-index"));""===gameState[a]&&gameActive&&(handleCellPlayed(t,a),handleResultValidation())}function handleRestartGame(){gameActive=!0,currentPlayer="X",gameState=["","","","","","","","",""],statusDisplay.innerHTML=currentPlayerTurn(),document.querySelectorAll(".cell").forEach((e=>e.innerHTML=""))}document.querySelectorAll(".cell").forEach((e=>e.addEventListener("click",handleCellClick))),document.querySelector(".game--restart").addEventListener("click",handleRestartGame);