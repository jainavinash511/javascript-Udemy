const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINEER = "PLAYER WINS";
const RESULT_COMPUTER_WINEER = "COMPUTER WINS";

function getPlayerChoice() {
  const choice = prompt(
    ` Select one from ${ROCK} , ${PAPER} or ${SCISSORS}`
  ).toUpperCase();
  if (choice !== ROCK && choice !== PAPER && choice !== SCISSORS) {
    alert(`Invalid Input! We selectd ${DEFAULT_CHOICE}`);
    return DEFAULT_CHOICE;
  }
  return choice;
}

const getComputerChoice = function () {
  const randomNum = Math.random();
  if (randomNum < 0.34) {
    return ROCK;
  } else if (randomNum < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinnerArrow = (cChoice, pChoice) => {
  return cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINEER
    : RESULT_COMPUTER_WINEER;
};
function getWinner(cChoice, pChoice) {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WINEER;
  } else {
    return RESULT_COMPUTER_WINEER;
  }
}

startGameBtn.addEventListener("click", function () {
  console.log("Game Begins........");
  const playerChoice = getPlayerChoice();
  console.log("Player Choice ", playerChoice);
  const computerChoice = getComputerChoice();
  console.log("Computer Choice ", computerChoice);
  const winner = getWinnerArrow(computerChoice, playerChoice);
  console.log("Winner ", winner);
  return true;
});
