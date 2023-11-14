console.log("ahahah")





const chooseButton = document.getElementById("button-choose");


chooseButton.addEventListener("click", () =>{
    let choice ;
    do {
        choice = prompt("rock Paper or scissor") ;
    } while (!["PAPER","ROCK","SCISSOR"].includes(choice.toUpperCase()))
    return choice ;
});



function getPlayerChoice() {
    let choice = prompt("rock Paper or scissor");
    return choice
}

function getComputerChoice() {
    let choice = ["rock", "scissor", "paper"];
    return choice[(Math.floor(Math.random() * choice.length))];
}