
const chooseButton = document.getElementById("button-choose");


console.log( playRound("ROCK","scissor"));


chooseButton.addEventListener("click", () =>{
    let choice ;
    do {
        choice = prompt("rock Paper or scissor") ;
    } while (!["PAPER","ROCK","SCISSOR"].includes(choice.toUpperCase()))
    return choice ;
});

function getComputerChoice() {
    let choice = ["rock", "scissor", "paper"];
    return choice[(Math.floor(Math.random() * choice.length))];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    let youWinMessage = `you win this round ! ${playerSelection} beat ${computerSelection} !`;
    let youLooseMessage = `you lost the round ! ${computerSelection} beat ${playerSelection} !`;
    
    if ( playerSelection == "ROCK"    && computerSelection == "SCISSOR" ||
         playerSelection == "PAPER"   && computerSelection == "ROCK"    ||
         playerSelection == "SCISSOR" && computerSelection == "PAPER") { return youWinMessage}
    else return youLooseMessage;
}
         
    
       
    


