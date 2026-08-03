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

console.log(getComputerSelection());