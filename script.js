function getComputerChoice()
{
    let randomNumber = Math.floor(Math.random() * 3); // Generate random integer from 0-2
    let computerChoice;
    // Computer choice based on random integer.
    switch (randomNumber) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }
    return computerChoice;
}

function determineWinner(playerSelection, computerSelection)
{
    let lowerPlayerSelection = playerSelection.toLowerCase()
    if (lowerPlayerSelection === computerSelection) {return "You tied!"} // If selections are the same, tie.
    else
    {
        // Three possible player selections with their win condition first and lose condition second.
        switch (lowerPlayerSelection) {
            case "rock":
                if (computerSelection === "scissors") {return "You win! Rock beats scissors."}
                if (computerSelection === "paper") {return "You lose! Paper beats rock."}
            case "paper":
                if (computerSelection === "rock") {return "You win! Paper beats rock."}
                else if (computerSelection === "scissors") {return "You lose! Scissors beats paper."}
            case "scissors":
                if (computerSelection === "paper") {return "You win! Scissors beats paper."}
                else if (computerSelection === "rock") {return "You lose! Rock beats paper."}
            }
    }
}

function playRound(playerSelection)
{
    let roundResult = determineWinner(playerSelection, getComputerChoice())
    console.log(roundResult)
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', e => playRound(e.target.id)));