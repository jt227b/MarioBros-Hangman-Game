// VARIABLES
// =======================================================================================

// Various Arrays



var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wordGuess = ["nintendo", "yoshi", "bowser", "luigi", "wario", "koopalings", "mario", "princess", "donkey kong", "goomba"];

var chosenWord = "";

var letterInChosenWord = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongGuesses = [];

var letterGuessed = "";

// Counter //
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;



function startGame() {

numGuesses = 9;

chosenWord = wordsList[Math.floor(Math.random() * wordsList.lenght)];

letterInChosenWord = chosenWord.split ("");




}