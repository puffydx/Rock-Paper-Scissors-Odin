const button1 = document.getElementById("rockbtn")
const button2 = document.getElementById("paperbtn")
const button3 = document.getElementById("scissorsbtn")
const humanscore = document.getElementById("humanscore")
const computerscore = document.getElementById("computerscore")
const results = document.getElementById ("scoreresults")


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
const humanselect = ("Pick one! Rock, Paper, or Scissors");

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
return `Human wins!`;
}
else if (computerChoice === "Scissors" && humanChoice === "Paper" || computerChoice === "Paper" && humanChoice === "Rock" || 
    computerChoice === "Rock" && humanChoice === "Scissors"
) {
computerScore++
return `Computer wins!`;
}
else {
    return "Invalid input detected! No points awarded this round.";
}
}

button1.addEventListener ("click", function() {
    const roundResult = playRound("Rock", getComputerSelection())
    humanscore.textContent = `Human: ${humanScore}`
    computerscore.textContent = `Computer: ${computerScore}`
    results.textContent = `${roundResult}`;
if (humanScore === 5) {
    results.textContent = "Human is the grand winner! Refresh page to play again.";
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
} else if (computerScore === 5) {
    results.textContent = "Computer is the grand winner! Refresh page to play again.";
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
}
});

button2.addEventListener ("click", function() {
    const roundResult = playRound("Paper", getComputerSelection())
    humanscore.textContent = `Human: ${humanScore}`
    computerscore.textContent = `Computer: ${computerScore}`
    results.textContent = `${roundResult}`;
if (humanScore === 5) {
    results.textContent = "Human is the grand winner! Refresh page to play again.";
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
} else if (computerScore === 5) {
    results.textContent = "Computer is the grand winner! Refresh page to play again.";
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
}
});

button3.addEventListener ("click", function() {
   const roundResult = playRound("Scissors", getComputerSelection())
    humanscore.textContent = `Human: ${humanScore}`
    computerscore.textContent = `Computer: ${computerScore}`
    results.textContent = `${roundResult}`;
if (humanScore === 5) {
    results.textContent = "Human is the grand winner! Refresh page to play again.";
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
} else if (computerScore === 5) {
    results.textContent = "Computer is the grand winner! Refresh page to play again.";
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
}
});


