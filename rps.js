function getComputerSelection () {
let random = Math.floor(Math.random () * 3) + 1;
let computerselect = "";
if (random === 1) {
computerselect = "Rock";
} else if (random === 2) {
    computerselect = "Paper";
} else {
    computerselect = "Scissors";
}
return computerselect;
}

function getHumanSelection () {
const humanselect = prompt("Pick one! Rock, Paper, or Scissors");

if (humanselect.toLowerCase() === "rock") {
    return "Rock";
}
else if (humanselect.toLowerCase() === "paper") {
    return "Paper";
}
else if (humanselect.toLowerCase() === "scissors") {
    return "Scissors";
}
else {
    return "Invalid Choice! Please try again.";
}

}


function playGame () {

let humanScore = 0;
let computerScore = 0;

function playRound (humanChoice, computerChoice) {
if (humanChoice === computerChoice) { 
 return "Tie! Play again.";
}
else if (humanChoice === "Scissors" && computerChoice === "Paper" || humanChoice === "Paper" && computerChoice === "Rock"
    || humanChoice === "Rock" && computerChoice === "Scissors"
) {
humanScore++
return `Human wins! Score: Human ${humanScore} - Computer ${computerScore}`;
}
else if (computerChoice === "Scissors" && humanChoice === "Paper" || computerChoice === "Paper" && humanChoice === "Rock" || 
    computerChoice === "Rock" && humanChoice === "Scissors"
) {
computerScore++
return `Computer wins! Score: Human ${humanScore} - Computer ${computerScore}`;
}
else {
    return "Invalid input detected! No points awarded this round.";
}
}

for (let i = 0; i < 5; i++) {
const humanChoice = getHumanSelection();
const computerChoice = getComputerSelection();
    alert (playRound(humanChoice, computerChoice));
}

if (humanScore > computerScore) {
    alert(`Game Over! You won the tournament! Final Score: ${humanScore} to ${computerScore}`);
}
else if (humanScore < computerScore) {
    alert(`Game Over! The Computer won the tournament! Final Score: ${computerScore} to ${humanScore}`);
}
else {
    alert(`Game Over! The tournament ended in a tie! Final Score: ${humanScore} to ${computerScore}`);
}

}

playGame();

