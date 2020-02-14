
// TO DO: initialize (reset)

// CONSTANTS

const words = ["McCormick", "Broflovski", "Barbrady", "TweekTweak"];
let currWord = ""; // word that the player has to guess
let correctLetters = [];
let wrongLetters = [];
let numberOfTries = 0;
let fallIncrement = 0;
let meteorStart = 0;
let meteorEnd = 45;
//let meteorPosition = 0;
//gameHeight = document.getElementById("animation").clientHeight;

// STATE VARIABLES

// CACHED ELEMENTS

let btnStart = document.getElementById("btnStart");
let keyboard = document.getElementById("keyContainer");
let meteor = document.getElementById("meteorImg");

// EVENT LISTENERS

keyboard.addEventListener("click", selectLetter);
btnStart.addEventListener("click", startGame);



function isLetterUsed (letter) {
    return correctLetters.includes(letter) || wrongLetters.includes(letter); // returns true or false
}

function selectLetter (event) {
    if (numberOfTries === 0) {
        return;
    }
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
        numberOfTries--;
        moveMeteor();
        checkForLoss();
    }
    disableKey(letter, element);
}


function checkForWin () {
    if (currWord.length === correctLetters.length) {
        let animationBox = document.getElementById("animation");
        animationBox.innerHTML = "<img id = \"deadKenny\" src =\" css/images/happy_kenny.png\">" + "<h1 id = \"omgText\"> CONGRATS!!!";

    }
    console.log(correctLetters);
}


function checkForLoss () {
    if (numberOfTries <=0) {
        let animationBox = document.getElementById("animation");
        animationBox.innerHTML = "<img id = \"deadKenny\" src =\" css/images/dead_kenny.gif\">" + "<h1 id = \"omgText\"> OH MY GOD! </br> YOU JUST KILLED KENNY!!!";
    }
} 

function disableKey (letter, element) {
    element.style.color = "lightgrey";
   // element.style.border = "2px solid lightgrey";
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


function drawHiddenWord () {
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
    document.getElementById("hiddenWord").innerHTML = ""; // clears the cells and borders
    shuffleWords (words); // randomizes the words in the array
    currWord = words.pop().toUpperCase(); // saves the current word in upper case
    console.log(currWord);

    numberOfTries = Math.floor(currWord.length - 0.3 * currWord.length); // calculates number of tries based on the length of the word
    console.log(numberOfTries);

    fallIncrement = meteorEnd/numberOfTries; // sets the number the meteor needs to fall at every wrong try

    drawHiddenWord(); // draws the cells and borders
   // console.log(gameHeight);
}


function moveMeteor () {
    let meteor = document.getElementById("meteorImg");
    //let animation = document.getElementById("animation");
   // let pos = (wrongLetters.length/numberOfTries) * animation.maxTopOffset - meteor.maxTopOffset/2;
   if (!meteor.style.top) {
       meteor.style.top = fallIncrement + "vh";
   } else {
        let meteorTop = parseFloat(meteor.style.top);
        meteor.style.top = meteorTop + fallIncrement + "vh";
   }

   // meteor.Top += fallIncrement + "vh";
    /*
    meteorPosition += maxTopOffset / numberOfTries;
    meteor.style.top = meteorPosition + 'px'; 

    let pos = (wrongLetters.length/numberOfTries) * 100;
    meteor.style.top = pos + "%";
    console.log(pos);
    pos = maxTopOffset / numberOfTries;
    meteor.style.top = pos + 'px'; 
    pos = maxTopOffset - pos;
    console.log(pos);   */
} 







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