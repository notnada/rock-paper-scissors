
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

// variables to store player's and computer's scores
let humanScore = 0;
let computerScore = 0;

