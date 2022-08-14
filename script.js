let rpsButtons = document.querySelectorAll('.rpsButton')
const playerScoreDiv = document.querySelector('#player-score')
const hands = document.querySelector('#hands')
const result = document.querySelector('#result')
const endGameButton = document.querySelector('#endGameButton')

const totalScore = {computerScore : 0, playerScore: 0}

function getComputerChoice() {
  machineChoice = ['Rock', 'Paper','Sciossors']
  const randomChoice = Math.floor(Math.random() * 3)
  return machineChoice[randomChoice]

}

function getResult(playerChoice, computerChoice) {

  let score;

   if (playerChoice === computerChoice){ score = 0 } 
   else if (playerChoice == 'Rock' && computerChoice == 'Sciossors'){ score = 1}
   else if (playerChoice == 'Paper' && computerChoice == 'Rock'){ score = 1 }
   else if (playerChoice == 'Sciossors' && computerChoice == 'Paper' ) { score = 1 }

else {
  score = -1
}
  // return score
  return score
}

function showResult(score, playerChoice, computerChoice) {

 if ( score == -1) { result.innerText ='You Lose '}
 else if(score == 0){result.innerText = ' Draw'}
 else { result.innerText ='You Won'}

  playerScoreDiv.innerText = `Player Score : ${totalScore.playerScore}`
  hands.innerText = `${playerChoice} Vs ${computerChoice}`
}

function onClickRPS(playerChoice) {
const computerChoice = getComputerChoice()
const score = getResult(playerChoice, computerChoice)
totalScore.playerScore += score

showResult(score, playerChoice, computerChoice)
}

function playGame() {

  rpsButtons.forEach(rpsButton =>{ rpsButton.onclick =() => onClickRPS(rpsButton.value)})

  endGameButton.onclick = () => endGame(totalScore)
}

function endGame(totalScore) {
  totalScore.playerScore = 0
  totalScore['computerScore'] = 0
  
  result.innerText = ""
  hands.innerText = ""
  playerScoreDiv.innerText = ""
}
playGame()