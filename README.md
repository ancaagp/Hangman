# Don't kill Kenny - just another hangman game

![DKK](https://static.spin.com/files/2019/06/south_park_still_h_2016-1561757034-640x360.jpg)


**Don't kill Kenny** is a South Park inspired hangman game that randomizes the names of South Park characters a that need to be guessed by the player. With every wrong letter typed by the player, the meteorite is getting closer to Kenny. The player's objective is to keep Kenny alive.


## Game play

- there are 9 different names of South Park characters (NOT the main ones - they are too easy :smirk: )
- the player needs to guess the randomized name by clicking one letter at a time
- if a wrong letter is clicked the meteorite moves closer to Kenny
- the number of letters the word has is than the number of tries
- player wins when the correct word is revealed
- player loses when the meteorite is on top of Kenny
- game restarts with a new random word


## Game logic

**The game:**
- keeps one word at a time + its "hidden" letters
- shows the blank space for each letter
- shows letter if inside the word
- moves meteorite if letter is not inside the word
- shows if player won or lost (if word is guessed in X tries)
- resets to new game and new word

**The player:**
- sees the hidden word length
- sees letter board
- is able to select letters from a keyboard
- sees the selected letters that don't match the word
- wins if the word is guessed before meteorite reaches Kenny

**The UI:**
- shows a clickable keayboard
- shows the length of the hidden word with border bottom
- moves a meteorite image for every wrong letter
- shows image and win message when word is guessed
- shows message when game is lost and displays hidden word


## Future developments

- get randomized words from a word API
- give clues to the player about the word
- select word by topic
- add level to the game (easy, medium, hard)
- add score and rounds