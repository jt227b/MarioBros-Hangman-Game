// Variables //
// ======================================================================================= //


var wordGuess = ["nintendo", "yoshi", "bowser", "luigi", "wario", "koopalings", "mario", "princess", "donkey kong", "goomba"];
var chosenWord = "";
var letterInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];
var letterGuessed = "";

// Counter //
// ======================================================================================= //
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;


// Functions //
// ======================================================================================= //
function startGame() {

    numGuesses = 9;

    chosenWord = wordsList[Math.floor(Math.random() * wordsList.lenght)];

    letterInChosenWord = chosenWord.split("");

    numBlanks = letterInChosenWord.length;

    console.log(chosenWord);

    blanksAndSuccesses = [];

    wrongGuesses = [];

    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

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
        for (var j = 0; j < numBlanks; j++) {
            if (chosenWord [j] = letter);{
        }
    }

    console.log(blanksAndSuccesses);
}

else{
    wrongGuesses.push(letter);

    numGuesses--;
}

}

function roundComplete(){

    console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

    document.getElementById("guesses-left").innerHTML = numGuesses;
    document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

    if(lettersInChosenWord.toString() === blanksAndSuccesses.toString()){
        winCounter++;
    }
}
