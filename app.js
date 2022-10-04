const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtn = document.querySelectorAll(".choiceBtn");
const playerScoreText = document.querySelector("#playerScoreText");
const computerScoreText = document.querySelector("#computerScoreText");

let player;
let playerScore = 0;
let computerScore = 0;
let computer;
let result;

choiceBtn.forEach(btn => btn.addEventListener('click' , () =>{

    player = btn.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Player: ${computer}`;
    resultText.textContent = checkWinner();

}));

function computerTurn(){
    const randNum = Math.floor(Math.random() * 3)+1;
    switch(randNum){
    case 1: 
        computer = "ROCK"
    break;

    case 2:
        computer = "PAPER"
    break;

    case 3:
        computer = "SCISSORS"
    break;

}
}

function checkWinner(){
    if(player == computer){
        return "Draw!"
    }
    else if(computer == "ROCK" ){
        return (player == "PAPER") 
      
        ? `You win ! `: `You Lose ${computerScore +1}`
    }
    else if(computer == "PAPER" ){
        return (player == "SCISSORS") ? `You win ${playerScore +1}` : `You Lose ${computerScore +1}`
    }
    else if(computer == "SCISSORS" ){
        return (player == "ROCK") ?     `You win ${playerScore +1}` : `You Lose ${computerScore +1}`
    }
}

if(playerScore == 5 && computerScore < 5){
    
}
