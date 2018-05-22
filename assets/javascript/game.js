alert("Guess the correct letter?")

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    console.log(letters);

var wins = 0;
var losses = 0;
var guessesLeft = 0;
var guesses = 0;

document.onkeyup = function(event) {

var playerGuesses = event.key.toLowerCase();

var compGuesses = letters[Math.floor(Math.random() * letters.length)]
    console.log(compGuesses);

if (playerGuesses === compGuesses) {
    alert('You guessed right!!');
    console.log(playerGuesses);
}

}
