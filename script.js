const header = document.getElementById('header')
let playerWins = 0
let computerWins = 0

function computerPlay() {
  const gameArray = ['rock', 'paper', 'scissors']
  const randomValue = Math.floor(Math.random() * gameArray.length)
  return gameArray[randomValue]
}

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'rock')
  ) {
    ++computerWins
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
  } else if (
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'rock' && computerSelection === 'scissors')
  ) {
    ++playerWins
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`)
  } else {
    console.log(`play again`)
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = window.prompt('paper, rock or scissors').toLowerCase()
    playRound(playerSelection, computerPlay())
  }
  console.log(playerWins, computerWins)

  if (playerWins > computerWins) {
    return 'Congrats, you won'
  } else if (computerWins > playerWins) {
    return 'Sorry, you lost'
  } else {
    return "it's a tie"
  }
}

const text = game()
const node = document.createTextNode(text)
header.appendChild(node)

console.log(text)


