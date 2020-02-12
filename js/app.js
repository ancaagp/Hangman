console.log("hola");

// CONSTANTS

const words = ["McCormick", "Broflovski", "Barbrady", "TweekTweak"];
let currWord = ""; // word that the player has to guess
let correctLetters = [];
let wrongLetters = [];
let numberOfTries = 5;
let currCorrectLetter = "";

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

/*
function updateHiddenWord (letter) {
    let cell = document.getElementsByTagName('td');
    for (let i = 0; i < currWord.length; i++) {
         if (letter === currWord[i]) {
            cell[i].innerHTML = letter;
         } 
    }
} */



function checkForMatch (letter, element) {
    let count = countLetter(currWord,letter);
    if (count > 0) {
        for (let i = 0; i < count; i++) {
            correctLetters.push(letter);
        }
        let cell = document.getElementsByTagName('td');
        for (let i = 0; i < currWord.length; i++) {
             if (letter === currWord[i]) {
                cell[i].innerHTML = letter;
             } 
        }
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
    for (let i = arrayWords.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arrayWords[i], arrayWords[j]] = [arrayWords[j], arrayWords[i]];
    }
}


function countLetter (word, letter) {
    // checks if the letter is in the word - returns 0 or >=1
    let count = 0; 
    for (let i = 0; i < word.length; i++) {
        if (letter === word[i]) {
            count ++;
           // currCorrectLetter = letter;
        }
    } 
    return count;
};


function createHiddenWordLines () {
    let table = document.getElementById("hiddenWord");
    let row = table.insertRow(0);
    for (let i = 0; i < currWord.length; i++) {
        row.insertCell(i);
    }
} 

/*
function addWordTd (letter) {
    let cell = document.getElementsByTagName('td');
    for (let i = 0; i <= currWord.length; i++) {
        cell[i].innerHTML = letter;
    }
    console.log(letter);
}
*/



function startGame () {
    shuffleWords (words); 
    currWord = words.pop().toUpperCase();
    console.log(currWord);
    
    let wordLength = currWord.length;
    numberOfTries = Math.floor(wordLength - 0.3 * wordLength);
    createHiddenWordLines();
    moveMeteor();
}

function moveMeteor () {
    let meteor = document.getElementById("meteorImg");
    let pos = 20;
    let id = setInterval(calcMoves, 10);
    function calcMoves () {
        meteor.style.top = pos + '%';
    }
}

// send number tries to meteor function
// call moveMeteor on worng letter click






// ERRORS:

// app.js:92 Uncaught TypeError: Cannot read property 'toUpperCase' of undefined
// at HTMLButtonElement.startGame (app.js:92)


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