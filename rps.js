
// function that returns the computer's choice in the game
function getComputerChoice() {
	// Gives a random number 0,1 or 2
	let computerChoice = Math.floor(Math.random()* 3 ); 
	// Converts it into a choice : rock, paper or scissors
	if (computerChoice == 0) {
		return "rock";
	} else if (computerChoice == 1) {
		return "paper";
	} else {
		return "scissors"
	}
}

// function that returns the human's choice in the game
function getHumanChoice() {
	return prompt("Enter your choice");
}

// function for playing one round
function playRound(humanChoice, computerChoice) {
	let combo = `${humanChoice},${computerChoice}`;
	if ( combo == "rock,scissors"|| combo == "scissors,paper" || combo == "paper,rock") {
		humanScore++;
		return `Human wins! ${humanChoice} beats ${computerChoice}`;
	
	} else if ( combo == "scissors,rock"|| combo == "paper,scissors" || combo == "rock,paper") {
		computerScore++;
		return `Computer wins! ${computerChoice} beats ${humanChoice}`;

	} else {
		return "it's a tie!"
	}
}

// variables to store player's and computer's scores
let humanScore = 0;
let computerScore = 0;
// constants to store player's and computer's choice
const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice().toLowerCase();

