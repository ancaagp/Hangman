# Hangman
Hangman game

This is a letter guessing game, where the player needs to guess letters in order to reveal the hidden word. With every wrong letter typed by the player, a new element in the hangman is drawn. The user loses when the hangman is drawn entirely.

MVP:
- show the blank space for each letter
- randomize hidden word taken from an API
- show the keyboard on the screen from where the player can pick letters
- draw a new element of hangman with each wrong letter clicked
- the number of letters needs to be longer than the elements in the hangman
- player can guess the whole word when there are min 3 letters displayed on the screen
- player wins when the correct word is revealed
- player loses when the hangman is drawn
- game will restart with a new random word

Possible stretch goals:
- give clues to the player
- add additional complexity to the game (add timer, add levels: easy, medium, hard, select words by topic);

GAME LOGIC:

The game:
- keep one word at a time + its letters
- show letter if inside the word
- draw hangman segment if letter is not inside the word
- show message if letter matches the word
- show message if letter doesn't match the word
- add points
- show if player won or lost (if word is guessed in X tries)
- reset to new game and new word

The player:
- see the hidden word length
- see letter board
- be able to select letters
- see the selected letters that don't match the word
- wins if the word is guessed before hangman is drawn

Constants:
- player object

State variables:
- board
- winner


