let selctionArray = ["rock", "paper", "scissor"];

function getComputerSelection(selctionArray){
    //getting the random index
    let randomIndex = Math.floor(Math.random() * selctionArray.length);

    //get the value for that index
    let itemSelected = selctionArray[randomIndex];

    console.log(itemSelected);

    return itemSelected;
}


function playRound(playerSelection, computerSelection){
    if ( playerSelection === computerSelection ){
        return 'draw';
    }
    else if ( playerSelection === "ROCK" ){
        if ( computerSelection === "PAPER" ){
            return 'lose';
        }
        else {
            return 'won';
        }
    }
    else if ( playerSelection === "PAPER" ){
        if ( computerSelection === "ROCK" ){
            return 'won';
        }
        else {
            return 'lose';
        }
    }
    else if ( playerSelection === "SCISSOR" ){
        if ( computerSelection === "ROCK" ){
            return 'lose';
        }
        else {
            return 'won';
        }
    }
}

//UI - JAVA SCRIPT

//Buttons
let btnRck = document.querySelector('#btnRck');
let btnPpr = document.querySelector('#btnPpr');
let btnScr = document.querySelector('#btnScr');

//Other variables
let playerWonRounds = 0;
let computerWonRounds = 0;
let playerContentWon = document.createElement('div');
let comContentWon = document.createElement('div');
let mainBody = document.querySelector('.main-container');
let playerPointBody = document.querySelector('.player');
let computerPointBody = document.querySelector('.computer');
let mainResult = document.createElement('div');

function updateTheDisplay(){
    playerContentWon.textContent = playerWonRounds;
    comContentWon.textContent = computerWonRounds;

    playerPointBody.appendChild(playerContentWon);
    computerPointBody.appendChild(comContentWon);

    if( playerWonRounds===5 || computerWonRounds===5 ){
        if ( playerWonRounds === 5 ) {
            mainResult.textContent = 'You Won!!';
            mainBody.appendChild(mainResult);
        }
        else {
            mainResult.textContent = 'You Lost!!';
            mainBody.appendChild(mainResult);
        }

        btnRck.disabled = true;
        btnScr.disabled = true;
        btnPpr.disabled = true;
    }
}

function playTheGame(playerSelection){
    let computerSelection = getComputerSelection(selctionArray);

    let result = playRound(playerSelection, computerSelection);

    if ( result === 'won' ){
        playerWonRounds++;
    }
    else {
        computerWonRounds++;
    }

    updateTheDisplay();
}

btnRck.addEventListener( 'click', ()=>{
    playTheGame('ROCK');
});

btnPpr.addEventListener('click', () => {
    playTheGame('PAPER');
});

btnScr.addEventListener('click', () => {
    playTheGame('SCISSOR');
});

//Main result styling
mainResult.style.paddingTop = '15px';
mainResult.style.color = 'Red';
mainResult.style.fontSize = '30px';



