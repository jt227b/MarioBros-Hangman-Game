// Variables //
// ================================================================================ //

var wordsList = ["nintendo", "yoshi", "bowser", "luigi", "wario", "koopalings", "mario", "princess", "donkey kong", "goomba"];
var chosenWord = "";
var lettersInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];
var letterGuessed = "";

// Counters //
// ================================================================================ //
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;

// Function //
// ================================================================================ //
function startGame() {


    numGuesses = 9;
    chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    lettersInChosenWord = chosenWord.split("");
    numBlanks = lettersInChosenWord.length;
    console.log(chosenWord);
    blanksAndSuccesses = [];
    wrongGuesses = [];

    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    // Print in console //
    // ================================================================================ //
    console.log(blanksAndSuccesses);


    document.getElementById("guesses-left").innerHTML = numGuesses;
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}

function checkLetters(letter) {

    var letterInWord = false;


    for (var i = 0; i < numBlanks; i++) {

        if (chosenWord[i] === letter) {

            letterInWord = true;
        }
    }


    if (letterInWord) {

        // Loop //
        // ================================================================================ //
        for (var j = 0; j < numBlanks; j++) {

            if (chosenWord[j] === letter) {

                blanksAndSuccesses[j] = letter;
            }
        }

        console.log(blanksAndSuccesses);
    }

    else {

        wrongGuesses.push(letter);

        numGuesses--;

    }

}

// Function //
// ================================================================================ //

function roundComplete() {


    console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);


    document.getElementById("guesses-left").innerHTML = numGuesses;
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");


    if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {


        winCounter++;

        // Win Alert //
        // ================================================================================ //

        alert("It's-A Me, Mario! You Win");
        document.getElementById("win-counter").innerHTML = winCounter;
        startGame();
    }


    else if (numGuesses === 0) {
        lossCounter++;

        // Lose Alert //
        // ================================================================================ //

        alert("Mamma mia! You lose");
        document.getElementById("loss-counter").innerHTML = lossCounter;
        startGame();

    }

}

// Function //
// ================================================================================ //

startGame();

document.onkeyup = function (event) {
    letterGuessed = String.fromCharCode(event.which).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();


}

