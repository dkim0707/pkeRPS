function computerPlay() {
    let comp = Math.floor(Math.random() * Math.floor(3));
    if (comp == 0){
        return "bulb";
    } else if (comp == 1) {
        return "squirtle";
    } else if (comp == 2) {
        return "charmander";
    }
}

function rivalTextChoose() {
    let rivalText = document.getElementById("rivalText");
    rivalText.textContent = "I choose you...!"
}

function round() {
    let computerSelection = computerPlay();
    let playerSelection = document.getElementsByName("playerPoke");
    let image = document.getElementById("rivalPoke");
    image.src = computerSelection + ".png";
    var playerValue;
    for(var i = 0; i < playerSelection.length; i++){
        if(playerSelection[i].checked){
            playerValue = playerSelection[i].value;
        }
    }

    if (computerSelection == playerValue) {
        document.getElementById("result").textContent = "Tie";
    }
    
}

function printResults(playerWins, computerWins) {
    document.textContent("Player: ", playerWins, '\n', "Gary: ", computerWins, '\n');
}