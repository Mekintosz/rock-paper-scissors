function getComputerChoice() {    //function for random choice of rock=0, paper=1 or scissors=3 for computer

    let randomNum = Math.floor(Math.random() * 3);
    
    if (randomNum == 0) {
    return "rock";
    } else if (randomNum == 1) {
    return "paper";
    } else {
    return "scissors";
    }
};

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        roundResult = "draw"
    } else if (computerSelection == "rock" && playerSelection == "paper") {
        roundResult = "You win, paper beats rock";
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        roundResult = "You lose, rock beats scissors";
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        roundResult = "You lose, paper beats rock";
    } else if (computerSelection == "paper" && playerSelection== "scissors") {
        roundResult = "You win, scissors beat paper";
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        roundResult = "You lose, scissors beat paper";
    } else {
        roundResult = "You win, rock beat scissors";
    };

    
    disResult.textContent = `${roundResult}`;
    keepScore(roundResult);
};

function keepScore(roundResult) {
    
    if (roundResult == "You win, paper beats rock" 
            || roundResult == "You win, scissors beat paper" 
            || roundResult == "You win, rock beat scissors") {
            ps += 1;
            playScore.textContent = `${ps}`;
    } else if (roundResult == "You lose, rock beats scissors" 
            || roundResult == "You lose, paper beats rock" 
            || roundResult =="You lose, scissors beat paper") {
            cs += 1;
            compScore.textContent = `${cs}`;
    } else {
            return
    }
gameResultCheck();
}; 

function gameResultCheck() {
    if (cs < 5 && ps < 5) {
        return 
    } else {
        gameResult(ps, cs);
    }
};

function gameResult(ps, cs) {
    if (ps < cs) {
        game.textContent = "You lose, computer wins the GAME."
    } else {
        game.textContent = "You win The GAME, computer loses."
    }
};

function resetResults() {
    ps = 0;
    cs = 0;
    compScore.textContent = `0`;
    playScore.textContent = `0`;
    game.textContent = "";
    disResult.textContent = ``;
};

let ps = 0;
let cs = 0;
let roundResult = "";
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const compScore = document.querySelector(".score.comp");
const playScore = document.querySelector(".score.play");
compScore.textContent = "0";
playScore.textContent = "0";
const game = document.querySelector("#game")
const reset = document.querySelector(".reset");
const disResult = document.querySelector(".result");

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
reset.addEventListener("click", () => resetResults())