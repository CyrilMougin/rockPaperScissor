let GAMEROUNDCOUNTER = 0;
let PLAYERSCORE = 0;
let COMPUTERSCORE =0;


const chooseButton = document.getElementById("button-choose");




chooseButton.addEventListener("click", () =>{
    let choice ;
    do {
        choice = prompt("rock Paper or scissor") ;
    } while (!["PAPER","ROCK","SCISSOR"].includes(choice.toUpperCase()))
    return playRound(choice, getComputerChoice()) ;
});

function getComputerChoice() {
    let choice = ["rock", "scissor", "paper"];
    return choice[(Math.floor(Math.random() * choice.length))];
}

function playRound(playerSelection, computerSelection) {
    let winnerBool;
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    let youWinMessage = `you win this round ! ${playerSelection} beat ${computerSelection} !`;
    let youLooseMessage = `you lost the round ! ${computerSelection} beat ${playerSelection} !`;

    if (playerSelection == computerSelection) {
        console.log("it's a tie")
        return 0;
    }
    if ( playerSelection == "ROCK"    && computerSelection == "SCISSOR" ||
         playerSelection == "PAPER"   && computerSelection == "ROCK"    ||
         playerSelection == "SCISSOR" && computerSelection == "PAPER") {
            winnerBool = true;
            console.log(youWinMessage);
            return game(winnerBool);
        }
    else {
        winnerBool = false;
        console.log(youLooseMessage);
        return game(winnerBool);
    } 
}


function game(winnerBool) {
    
    if (winnerBool == true) {
        
        PLAYERSCORE++;
    } 
    if (winnerBool == false) {
        COMPUTERSCORE++;
    } 
    GAMEROUNDCOUNTER++;

    console.log(`player :${PLAYERSCORE}, computer :${COMPUTERSCORE}`)

    if ( GAMEROUNDCOUNTER == 5 && PLAYERSCORE > COMPUTERSCORE ) {
        GAMEROUNDCOUNTER = 0;
        COMPUTERSCORE = 0;
        PLAYERSCORE = 0;
        console.log("you win !!!!!")
    } 
    if ( GAMEROUNDCOUNTER == 5 && COMPUTERSCORE > PLAYERSCORE) {
        GAMEROUNDCOUNTER = 0;
        COMPUTERSCORE = 0;
        PLAYERSCORE= 0;
        console.log("Oh no you lose")
    } 

    return 0;
}
    
       
    


