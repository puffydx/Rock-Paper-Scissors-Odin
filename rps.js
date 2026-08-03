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
const choice = prompt("Pick one! Rock, Paper, or Scissors");

if (choice.toLowerCase() === "rock") {
    return "Rock";
}
else if (choice.toLowerCase() === "paper") {
    return "Paper";
}
else if (choice.toLowerCase() === "scissors") {
    return "Scissors";
}
else {
    return "Invalid Choice! Please try again.";
}

}
console.log(getComputerSelection());
alert (getHumanSelection());