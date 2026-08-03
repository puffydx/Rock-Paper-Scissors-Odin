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

const humanChoice = getHumanSelection();
const computerChoice = getComputerSelection();

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
else {
computerScore++
return `Computer wins! Score: Human ${humanScore} - Computer ${computerScore}`;
}
}

}
alert (playRound(humanChoice, computerChoice));