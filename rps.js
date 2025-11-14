
// function that returns the computer's choice in the game
function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"]
	// Gives a random number 0,1 or 2
	let computerChoice = Math.floor(Math.random()* 3 ); 
	// Converts it into a choice : rock, paper or scissors
	return choices[computerChoice];
}
	const box = document.getElementById("message");

	function playRound(humanChoice, computerChoice) {
		// variables to store player's and computer's scores
		let humanScoreInt = parseInt(humanScore.textContent);
		let computerScoreInt = parseInt(computerScore.textContent);
		

		// store player's and computer's choice
		computerChoice= getComputerChoice();
		
		const combo = `${humanChoice},${computerChoice}`;
		if ( combo == "rock,scissors"|| combo == "scissors,paper" || combo == "paper,rock") {
			humanScoreInt++;
			humanScore.textContent = humanScoreInt
			box.textContent = `Human wins! ${humanChoice} beats ${computerChoice}`;
			

			} else if ( combo == "scissors,rock"|| combo == "paper,scissors" || combo == "rock,paper") {
				computerScoreInt++;
				computerScore.textContent = computerScoreInt
				box.textContent = `Computer wins! ${computerChoice} beats ${humanChoice}`;
		} else {
			

			box.textContent = "it's a tie!";   // show text

				}
	
	}


function getHumanChoice(onChoice) {
  let buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      onChoice(button.innerText);
    });
  });

}
// declaring the playround parameters
	let humanChoice = "";
	let computerChoice ="";
// Call it and define what happens with the choice




	let humanScore = document.querySelector("#humanscore")
	let computerScore = document.querySelector("#computerscore")

	getHumanChoice((choice) => {
   		humanChoice = choice;
   		playRound(humanChoice,computerChoice)

   		
if (humanScore.textContent== 5) {

 	box.textContent = "human wins!"
 	humanScore.innerText= 0;
 	computerScore.innerText = 0;
} else if (computerScore.textContent == 5) {
   box.textContent = "computer wins!"
  humanScore.innerText= 0;
 	computerScore.innerText = 0;
}
	
			});

	




