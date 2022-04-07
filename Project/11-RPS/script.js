let jeu = ['rock', 'paper', 'scissors']; 
let userScore = 0; 
let computerScore = 0; 
let rock = '✊' 
let paper = '✋' 
let scissors = '✌️' 
function button(type) { 
    var computer = Math.floor(Math.random() * 3); 
    var computerChoice = jeu[computer]; 
    var userChoice = type; 
    if (userChoice === computerChoice) { 
        if (userChoice === 'rock') { 
            userChoice = rock; 
        } else if (userChoice === 'paper') { 
            userChoice = paper; 
        } else if (userChoice === 'scissors') { 
            userChoice = scissors; 
        }
        if (computerChoice === 'rock') { 
            computerChoice = rock; 
        } else if (computerChoice === 'paper') { 
            computerChoice = paper; 
        } else if (computerChoice === 'scissors') { 
            computerChoice = scissors; 
        }
        document.getElementById('userChoice').innerHTML = userChoice; 
        document.getElementById('computerChoice').innerHTML = computerChoice; 
        tie();
    } else if (userChoice === 'rock' && computerChoice === 'paper') { 
        document.getElementById('userChoice').innerHTML = rock; 
        document.getElementById('computerChoice').innerHTML = paper; 
        loose(); 
    } else if (userChoice === 'rock' && computerChoice === 'scissors') { 
        document.getElementById('userChoice').innerHTML = rock; 
        document.getElementById('computerChoice').innerHTML = scissors; 
        win(); 
    } else if (userChoice === 'paper' && computerChoice === 'rock') { 
        document.getElementById('userChoice').innerHTML = paper; 
        document.getElementById('computerChoice').innerHTML = rock; 
        win(); 
    } else if (userChoice === 'paper' && computerChoice === 'scissors') { 
        document.getElementById('userChoice').innerHTML = paper; 
        document.getElementById('computerChoice').innerHTML = scissors; 
        loose(); 
    } else if (userChoice === 'scissors' && computerChoice === 'rock') { 
        document.getElementById('userChoice').innerHTML = scissors; 
        document.getElementById('computerChoice').innerHTML = rock; 
        loose(); 
    } else if (userChoice === 'scissors' && computerChoice === 'paper') { 
        document.getElementById('userChoice').innerHTML = scissors; 
        document.getElementById('computerChoice').innerHTML = paper; 
        win(); 
    }
}
function win() { 
    document.getElementById('infoText').innerHTML = 'You Win!'; 
    document.getElementById('infoText').style.color = 'green'; 
    document.getElementById('infoText2').innerHTML = 'You Win!'; 
    document.getElementById('infoText2').style.color = 'green'; 
    userScore++; 
    document.getElementById('userScore').innerHTML = userScore; 
    if (userScore >= 5) { 
            ultraWin(); 
        }
}
function loose() { 
    document.getElementById('infoText').innerHTML = 'You Loose'; 
    document.getElementById('infoText').style.color = 'red'; 
    document.getElementById('infoText2').innerHTML = 'You Loose'; 
    document.getElementById('infoText2').style.color = 'red'; 
    computerScore++; 
    document.getElementById('computerScore').innerHTML = computerScore; 
    if (computerScore >= 5) { 
            ultraLoose() 
        }
}
function tie() { 
    document.getElementById('infoText').innerHTML = 'It\'s a tie!'; 
    document.getElementById('infoText').style.color = 'orange'; 
    document.getElementById('infoText2').innerHTML = 'It\'s a tie!'; 
    document.getElementById('infoText2').style.color = 'orange'; 
}
function ultraWin() { 
    document.getElementById('infoText').innerHTML = 'It\'s a win'; 
    document.getElementById('infoText').style.color = '#003300'; 
    document.getElementById('infoText2').innerHTML = 'It\'s a win'; 
    document.getElementById('infoText2').style.color = '#003300'; 
    document.body.style.backgroundColor = 'green'; 
    document.getElementById('userChoice').innerHTML = '🎊'; 
    document.getElementById('computerChoice').innerHTML = '🎊'; 
    document.getElementById('userScore').innerHTML = 'You win!'; 
    document.getElementById('computerScore').innerHTML = 'You win!'; 
    document.getElementById('computerInfo').style.display = 'none'; 
    document.getElementById('userInfo').style.display = 'none'; 
    setTimeout(() => { 
        reset(); 
    }, 3000); 
}
function ultraLoose() { 
    document.getElementById('infoText').innerHTML = 'It\'s a loose'; 
    document.getElementById('infoText').style.color = '#330000'; 
    document.getElementById('infoText2').innerHTML = 'It\'s a loose'; 
    document.getElementById('infoText2').style.color = '#330000'; 
    document.body.style.backgroundColor = 'red'; 
    document.getElementById('userChoice').innerHTML = '💀'; 
    document.getElementById('computerChoice').innerHTML = '💀'; 
    document.getElementById('userScore').innerHTML = 'You Loose!'; 
    document.getElementById('computerScore').innerHTML = 'You Loose!'; 
    document.getElementById('computerInfo').style.display = 'none'; 
    document.getElementById('userInfo').style.display = 'none'; 
    setTimeout(() => { 
        reset(); 
    }, 3000); 
}
function reset() { 
    userScore = 0; 
    computerScore = 0; 
    document.getElementById('userScore').innerHTML = userScore; 
    document.getElementById('computerScore').innerHTML = computerScore; 
    document.body.style.backgroundColor = 'white'; 
    document.getElementById('userChoice').innerHTML = '⏱'; 
    document.getElementById('computerChoice').innerHTML = '⏱'; 
    document.getElementById('infoText').innerHTML = 'Take your chance!'; 
    document.getElementById('infoText').style.color = 'black'; 
    document.getElementById('infoText2').innerHTML = 'Choose one!'; 
    document.getElementById('infoText2').style.color = 'darkred'; 
    document.getElementById('computerInfo').style.display = 'block'; 
    document.getElementById('userInfo').style.display = 'block'; 
}
function updateScore() {
    document.getElementById('userScore').innerHTML = userScore; 
    document.getElementById('computerScore').innerHTML = computerScore; 
}