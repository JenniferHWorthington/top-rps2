
// Array of options for computer to choose from
const options = ['Rock', 'Paper', 'Scissors'];

// Variables to store how many rounds each player has won
let computerWinCount = 0;
let playerWinCount = 0;

// Variable for which round it currently is
let roundCount = 0;

// Variable to store how many wins needed
let winThreshold = 0;

// Round Win message variables.
let playerWinMessage = 'Player Wins!';
let computerWinMessage = 'Computer Wins!';
let drawMessage = 'Draw!'

// Variables to store which option each player chooses in each round
let playerChoice;
let computerChoice;

// Alert asking how many wins are needed
winThreshold = prompt('How many wins are needed for victory?');

// Function for computer to select 1 of the 3 options from the 'options' array
function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];
}

// Click the buttons to get the id of 'Rock', 'Paper', or 'Scissors'
playerChoice = window.addEventListener('click', (event) => {

    if (!gameOver()) {
        if (event.target.nodeName == 'IMG') {
            playerChoice =  event.target.id;
            computerChoice = getComputerChoice();
            playRound(playerChoice, computerChoice);
        }
    }
})



// Function to check if player wins, computer wins, or a draw.
// Writes an appropriate message depending on win conditions.
// Updates score.
function checkRound(playerInput, computerInput) {
    
    

    if (playerInput == 'Rock') {
        if (computerInput == 'Rock') {
            return `${playerInput} ties with ${computerInput}: ${drawMessage}`;
        } else if (computerInput == 'Paper') {
            ++computerWinCount;
            return `${computerInput} beats ${playerInput}: ${computerWinMessage}`;
        } else if (computerInput == 'Scissors') {
            ++playerWinCount;
            return `${playerInput} beats ${computerInput}: ${playerWinMessage}`;
        }
    } else if (playerInput == 'Paper') {
        if (computerInput == 'Rock') {
            ++playerWinCount;
            return `${playerInput} beats ${computerInput}: ${playerWinMessage}`;
        } else if (computerInput == 'Paper') {
            return `${playerInput} ties with ${computerInput}: ${drawMessage}`;
        } else if (computerInput == 'Scissors') {
            ++computerWinCount;
            return `${computerInput} beats ${playerInput}: ${computerWinMessage}`;
        }
    } else if (playerInput == 'Scissors') {
        if (computerInput == 'Rock') {
            ++computerWinCount;
            return `${computerInput} beats ${playerInput}: ${computerWinMessage}`;
        } else if (computerInput == 'Paper') {
            ++playerWinCount;
            return `${playerInput} beats ${computerInput}: ${playerWinMessage}`;
        } else if (computerInput == 'Scissors') {
            return `${playerInput} ties with ${computerInput}: ${drawMessage}`;
        }
    }

    
}

function playRound(playerChoice, computerChoice) {
    roundCount++;
    let roundLevel = document.querySelector('.round-count');
    roundLevel.textContent = `Round: ${roundCount}`;

    
    let roundWinMessage = document.querySelector('.win-message');
    let message = checkRound(playerChoice, computerChoice);
    roundWinMessage.textContent = message;
    updateScore(playerWinCount, computerWinCount);
}

function updateScore(playerWinCount, computerWinCount) {
    let compScore = document.querySelector('.computer-score-count');
    let playScore = document.querySelector('.player-score-count');
    compScore.textContent = computerWinCount;
    playScore.textContent = playerWinCount;
    if (gameOver()) {
        if (playerWinCount > computerWinCount) {
            document.querySelector('.blur-container').classList.add('blur');
            document.querySelector('.winner').classList.remove('hidden');
            document.querySelector('.player-wins').classList.remove('hidden');
        } else if (computerWinCount > playerWinCount) {
            document.querySelector('.blur-container').classList.add('blur');
            document.querySelector('.winner').classList.remove('hidden');
            document.querySelector('.computer-wins').classList.remove('hidden');
        }
    }

}

function gameOver() {
    if (playerWinCount == winThreshold || computerWinCount == winThreshold) {
        return true;
    }
}

function restartGame() {

}