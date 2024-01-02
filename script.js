
function getComputerSelection(){
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
    case 0:
      return 'ROCK'
    case 1:
      return 'PAPER'
    case 2:
      return 'SCISSOR'
  }
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
let bodyContainer = document.querySelector('.main-body');

function updateTheDisplay(){
    playerContentWon.textContent = playerWonRounds;
    comContentWon.textContent = computerWonRounds;

    playerPointBody.appendChild(playerContentWon);
    computerPointBody.appendChild(comContentWon);

    if( playerWonRounds===5 || computerWonRounds===5 ){
        if ( playerWonRounds === 5 ) {
            mainResult.textContent = 'You Won!!';
            bodyContainer.appendChild(mainResult);
        }
        else {
            mainResult.textContent = 'You Lost!!';
            bodyContainer.appendChild(mainResult);
        }

        btnRck.disabled = true;
        btnScr.disabled = true;
        btnPpr.disabled = true;
    }
}

function playTheGame(playerSelection){
    let computerSelection = getComputerSelection();

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
mainResult.style.paddingTop = '25px';
mainResult.style.color = '#f4b41a';
mainResult.style.fontSize = '50px';
mainResult.style.fontFamily = " 'Silkscreen', sans-serif  ";

playerContentWon.style.alignItems = 'center';
playerContentWon.style.justifyContent = 'center'
playerContentWon.style.paddingTop = '23px';
playerContentWon.style.paddingLeft = '50px';
playerContentWon.style.fontSize = '50px';
playerContentWon.style.fontFamily = " 'Silkscreen', sans-serif ";


comContentWon.style.alignItems = 'center';
comContentWon.style.justifyContent = 'center'
comContentWon.style.paddingTop = '23px';
comContentWon.style.paddingLeft = '65px';
comContentWon.style.fontSize = '50px';
comContentWon.style.fontFamily = " 'Silkscreen', sans-serif ";
