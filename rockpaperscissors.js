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

// const playerSelection = 'rock';
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
    console.log('JavaScript code loaded!');

    let userScore = 0;
    let computerScore = 0;
    const count = 5;
    const winRegex = /You Win/;
    const looseRegex = /You Loose/;

    //Get user input
    let playerSelection = 0;
    const buttons = document.querySelectorAll('button');

    console.log('Click event listener registered!');

    buttons.forEach((button) => {
        button.addEventListener('click', function (e) {
            playerSelection = button.textContent.toLowerCase();
            console.log(`You chose ${button.textContent}`);
            e.target.style.background = 'red';
    
            // Play the round
            const result = playRound(playerSelection.toLowerCase(), computerSelection);
            console.log(result);
    
            if (result.match(winRegex)) {
                userScore++;
            } else if (result.match(looseRegex)) {
                computerScore++;
            }
    
            if (userScore + computerScore === count) {
                if (userScore > computerScore) {
                    console.log("You won the game!");
                } else if (userScore < computerScore) {
                    console.log("You lost the game!");
                } else {
                    console.log("It's a tie!");
                }
            }
        });
    });

}
game()
