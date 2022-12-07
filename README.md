# Wordle Game

*A simple recreation of 2022's popular word game, Wordle.*

`Technologies used:` HTML, CSS, JavaScript, jQuery

`API used:` Datamuse
https://www.datamuse.com/api/

---

## Getting Started

[Play the game here](#)

Players have six attempts to guess a five-letter word, with feedback given in the form of tiles indicating when letters match or occupy the correct position.

![Screenshot showing 2 guesses](https://i.imgur.com/WvltCFj.png)

☑ Right letter, right place

☐ Right letter, wrong place

☒ Wrong letter

Additional feedback is provided for later guesses in the form of etymology clues (via API), including part of speech, associated words, and the definition.

![Screenshot showing 5 guesses](https://i.imgur.com/DiHGwgK.png)

---
## Minutia

Though aesthetically basic, the game was optimized for UX. The game include a streamlined submission field that doesn't need to be clicked before typing, and the page defaults to keeping that field in focus (active) so that players may play the game without need for their mouse (type, then hit enter).

The game also ensures all text would make your english teacher proud, with real time guess tracking and etymology hints being human-readable without awkward capitalization or a plural 'You have 1 guesses remaining'.

---

## Future Enhancements

#### Universal word list

*The game currently has one word hardcoded in. An array of curated words made avaiable to all players would allow the game to be played more than once, with people all playing for the same word each day.*

#### Edge case: words with duplicate letters (GREEN, HELLO, TAPAS, )

*The program doesn't accurately handle guesses with duplicate letters. For example, a Wordle of 'CRATE` with a guess of 'ARROW' would give ☐☐☐☒☒, wrongly hinting to the user that the correct answer has two 'R' characters.*

#### Graphical display

*Real-world Wordle displays user guesses in a grid, coloring the characters in each guess based on their correctness. I'd like to update this with a fully visual display for users.*

#### Butter-smooth scaling

*Like every good program, I'd like to use @media-query to allow good scaling for all displays, from smartphones to 4k desktop monitors.*

---

By Alex Westerlund