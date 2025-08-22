
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

// function to play a game that consists of 5 rounds
function playGame () {
	
	// variables to store player's and computer's scores
	let humanScore = 0;
	let computerScore = 0;

	// declaring the playround parameters
	let humanChoice = "";
	let computerChoice ="";

	// function for playing one round
	function playRound(humanChoice, computerChoice) {
		// store player's and computer's choice
		computerChoice= getComputerChoice();
		humanChoice = getHumanChoice().toLowerCase();
		const combo = `${humanChoice},${computerChoice}`;
		if ( combo == "rock,scissors"|| combo == "scissors,paper" || combo == "paper,rock") {
			humanScore++;
			console.log(`Human wins! ${humanChoice} beats ${computerChoice}`);

			} else if ( combo == "scissors,rock"|| combo == "paper,scissors" || combo == "rock,paper") {
				computerScore++;
				console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
		} else {
			console.log("it's a tie!");
				}
	}

	// Call playround 5 times
	playRound ( humanChoice, computerChoice);
	playRound ( humanChoice, computerChoice);
	playRound ( humanChoice, computerChoice);
	playRound ( humanChoice, computerChoice);
	playRound ( humanChoice, computerChoice);

	// Show Scores
	console.log(`Human Score ${humanScore}`)
	console.log(`Computer Score ${computerScore}`)

	// Decide the winner
	if ( humanScore > computerScore ) {
		console.log("Human wins the game!");
	} else {
		console.log("Computer wins the game!");
	}

}

playGame();
