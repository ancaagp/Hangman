console.log("hola");

// CONSTANTS

const words = ["McCormick", "Broflovski", "Barbrady", "TweekTweak"];
let currWord = "LETTER"; // word that the player has to guess
let correctLetters = [];
let wrongLetters = [];
let numberOfTries = 5;

// STATE VARIABLES

// CACHED ELEMENTS

let btnStart = document.getElementById("btnStart");
let keyboard = document.getElementById("keyContainer")

// EVENT LISTENERS

keyboard.addEventListener("click", selectLetter);
btnStart.addEventListener("click", startGame);



function isLetterUsed (letter) {
    return correctLetters.includes(letter) || wrongLetters.includes(letter); // returns true or false
}

function selectLetter (event) {
    let selectedLetter = event.target.textContent;
    let selectedElement = event.target;
    if (isLetterUsed(selectedLetter) !== true) {
        checkForMatch(selectedLetter, selectedElement);
    }
} 


function countLetter (word, letter) {
    // checks if the letter is in the word - returns 0 or >=1
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (letter === word[i]) {
            count ++;
        }
    } 
    return count;
};

function updateHiddenWord (letter) {
    // adds correct letter to hidden word
    // hint: https://www.w3schools.com/jsref/met_table_insertrow.asp
}

function checkForMatch (letter, element) {
    let count = countLetter(currWord,letter);
    if (count > 0) {
        for (let i = 0; i < count; i++) {
            correctLetters.push(letter);
        }
        updateHiddenWord(letter);
        checkForWin();
    } else {
        wrongLetters.push(letter);
        // update meteorite
        // check for loss
    }
    disableKey(letter, element);
}

function checkForWin () {
    if (currWord.length === correctLetters.length) {
        console.log("You won");
    }
    console.log(correctLetters);
}

function disableKey (letter, element) {
    element.style.color = "lightgrey";
    element.style.border = "2px solid lightgrey";
}

function shuffleWords (arrayWords) {
    for (let i = arrayWords.length; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arrayWords[i], arrayWords[j]] = [arrayWords[j], arrayWords[i]];

    }
}

function startGame () {
    shuffleWords (words);
    currWord = words.pop().toUpperCase();
    console.log(currWord);
    
    let wordLength = currWord.length;
    updateHiddenWord();
    numberOfTries = Math.floor(wordLength - 0.3 * wordLength);
}





/* -----------------------------------------

// FUNCTIONS


calculateTries (word) {
    // returns number of tries for a given word
};

randomizeWord (arrayWords) {

};

selectLetter (letter) {
    // user selects letter and check for match with hasLetter
    // adds letter to wrong or correct array
}



updateWrongLetter () {
    // adds letter to array and crosses on keyboard
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


*/