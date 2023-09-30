function getComputerChoice() {
    const arr = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * arr.length);

    const computerChoice = arr[randomIndex];
    return computerChoice;
}


