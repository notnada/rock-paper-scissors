
// function that returns the computer's choice in the game
function getComputerChoice() {
	// Gives a random number 0,1 or 2
	let computerChoice = Math.floor(Math.random()* 3 ); 
	// Converts it into a choice : rock, paper or scissors
	if (computerChoice == 0) {
		return "Rock";
	} else if (computerChoice == 1) {
		return "Paper";
	} else {
		return "Scissors"
	}
}

