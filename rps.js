//computer generated choice
function getComputerChoice(){
    const comp_choice = ["Rock","Paper","Scissors"];

    let size = comp_choice.length;
    return comp_choice[Math.floor(Math.random() * size)]
}


//plays a round of rock paper scissors
function playRound(playerSelection, computerSelection){
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        return "Tie!"
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper"){
        return "You lose! Paper beats your lousy rock."
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors"){
        return "You lose! Scissors cut your flimsy paper."
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock"){
        return "You lose! Paper beats your lousy rock."
    }
    else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors"){
        return "You win! Rock demolishes scissors!"
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock"){
        return "You win! Paper smothers rock!"
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper"){
        return "You win! Scissors slice paper!"
    }
    else {
        return "Whatever you entered, it ain't it chief. Try english next time."
    }
}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));