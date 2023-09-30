let rounds = 0;

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
    }   else if (computerSelection.toLowerCase() === 'paper' && playerSelection.toLowerCase() === 'rock'){
        console.log('Computer won! Paper beats Rock!');
    }   else if (computerSelection.toLowerCase() === 'rock' && playerSelection.toLowerCase() === 'scissors'){
        console.log('Computer won! Rock beats Scissors!');
    }   else if (computerSelection.toLowerCase() === 'scissors' && playerSelection.toLowerCase() === 'rock'){
        console.log('You won! Rock beats Scissors!');
    }   else if (computerSelection.toLowerCase() === 'paper' && playerSelection.toLowerCase() === 'scissors'){
        console.log('You won! Scissors beats Paper!');
    }   else if (computerSelection.toLowerCase() === 'scissors' && playerSelection.toLowerCase() === 'paper'){
        console.log('Computer won! Scissors beats Paper!');
    }   else {
            console.log('Invalid choice, please input Rock, Paper or Scissors')
    }
}

playRound();

rounds++;

console.log(`Round number ${rounds}`);

}



while(rounds < 5) {
    playGame();
}


