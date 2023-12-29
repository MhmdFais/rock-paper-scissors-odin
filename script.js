let selctionArray = ["rock", "paper", "scissor"];

function getComputerSelection(selctionArray){
    //getting the random index
    let randomIndex = Math.floor(Math.random() * selctionArray.length);

    //get the value for that index
    let itemSelected = selctionArray[randomIndex];

    console.log(itemSelected);

    return itemSelected;
}

function getPlayerSelection(){
    let userInput = prompt("Please enter your selection: ");
    console.log(userInput);
    return userInput;  
}

function game(){
    let plaerWon = 0;
    let computerWon = 0;
    for ( let i=0; i<5 ; i++){
        playRound(playerSelection, computerSelection);
    }
}


function playRound(playerSelection, computerSelection){
    let playerSelectedInCapital = playerSelection.toUpperCase();
    let computerSelectedInCapital = computerSelection.toUpperCase();

    if ( playerSelectedInCapital === computerSelectedInCapital ){
        //re play 
    }
    else if ( playerSelectedInCapital === "ROCK" ){
        if ( computerSelectedInCapital === "PAPER" ){
            return 'You lose! paper beats rock';
        }
        else {
            return 'You won! rock beats scissor';
        }
    }
    else if ( playerSelectedInCapital === "PAPER" ){
        if ( computerSelectedInCapital === "ROCK" ){
            return 'You won! paper beats rock';
        }
        else {
            return 'You lose! scissor beats paper';
        }
    }
    else if ( playerSelectedInCapital === "SCISSOR" ){
        if ( computerSelectedInCapital === "ROCK" ){
            return 'You lose! rock beats scissor';
        }
        else {
            return 'You won! scissor beats rock';
        }
    }
}

let computerSelection = getComputerSelection(selctionArray);
let playerSelection = getPlayerSelection();
console.log(playRound(playerSelection, computerSelection));   

