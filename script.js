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


function playRound(playerSelection, computerSelection){
    let playerSelectedInCapital = playerSelection.toUpperCase();
    let computerSelectedInCapital = computerSelection.toUpperCase();

    if ( playerSelectedInCapital === computerSelectedInCapital ){
        return 'draw';
    }
    else if ( playerSelectedInCapital === "ROCK" ){
        if ( computerSelectedInCapital === "PAPER" ){
            return 'lose';
        }
        else {
            return 'won';
        }
    }
    else if ( playerSelectedInCapital === "PAPER" ){
        if ( computerSelectedInCapital === "ROCK" ){
            return 'won';
        }
        else {
            return 'lose';
        }
    }
    else if ( playerSelectedInCapital === "SCISSOR" ){
        if ( computerSelectedInCapital === "ROCK" ){
            return 'lose';
        }
        else {
            return 'won';
        }
    }
}

function game(){
    let playerWon = 0;
    let computerWon = 0;
    for ( let i=0; i<5 ; i++){
        let computerSelection = getComputerSelection(selctionArray);
        let playerSelection = getPlayerSelection();

        let result = playRound(playerSelection, computerSelection);
        
        if (result === 'won'){
            playerWon++;
        }
        else if (result === 'lose'){
            computerWon++;
        }
    }
    if ( playerWon > computerWon ){
        return 'You won!';
    }
    else if ( playerWon < computerWon ){
        return 'You lose!';
    }
    else {
        return 'Match drawn!';
    }
}

console.log(game());   

