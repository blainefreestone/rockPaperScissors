const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

function getMoveText(index)
{
    let moveText;
    switch (index) {
        case ROCK:
            moveText = "Rock";
            break;
        case PAPER:
            moveText = "Paper";
            break;
        case SCISSORS:
            moveText = "Scissors";
            break;
    }
    return moveText;
}

function getcomputerSelection()
{
    let randomNumber = Math.floor(Math.random() * 3); // Generate random integer from 0-2
    let computerSelection;
    // Computer choice based on random integer.
    switch (randomNumber) {
        case 0:
            computerSelection = ROCK;
            break;
        case 1:
            computerSelection = PAPER;
            break;
        case 2:
            computerSelection = SCISSORS;
            break;
    }
    return computerSelection;
}

function determineWinner(playerSelection, computerSelection)
{
    if (playerSelection === computerSelection) {return null} // If selections are the same, tie.
    else
    {
        // Three possible player selections with their win condition first and lose condition second.
        switch (playerSelection) {
            case ROCK:
                if (computerSelection === SCISSORS) {return true}
                if (computerSelection === PAPER) {return false}
            case PAPER:
                if (computerSelection === ROCK) {return true}
                else if (computerSelection === SCISSORS) {return false}
            case SCISSORS:
                if (computerSelection === PAPER) {return true}
                else if (computerSelection === ROCK) {return false}
            }
    }
}

function playRound(playerSelection)
{
    let computerSelection = getcomputerSelection();

    let roundResult = determineWinner(playerSelection, computerSelection);
    let roundResultText;

    let computerSelectionText = getMoveText(computerSelection);
    let playerSelectionText = getMoveText(playerSelection);

    console.log(roundResult);

    if (roundResult === true) {
        roundResultText = "You win! " + playerSelectionText + ' beats ' + computerSelectionText + '.';
        runningPlayerScore += 1;
    }
    else if (roundResult === false) {
        roundResultText = "You lose! " + computerSelectionText + ' beats ' + playerSelectionText + '.';
        runningComputerScore += 1;
    }
    else {
        roundResultText = "You tied!";
    }

    result.textContent = roundResultText;
    score.textContent = "You: " + runningPlayerScore + " Computer: " + runningComputerScore + "." ;

    if (runningPlayerScore >= 5) {
        finalResult.textContent = "Congratulations! You win the match.";
        runningComputerScore = 0, runningPlayerScore = 0;
    }
    else if (runningComputerScore >= 5) {
        finalResult.textContent = "Dang. You lost the match. Better luck next time.";
        runningComputerScore = 0, runningPlayerScore = 0;
    }
}

runningPlayerScore = 0;
runningComputerScore = 0;

const results = document.querySelector('#result');

const buttons = document.querySelectorAll('button');
const result = document.querySelector('#results #result');
const score = document.querySelector('#results #score');
const finalResult = document.querySelector('#results #final-result');

// Create event listeners for the rock, paper and scissors buttons. Based on the button id the playerSelection is set
// and passed into the playRound() function.
buttons.forEach(button => button.addEventListener('click', e => {
    let playerSelection;
    if (e.target.id === "rock") playerSelection = ROCK;
    else if (e.target.id === "paper") playerSelection = PAPER;
    else if (e.target.id === "scissors") playerSelection = SCISSORS;
    finalResult.textContent = ""; // Make sure the final results are cleared before new match started.
    playRound(playerSelection);
}));