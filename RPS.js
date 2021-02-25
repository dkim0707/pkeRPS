function computerPlay() {
    let comp = Math.floor(Math.random() * Math.floor(3));
    if (comp == 0){
        return "grass";
    } else if (comp == 1) {
        return "water";
    } else if (comp == 2) {
        return "fire";
    }
}

function playerPlay() {
    return document.getElementById;
}

function round() {
    
}

function printResults(playerWins, computerWins) {
    document.textContent("Player: ", playerWins, '\n', "Gary: ", computerWins, '\n');
}