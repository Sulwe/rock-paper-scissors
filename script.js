const btn = document.querySelectorAll('.btn');
btn.forEach(element => element.addEventListener('click', playGame));

let rounds = 0;

let computerWins = 0;
let playerWins = 0;

function playGame() {

function getComputerChoice() {
    const arr = ['Rock', 'Paper', 'Scissors'];
    let randomIndex = Math.floor(Math.random() * arr.length);

    let computerChoice = arr[randomIndex];
    return computerChoice;
}
let computerSelection = getComputerChoice();

let playerSelection = prompt('Please input your choice');
console.log(playerSelection);
console.log(computerSelection);

function playRound(){

    
    if (computerSelection.toLowerCase() === 'rock' && playerSelection.toLowerCase() === 'paper'){
        console.log('You won! Paper beats Rock!');
        playerWins++;
    }   else if (computerSelection.toLowerCase() === 'paper' && playerSelection.toLowerCase() === 'rock'){
        console.log('Computer won! Paper beats Rock!');
        computerWins++;
    }   else if (computerSelection.toLowerCase() === 'rock' && playerSelection.toLowerCase() === 'scissors'){
        console.log('Computer won! Rock beats Scissors!');
        computerWins++;
    }   else if (computerSelection.toLowerCase() === 'scissors' && playerSelection.toLowerCase() === 'rock'){
        console.log('You won! Rock beats Scissors!');
        playerWins++;
    }   else if (computerSelection.toLowerCase() === 'paper' && playerSelection.toLowerCase() === 'scissors'){
        console.log('You won! Scissors beats Paper!');
        playerWins++;
    }   else if (computerSelection.toLowerCase() === 'scissors' && playerSelection.toLowerCase() === 'paper'){
        console.log('Computer won! Scissors beats Paper!');
        computerWins++;
    }   else if (computerSelection.toLowerCase() === playerSelection.toLowerCase()){
        console.log('You both selected the same entry, please try again!');
        playerWins = playerWins;
        computerWins = computerWins;
    }   else {
            console.log('Invalid choice, please input Rock, Paper or Scissors');
            playerWins = playerWins;
            computerWins = computerWins;
    }
}

playRound();

rounds++;

console.log(`Round number ${rounds}`);
console.log(`Computer Points = ${computerWins}`);
console.log(`Player Points = ${playerWins}`);

}



while(rounds < 5) {
    playGame();
}
if (playerWins > computerWins) {
    console.log('You have won the game!');
}  else if (computerWins > playerWins) {
    console.log('The computer has won the game!');
}  else {
    console.log('The game is a draw!');
}



