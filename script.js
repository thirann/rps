//Computed
function getComputerChoice() {

  let computerPick = "";
  let options = 3
  let computerResult = Math.floor(Math.random() * options);

  if (computerResult === 0) {
    computerPick = "Rock"
  }
  else if (computerResult === 1) {
    computerPick = "Paper"
  }
  else {
    computerPick = "Scissor"
  }
  //console.log(computerPick)
  return computerPick

}

//Player vs Computer
function playRound(player, computer) {

  let playerHand = player.toLowerCase();
  let computerHand = computer.toLowerCase();
  let playerWon = true;

  if (playerHand === "scissor" && computerHand === "rock") {
    console.log("You lose 😒\n")
    return !playerWon
  }
  else if (playerHand === "rock" && computerHand === "scissor") {
    console.log("You Won 😊\n")
    return playerWon;
    //console.log(playerWon)
  }
  else if (playerHand === "rock" && computerHand === "paper") {
    console.log("You lose 😒\n")
    return !playerWon
  }
  else if (playerHand === "paper" && computerHand === "rock") {
    console.log("You Won 😊\n")
    return playerWon;
    //console.log(playerWon)
  }
  else if (playerHand === "paper" && computerHand === "scissor") {
    console.log("You lose 😒\n")
    return !playerWon
  }
  else if (playerHand === "scissor" && computerHand === "paper") {
    console.log("You Won 😊\n")
    return playerWon;
    //console.log(playerWon)
  }
  else if (playerHand === computerHand) {
    console.log("It's a tie 😮‍💨\n")
  }
  else {
    console.log("Ooops! Something wrong")
  }

}

//Number of games
function game() {
  let numRounds = 5
  let playerScore = 0
  let computerScore = 0

  for (i = 1; i <= numRounds; i++) {
    let playerInput = prompt(`Round ${i}: Your hand`)
    let play = playRound(playerInput, getComputerChoice())

    if (play === undefined) {}
    else if (play) {
      playerScore++
    } else {computerScore++}
  }

  if (playerScore === computerScore) {
    console.log("No Winner or Loser, Try Again! 🤐")
  }
  else if (playerScore > computerScore) {
    console.log("Congratz,you won the games! 🥳")
  }
  else { console.log("You lose, computer won the games! 😭") }

}

//Start Game
console.log("Let's start rock🪨, paper📄 & scissor✂️  game, this game comprised of 5 rounds. Whoever scored the most would be the winner of this game.\n")

game()


