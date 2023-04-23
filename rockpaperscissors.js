function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
       return "You Win! Rock beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Loose! Rock beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Scissors! beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Loose! Rock beats scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Scissors! beats Paper";
    } else {
        return "Invalid input";
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;
    const count = 5;
    const winRegex = /You Win/;
    const looseRegex = /You Loose/;

    for (let i = 0; i < count; i++) {
        //Get user input
        let playerSelection = prompt("Rock, Paper or Scissors?");
        // Play the round
        console.log(playRound(playerSelection.toLowerCase(), computerSelection));

        if (playRound(playerSelection, computerSelection).match(winRegex)) {
            userScore++;
        } else if (playRound(playerSelection, computerSelection).match(looseRegex)) {
            computerScore++;
        }
    }

    if (userScore > computerScore) {
        return console.log("You won the game!");
    } else if (userScore < computerScore) {
        return console.log("You lost the game!");
    } else {
        return console.log("It's a tie!");
    }
}

game()