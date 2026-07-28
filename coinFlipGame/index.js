const playerMove = document.querySelector(".player-move");
const computerMove = document.querySelector(".computer-move");
const resultPara = document.querySelector(".result-para");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const resetButton = document.querySelector(".reset-btn");

// Mine code. I was able to build logic but failed to pass data from one function to another function.
/*
function playerPlay() {
  let pP = playerMove.addEventListener("click", () => {
    if (Math.random() < 0.5) {
      console.log("Tails");
    } else {
      console.log("Heads");
    }

    computerPlay();
    result();
  });
}

playerPlay();

function computerPlay() {
  let cP = Math.random() < 0.5 ? "Heads" : "Tails";
  console.log(cP);
}

function result() {
  if (pP > cP) {
    console.log(`pP choose ${pP} and computer choose ${cP}, pP wins.`);
    
  } else {
    console.log(`pP choose ${pP} and computer choose ${cP}, cP wins.`);
  }
};
*/

function playerPlay() {
  playerMove.addEventListener("click", () => {

    let playerCoin = Math.random() < 0.5 ? "Heads" : "Tails";

    let computerCoin = computerPlay();
    
    computerPlay();

    result(playerCoin, computerCoin);
  });
}

function computerPlay() {
  return Math.random() < 0.5 ? "Heads" : "Tails";
}

function result(playerCoin, computerCoin) {
  if (playerCoin === computerCoin) {
    resultPara.textContent = `Player choose ${playerCoin} & Computer choose ${computerCoin}, game is tie.`;
    
  } else if (playerCoin === "Heads" && computerCoin === "Tails") {
    resultPara.textContent = `Player choose ${playerCoin} & Computer choose ${computerCoin}, Player wins.`;
    
  } else {
    resultPara.textContent = `Player choose ${playerCoin} & Computer choose ${computerCoin}, Computer wins.`;
  }
};

playerPlay();

function resetBtn() {
  resetButton.addEventListener("click", () => {
    resultPara.textContent = "";
  })
};

resetBtn();