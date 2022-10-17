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
    return `You Lose! ${computerSelection} beats ${playerSelection}`
  } else if (
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'rock' && computerSelection === 'scissors')
  ) {
    ++playerWins
    return `You Win! ${playerSelection} beats ${computerSelection}`
  } else {
    return `play again`
  }
}

const playerSelection = window.prompt('paper, rock or scissors').toLowerCase()

const computerSelection = computerPlay()

// const play = playRound(playerSelection, computerSelection)

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerSelection, computerSelection)
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

console.log(game())
