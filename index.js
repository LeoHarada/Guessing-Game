// A winning number between 1-100 will be randomly generated.
// The player inputs their guess in a text input field.
// The player clicks a button to submit their guess.
// If the player guesses the winning number, they win! Otherwise, they are allowed to try again.
// The game should give a hint after each guess, letting them know whether to guess higher or lower as well as how close they are.
// After five unsuccessful guesses, the game is over and the player loses.

const goButton = document.querySelector("#submit");
const input = document.querySelector("#player-input");
const newMessage = document.querySelector("#subtitle");
const guessList = document.querySelector('#guess-list');
const header = document.querySelector('#title');

let playersGuess = null;
let pastGuesses = [];

function generateWinningNumber() {
    return Math.ceil(Math.random()*100);
}

const winningNumber = generateWinningNumber();
console.log(winningNumber);

goButton.addEventListener("click", function(){
    playersGuess = parseInt(input.value);
    var result = checkGuess();
    newMessage.innerText = result;
});

const difference = function() {
    return Math.abs(playersGuess-winningNumber);
};

const isLower = function() {
    return playersGuess < winningNumber;
};

const playersGuessSubmission = function(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        return "That is an invalid guess";
    }
};

const checkGuess = function() {
    if (playersGuess===winningNumber) {
        goButton.disabled = true;
        newMessage.innerText = "RESET THE GAME to play again!";
        return 'You win! The winning number was ' + winningNumber + '.';
    }
    else {
        if (pastGuesses.indexOf(playersGuess) > -1) {
            return 'You\'ve already guessed that!';
        }
        else {
            pastGuesses.push(playersGuess);
            guessList.querySelector(`li:nth-child(${pastGuesses.length})`).textContent = playersGuess;            
            if(pastGuesses.length===5) {
                goButton.disabled = true;
                newMessage.innerText = "RESET THE GAME to play again!";
                input.disabled = true;
                return 'You Lose. The winning number was ' + winningNumber + '.';
            }
            else {
                var diff = difference();
                if(isLower()) {
                    newMessage.innerText = "Guess Higher!";
                } else {
                    newMessage.innerText = "Guess Lower!";

                }
                if (diff<10) return 'You\'re burning up!';
                else if (diff<25) return 'You\'re lukewarm.';
                else if (diff<50) return 'You\'re a bit chilly.';
                else return 'You\'re cold!';
            }
        }
    }
};

function makeAGuess(game) {
    var guess = input.value;
    input.value = "";
    var output = game.playersGuessSubmission(parseInt(guess,10));
    header.textContent = output;
}
