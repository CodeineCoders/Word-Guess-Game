var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
console.log(letters);
alert("Guess the correct letter?")
var wins = 1;
var losses = 1;
var guessesLeft = 9;
var GuessArr = [];

var compGuesses = letters[Math.floor(Math.random() * letters.length)]
console.log(compGuesses);


document.onkeyup = function (event) {

    var playerGuesses = event.key.toLowerCase();
    GuessArr.push(playerGuesses);

    var reset = function () {
        guessesLeft = 9;
        GuessArr = [];

    }

    if (playerGuesses == compGuesses) {
        alert('You guessed right!!');
        document.getElementById('wins').innerHTML = ('Wins: ' + wins++);
        alert('Play Again ?');
        reset();
        console.log(playerGuesses);
    }

    else if (playerGuesses != compGuesses) {
        document.getElementById('guessLeft').innerHTML = ('Guesses Left: ' + guessesLeft--);
        document.getElementById('guesses').innerHTML = ('Your Guesses so far: ' + GuessArr + (','));
    }

    if (guessesLeft < 0) {
        alert('You Lost, Play again? ');
        document.getElementById('losses').innerHTML = ('Losses: ' + losses++);
        reset();
    }


}
