

// let isRealWord1 = (wordToTest) => {
//     console.log(`Sending to API...`)
//     $.ajax(API_URL + wordToTest).then(function(data) {
//         console.log(data)
//         let verified = true
//         verified = isRealWord2(wordToTest, data[0].word)
//         return verified
//     })
// // }

// let isRealWord2 = (word1, word2) => {
//     console.log(`Testing ${word1} and ${word2}`)
//     if (word1 === word2) return true
//     else return false
// }

// let renderGrid = (guessList) => {
//     for (guesses in guessList) {

//     }
// }


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
    maxGuesses -= 1
    if (maxGuesses === 0) {
        alert(`Alas! Game over!`)
        window.location.reload()
    }
    else console.log(`Guesses remaining: ${maxGuesses}`)

    // API hints
    let hintElement = document.createElement(`h4`)
    if (maxGuesses === 3) {
        // Part of speech
        $.ajax(API_URL + `&md=p`).then(function(data) {
            const partOfSpeech = data[0].tags[0]
            let guess3Hint = ``
            if (partOfSpeech === `n`) guess3Hint = `Today's wordle is a noun.`
            else if (partOfSpeech === `v`) guess3Hint = `Today's wordle is a verb.`
            else if (partOfSpeech === `adj`) guess3Hint = `Today's wordle is an adjective.`
            else if (partOfSpeech === `adv`) guess3Hint = `Today's wordle is an adverb.`
            console.log(guess3Hint)
            hintElement.textContent = `Hint: ${guess3Hint}`
            document.querySelector(`body`).appendChild(hintElement)
        })
    }
    if (maxGuesses === 4) {
        // Trigger words, lower rank
        // append below guess box
    }
    if (maxGuesses === 5) {
        // Trigger words, top
        // append below guess box
    }

    // Reset things
    document.querySelector(`input`).value = ``
    $(`input`).focus()
}

// Variables
let todaysWordle = `apple`
let API_URL = "https://api.datamuse.com/words?sp=" + todaysWordle
let guessList = []
let colorCode = ''
let colorCodes = []
let maxGuesses = 6
const $btn = $(`button`)
const $input = $(`input`)

// Ease of use
$(`input`).focus()
$(document).on(`click`, (e) => $(`input`).focus())
$btn.on(`click`, processGuess)
$(`input`).keyup((e) => {
    const keycode = (event.keyCode ? event.keyCode : event.which);
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