let processGuess = (evt) => {
    let currentGuess = document.querySelector(`input`).value.toLowerCase()
    console.log(`=============`)

    // Create color code
    for (let i = 0; i < 5; i++) {
        if (currentGuess[i] === todaysWordle.charAt(i))
            colorCode += '2'
        else if (todaysWordle.includes(currentGuess[i]))
            colorCode += '1'
        else colorCode += '0'
    }
    colorCodes.push(colorCode)
    colorCode = ''
    console.log(colorCodes)

    // Update HTML
    const listItem = document.createElement(`li`)
    listItem.textContent = currentGuess
    document.querySelector(`ul`).appendChild(listItem)

    // Check guess
    if (currentGuess === todaysWordle) {
        alert(`Woohoo! You won!`)
        window.location.reload()
    }
    guessList.push(currentGuess)
    console.log(guessList)

    // Count guesses
    guessesRemaining -= 1
    if (guessesRemaining === 0) {
        alert(`Alas! Game over!`)
        window.location.reload()
    }
    else console.log(`Guesses remaining: ${guessesRemaining}`)

    // API hints
    let hintElement = document.createElement(`h4`)
    if (guessesRemaining === 3) {
        // Part of speech
        $.ajax(API_URL + `sp=` + todaysWordle + `&md=p`).then(function(data) {
            const partOfSpeech = data[0].tags[0]
            let firstHint = ``
            if (partOfSpeech === `n`) firstHint = `Today's wordle is a noun.`
            else if (partOfSpeech === `v`) firstHint = `Today's wordle is a verb.`
            else if (partOfSpeech === `adj`) firstHint = `Today's wordle is an adjective.`
            else if (partOfSpeech === `adv`) firstHint = `Today's wordle is an adverb.`
            console.log(firstHint)
            hintElement.textContent = `Hint: ${firstHint}`
            document.querySelector(`body`).appendChild(hintElement)
        })
    }
    if (guessesRemaining === 2) {
        // Trigger words
        $.ajax(API_URL + `rel_trg=` + todaysWordle).then(function(data) {
            let secondHint = `${data[0].word}, ${data[1].word}, ${data[2].word}...`
            secondHint = secondHint[0].toUpperCase() + secondHint.substring(1)
            console.log(secondHint)
            hintElement.textContent = `Hint: ${secondHint}`
            document.querySelector(`body`).appendChild(hintElement)
        })
    }
    if (guessesRemaining === 1) {
        // Definition
        $.ajax(API_URL + `sp=` + todaysWordle + `&md=d`).then(function(data) {
            console.log(data)
            let finalHint = `${data[0].defs[0]}`
            finalHint = finalHint[2].toUpperCase() + finalHint.substring(3)
            console.log(finalHint)
            hintElement.textContent = `Hint: ${finalHint}.`
            document.querySelector(`body`).appendChild(hintElement)
        })
    }

    // Reset things
    document.querySelector(`input`).value = ``
    $(`input`).focus()
}

// Variables
let todaysWordle = `apple`
let API_URL = "https://api.datamuse.com/words?"
let guessList = []
let colorCode = ''
let colorCodes = []
let guessesRemaining = 6
const $btn = $(`button`)
const $input = $(`input`)

// Ease of use
$(`input`).focus()
$(document).on(`click`, (e) => $(`input`).focus())
$btn.on(`click`, processGuess)
$(`input`).keyup((e) => {
    const keycode = (e.keyCode ? e.keyCode : e.which);
    if(keycode == '13') processGuess()
})








































// render empty grid
    // on click, process the guess
        // (do while loop)
        // (do) if the guess is 5 letters...
            // break into chars
            // add color codes to chars
            // add chars to render grid as new row
            //  if guess === today's wordle
                // alerts "congrats!"
                // Refresh page
        // (while guess )