# Wordle Game

*A simple recreation of 2022's popular word game, Wordle.*

**Languages:** HTML, CSS, JavaScript

**Frameworks:** jQuery

**API:** Datamuse (https://www.datamuse.com/api/)

---

## Getting Started

[Find the game here](https://alexwestisbest.github.io/Wordle-game/)

Players have six attempts to guess a five-letter word, with feedback given in the form of tiles indicating when letters match or occupy the correct position.

![Screenshot showing 2 guesses](https://i.imgur.com/TfxK3Y1.png)

☑ Right letter, right place

☐ Right letter, wrong place

☒ Wrong letter

Additional feedback is provided for later guesses in the form of etymology clues (via API), including part of speech, associated words, and finally the definition.

![Screenshot showing 5 guesses](https://i.imgur.com/f5CgpwU.png)

---

## Minutia

The game was optimized for a clean UX and efficient play. For example, the submission field stays in focus awaiting keyboard input, and all etymology hints are human-readable without awkward capitalization or a plural 'You have 1 guesses remaining'.

In addition, the text entry field contains robust user-proofing for edge cases. It checks that every guess...

- Is exactly 5 characters
- Isn't made of numbers/symbols
- Wasn't previously guessed
- Exists in online dictionaries
- Isn't a statistically obscure word

---

## Future Enhancements

**Larger word list**

The game currently has 24 words, cycling by the hour (more fun for testing out). It would be nice to build a list of 365 words (verified by API as a common english word with quality trigger words and a clear definition) to cycle through once per day.

**Edge case: words with duplicate letters (HELLO, COLOR, TAPAS)**

The program doesn't accurately handle guesses with duplicate letters. For example, a Wordle of 'CRATE` with a guess of 'ARROW' would give ☐☐☐☒☒, wrongly hinting to the user that the correct answer has two 'R' characters.

**Graphical display**

Real-world Wordle displays user guesses in a grid, coloring the characters in each guess based on their correctness. I'd like to update this with a fully visual display for users.

**Butter-smooth window scaling**

Like every good program, I'd like to use @media-query to allow good scaling for all displays, from smartphones to 4k desktop monitors.

---

By Alex Westerlund