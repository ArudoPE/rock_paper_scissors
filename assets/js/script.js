'use strict';

const computerPlay = () => {
    const random = Math.floor(Math.random() * 3);
    switch(random) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

const playRound = () => {
    const playerSelection = (prompt("Enter your play: rock, paper or scissors!")).toLowerCase();
    const computerSelection = computerPlay();

    if(computerSelection === playerSelection) {
        return 0;
    } else if (computerSelection === "rock" && playerSelection === "paper") {
        return "player";
    } else if(computerSelection === "rock" && playerSelection === "scissors") {
        return "computer";
    } else if(computerSelection === "paper" && playerSelection === "rock") {
        return "computer";
    } else if(computerSelection === "paper" && playerSelection === "scissors") {
        return "player";
    } else if(computerSelection === "scissors" && playerSelection === "paper") {
        return "computer";
    } else if(computerSelection === "scissors" && playerSelection === "rock") {
        return "player";
    }
}

const game = () => {
    let result;
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++) {
        result = playRound();
        if(result === "player") {
            playerScore++;
        } else if (result === "computer") {
            computerScore++;
        }
    }
    if(computerScore === playerScore) {
        console.log("Result of the game: Draw!");
    } else if(computerScore > playerScore) {
        console.log(`Computer wins, ${computerScore} to ${playerScore}!`);
    } else if(computerScore < playerScore) {
        console.log(`Player wins, ${playerScore} to ${computerScore}!`);
    }
}

game();