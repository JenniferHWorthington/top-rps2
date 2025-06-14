// Array of options for computer to choose from
const options = ['Rock', 'Paper', 'Scissors'];

// Variables to store how many rounds each player has won
let computerWinCount = 0;
let playerWinCount = 0;

// Variable for which round it currently is
let roundCount = 0;

// Variable to store how many wins needed
let winThreshold = 0;

// Round Win message variables
let playerWinMessage = 'Player Wins!';
let computerWinMessage = 'Computer Wins!'
let drawMessage = 'Draw!';

// Variables to store which option each player chooses in each round
let playerChoice;
let computerChoice;