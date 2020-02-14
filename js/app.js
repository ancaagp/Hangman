

// CONSTANTS

const words = ["McCormick", "Broflovski", "Barbrady", "TweekTweak", "MrGarrison", "Sheila","MrSlave", "Butters", "Testaburger"];
const meteorStart = 0;
const meteorEnd = 45;


// STATE VARIABLES

let currWord = ""; // word that the player has to guess
let correctLetters = [];
let wrongLetters = [];
let numberOfTries = 0;
let fallIncrement = 0;


// CACHED ELEMENTS

let btnStart = document.getElementById("btnStart");
let keyboard = document.getElementById("keyContainer");
let meteor = document.getElementById("meteorImg");


// EVENT LISTENERS

keyboard.addEventListener("click", selectLetter);
btnStart.addEventListener("click", startGame);


// FUNCTIONS

// CORE FUNCTIONS

// starts and resets game
function startGame () {
    document.getElementById("hiddenWord").innerHTML = ""; // clears the cells and borders
    shuffleWords (words); // randomizes the words in the array
    currWord = words.pop().toUpperCase(); // saves the current word in upper case
    numberOfTries = Math.floor(currWord.length - 0.3 * currWord.length); // calculates number of tries based on the length of the word
   
    // resets the arrays to empty
    correctLetters = []; 
    wrongLetters = [];
    
    fallIncrement = meteorEnd/numberOfTries; // sets the number the meteor needs to fall at every wrong try
    resetMeteor();
    restartAnimation();
    resetKeyboard();
    drawHiddenWord(); // draws the cells and borders
}

// collects player input 
function selectLetter (event) {
    if (numberOfTries <= 0) { // doesn't allow to select letters if if player loses
        return;
    }
    let selectedLetter = event.target.textContent; 
    let selectedElement = event.target;
    // continues game if the letter clicked hasn't been used yet
    if (isLetterUsed(selectedLetter) !== true) {
        checkForMatch(selectedLetter);
        disableKey(selectedElement);
    }
} 

// checks if the selected letter is correct
function checkForMatch (letter) {
    let count = countLetter(currWord,letter); // holds the number of same letter in the word
    if (count > 0) {
        for (let i = 0; i < count; i++) {
            correctLetters.push(letter);
        }
        addLetterToWord(letter, false); // passes false to the highlight
        checkForWin();
    } else {
        wrongLetters.push(letter);
        numberOfTries--; // decreases number of tries after each wrong guess
        moveMeteor();
        checkForLoss();
    }
}

function checkForWin () {
    if (currWord.length === correctLetters.length) {
        winAnimation();
    }
}

function checkForLoss () {
    if (numberOfTries <=0) {
        dieAnimation();

        // adds missing letters to the word
        for (let i = 0; i < currWord.length; i++) {
            let curLetter = currWord[i]; 
            // highlights missing letters at the end of the game
            if (correctLetters.includes(curLetter) === false) {
                addLetterToWord(curLetter, true);
            }
        }
    }
} 

// moves meteor image according to player mistakes
function moveMeteor () {
    let meteor = document.getElementById("meteorImg");
    // if meteor top is not set, starts with fallIncrement number
    if (!meteor.style.top) {
        meteor.style.top = fallIncrement + "vh";
    } else {
        // converts string to number
        let meteorTop = parseFloat(meteor.style.top);
        meteor.style.top = meteorTop + fallIncrement + "vh";
    }
}

// AUXILIARY FUNCTIONS

function shuffleWords (arrayWords) {
    for (let i = arrayWords.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arrayWords[i], arrayWords[j]] = [arrayWords[j], arrayWords[i]];
    }
}

function countLetter (word, letter) {
    // checks if the letter is in the word, returns how many times the letter is in the word
    let count = 0; 
    for (let i = 0; i < word.length; i++) {
        if (letter === word[i]) { 
            count ++;
        }
    } 
    return count;
};

// inserts dynamically the table used to display the chosen word
function drawHiddenWord () {
    let table = document.getElementById("hiddenWord");
    let row = table.insertRow(0);
    for (let i = 0; i < currWord.length; i++) {
        row.insertCell(i);
    }
} 

// checks if letter was clicked, returns true or false
function isLetterUsed (letter) {
    return correctLetters.includes(letter) || wrongLetters.includes(letter);
}

// adds letter to the correct position in the word
function addLetterToWord(letter, highlight) { 
    let cell = document.getElementsByTagName('td');
    for (let i = 0; i < currWord.length; i++) {
        if (letter === currWord[i]) {
            // if highlight is true, colors letter in red
            if (highlight) {
                cell[i].style.color = "red";
            }
            cell[i].innerHTML = letter;
        } 
    }
}

// colors grey the typed keys
function disableKey (element) {
    element.setAttribute("class", "keyDisabled");
}

// shows win div and hides the other divs on the page
function winAnimation() {
    document.getElementById("animation").style.display = "none";
    document.getElementById("dieAnimation").style.display = "none";
    document.getElementById("winAnimation").style.display = "block";
}

// shows die div and hides the other divs on the page
function dieAnimation() {
    document.getElementById("animation").style.display = "none";
    document.getElementById("dieAnimation").style.display = "block";
    document.getElementById("winAnimation").style.display = "none";
}

// RESET FUNCTIONS

// hides the win and lose anymation
function restartAnimation() {
    document.getElementById("animation").style.display = "block";
    document.getElementById("dieAnimation").style.display = "none";
    document.getElementById("winAnimation").style.display = "none";
}

// moves meteor position back to 0vh
function resetMeteor() {
    let meteor = document.getElementById("meteorImg");
    meteor.style.top = "0vh";
}

// removes style from keyboard
function resetKeyboard () {
    let keyboardElements = document.getElementById("keyContainer").getElementsByTagName('li');
    for (let i = 0; i < keyboardElements.length; i++) {
        let keyboardUlEl = keyboardElements[i];
        keyboardUlEl.classList.remove("keyDisabled");
    }
}


