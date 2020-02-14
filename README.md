# Don't kill Kenny - just another hangman game

![DKK] (https://static.spin.com/files/2019/06/south_park_still_h_2016-1561757034-640x360.jpg)


**Don't kill Kenny** is a South Park inspired hangman game that randomizes South Park characters names that need to be guessed by the player. With every wrong letter typed by the player, the meteorite is getting closer to Kenny. The player's objective is to keep Kenny alive.


## Game play

- shows the blank space for each letter
- randomize hidden word taken from an predefined array of character names
- show the keyboard on the screen from where the player can pick letters
- uses images to show the status of the game
- the number of letters needs to be longer than the number of tries
- player wins when the correct word is revealed
- player loses when the meteorite is on top of Kenny
- game will restart with a new random word


## Future developments

- get randomized words from a word API
- give clues to the player about the word
- select word by topic
- add level to the game (easy, medium, hard)
- add score and rounds

## Game logic:

The game:
- keeps one word at a time + its letters
- shows letter if inside the word
- moves meteorite if letter is not inside the word
- shows if player won or lost (if word is guessed in X tries)
- resets to new game and new word

The player:
- sees the hidden word length
- sees letter board
- is able to select letters
- sees the selected letters that don't match the word
- wins if the word is guessed before meteorite reaches Kenny



