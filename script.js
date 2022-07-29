//----The UI----
//Initialize Buttons & Results
const btnRock = document.querySelector('#btn-rock');
const btnScissor = document.querySelector('#btn-scissor');
const btnPaper = document.querySelector('#btn-paper');
const btnStart = document.querySelector('#start');
const result = document.querySelector(".result");
const playerScoreResult = document.querySelector(".player-score");
const computerScoreResult = document.querySelector(".computer-score");
const scoreBoard = document.querySelector(".scores");

//Intial player and computer score
let playerScore = 0
let computerScore = 0

//Keep record of scoring after click
function updateScore() {
  //Update

  playerScoreResult.innerText = "Your Score:" + playerScore;
  computerScoreResult.innerText = "Computer Score:" + computerScore;

}

//----The Logic----
//Computer Generated
function getComputerChoice() {

  let computerPick = "";
  let options = 3;
  let computerResult = Math.floor(Math.random() * options);

  if (computerResult === 0) {
    computerPick = "Rock";
  }
  else if (computerResult === 1) {
    computerPick = "Paper";
  }
  else {
    computerPick = "Scissor";
  }
  //console.log(computerPick)
  return computerPick;
}

//Playround
function playRound(player, computer) {

  let playerHand = player.toLowerCase();
  let computerHand = computer.toLowerCase();
  let playerWon = true;

  if (playerHand === "scissor" && computerHand === "rock") {
    console.log("You lose 😒\n");
    result.innerText = "You lose 😒";
    result.setAttribute("class", "lose");
    return !playerWon;
  }

  else if (playerHand === "rock" && computerHand === "scissor") {
    console.log("You won 😊\n");
    result.innerText = "You won 😊";
    result.setAttribute("class", "won");
    return playerWon;
  }

  else if (playerHand === "rock" && computerHand === "paper") {
    console.log("You lose 😒\n")
    result.innerText = "You lose 😒";
    result.setAttribute("class", "lose");
    return !playerWon
  }

  else if (playerHand === "paper" && computerHand === "rock") {
    console.log("You won 😊\n");
    result.innerText = "You won 😊";
    result.setAttribute("class", "won");
    return playerWon;
  }

  else if (playerHand === "paper" && computerHand === "scissor") {
    console.log("You lose 😒\n");
    result.innerText = "You lose 😒";
    result.setAttribute("class", "lose");
    return !playerWon;
  }

  else if (playerHand === "scissor" && computerHand === "paper") {
    console.log("You won 😊\n")
    result.innerText = "You won 😊";
    result.setAttribute("class", "won");
    return playerWon;
  }

  else if (playerHand === computerHand) {
    console.log("It's a tie 😮‍💨\n")
    result.innerText = "It's a tie 😮‍💨";
    result.setAttribute("class", "tie");
  }

  else {
    console.log("Ooops! Something is wrong");
  }

}

//Game
function game(playerInput, computerInput) {

  let play = playRound(playerInput, computerInput);

  if (play === undefined) { }
  else if (play) {
    playerScore++
  } else {
    computerScore++
  }
}

//Start Game
btnStart.addEventListener('click', () => {
  const showButtons = document.querySelector(".rps-hands").classList;
  showButtons.remove("none");
  btnStart.classList.add("none");
  scoreBoard.classList.remove("none");

})

//----Results----
//Rock
btnRock.addEventListener('click', (e) => {
  let playerChoiceSelection = e.target.alt;
  game(playerChoiceSelection, getComputerChoice());
  result.classList.remove("none");
  updateScore();
})

//Paper
btnPaper.addEventListener('click', (e) => {
  let playerChoiceSelection = e.target.alt;
  game(playerChoiceSelection, getComputerChoice());
  result.classList.remove("none");
  updateScore();
})

//Scissor
btnScissor.addEventListener('click', (e) => {
  let playerChoiceSelection = e.target.alt;
  game(playerChoiceSelection, getComputerChoice());
  result.classList.remove("none");
  updateScore();
})

