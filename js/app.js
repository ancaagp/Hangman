console.log("hola");

// CONSTANTS

const words = [];
let currWord = ""; // word that the player has to guess
let correctLetters = ["L", "R", "T"];
let wrongLetters = [];
let numberOfTries = 5;


// STATE VARIABLES

// CACHED ELEMENTS

// EVENT LISTENERS

// FUNCTIONS

hasLetter (word, letter) {
    // checks if the letter is in the word - boolean
};

calculateTries (word) {
    // returns number of tries for a givem word
};

randomizeWord (arrayWords) {

};

selectLetter (letter) {
    // user selects letter and check for match with hasLetter
    // adds letter to wrong or correct array
}

updateHiddenWord () {
    // adds correct letter to hidden word
}

updateWrongLetter () {
    // adds letter to array and crosses on keyboard
}

checkForWin () {
    // checks if player won
}

checkForLoss () {
    // checks is player lost
}

// game starts:
// randomize word
// calculate tries based on word length
// store tries in numberOfTries
// store randomized word in currWord

// during game:
// player selects letter
// letter is saved in wrong or right array
// hidden word is updated or meteoroid moves closer to kenny
// check for win (word length and character match)
// check for lose (compare word length with number of tries)
// do this for numberOfTries

// Extras:
// new game
// score