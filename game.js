// Possible choices one can choose
const choices = ["rock", "paper", "scissors"];
const winners =[];

// Play game
// Play 5 rounds
function game () {
    for (let i =1; i <5; i++) {
      playRound(i);
    }
    document.querySelector('button').textContent = 'Play new game'
    logWins();
}

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection,computerSelection);
  winners.push(winner);
  logRound(playerSelection,computerSelection,winner,round);
}

function playerChoice () {
  // Get input from player
  let input = prompt("Type Rock, Paper or Scissors");
  // To make sure the code doesn't break when cancelled
  while(input == null) {
    input = prompt("Type Rock, Paper or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while(check == false) {  // Continously runs until check = True
    input = prompt(
      "Type Rock, Paper, or Scissors, spelling must be correct"
    );
    while(input == null) {
      input = prompt("Type Rock, Paper or Scissors");
    }
    input=input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function computerChoice() {
  //get random input from computer
  // Returns any number from 0-2.99 because math floor returns decimal
    return choices [Math.floor(Math.random() * choices.length)];
  }

// Make sure choiceis one of 3 possible ones
function validateInput(choice){
  if(choices.includes(choice)) {
    return true;
  } 
    return false;
  }

function checkWinner(choiceP, choiceC){
  if(choiceP === choiceC) {
    return 'Tie'; 
  } else if 
  ((choiceP ==="rock" && choiceC === "scissors") 
  || (choiceP ==="paper" && choiceC === "rock")
  || (choiceP ==="scissors" && choiceC === "paper")
  ){
    return "Player";
  } else { // in any other case, computer wins
    return "Computer";
  }
}

// Create an array of winners, looping hrough each item and if it equals player than keep/ add to player

function logWins(){ 
   let playerWins = winners.filter((item) => item == "Player").length;
   let computerWins = winners.filter((item) => item == "Computer").length;
   let ties = winners.filter((item) => item == "Tie").length;
   console.log("Results:");
   console.log("Player Wins:", playerWins);
   console.log("Computer Wins:", computerWins);
   console.log("Ties:", ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
  console.log("Round:", round);
  console.log("Player Chose:", playerChoice);
  console.log("Computer Chose:", computerChoice);
  console.log(winner, "Won the Round");
  console.log("----------------");
}
