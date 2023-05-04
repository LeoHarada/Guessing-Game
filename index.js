// A winning number between 1-100 will be randomly generated.
// The player inputs their guess in a text input field.
// The player clicks a button to submit their guess.
// If the player guesses the winning number, they win! Otherwise, they are allowed to try again.
// The game should give a hint after each guess, letting them know whether to guess higher or lower as well as how close they are.
// After five unsuccessful guesses, the game is over and the player loses.

const goButton = document.querySelector("#submit");
const input = document.querySelector("input")
const newMessage = document.querySelector("#subtitle")



// A winning number between 1-100 will be randomly generated.
function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const rndInt = randomNumber(1, 100)
  console.log(rndInt)

  const winningNumber = rndInt.toString();

/*   function guessNumber() {
    return guessedNumber = input.value;
  } const myNumber = guessNumber();
   */

/*   goButton.addEventListener("click", function(){
    if (guessedNumber === winningNumber) {
        newMessage.innerHTML = "You Win";
        console.log(winningNumber)
        else {}
    }

    // newMessage.innerHTML = input.value;
    }); */




goButton.addEventListener("click", function(){
if (input.value === winningNumber) {
    newMessage.innerText =  "You Win";
} else { newMessage.innerText = "You Lose";
}

});