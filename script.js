let selctionArray = ['rock', 'paper', 'scissor'];

function getComputerSelection(selctionArray){
    //getting the random index
    let randomIndex = Math.floor(Math.random() * selctionArray.length);

    //get the value for that index
    let itemSelected = selctionArray[randomIndex];

    console.log(itemSelected);

    return itemSelected;
}

function getPlayerSelection(){
    
}


function playRound(playerSelection, computerSelection){
    let playerSelectedInCapital = playerSelection.toUpperCase();
    let computerSelectedInCapital = computerSelection.toUpperCase();


}

function game(){
    for ( let i=0; i<5 ; i++){
        playRound(playerSelection, computerSelection);
    }
}


let computerSelection = getComputerSelection();
let playerSelection = getPlayerSelection();
console.log(playRound(playerSelection, computerSelection));
