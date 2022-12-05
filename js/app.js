

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
    console.log(currentGuess)

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

    // Reset things
    document.querySelector(`input`).value = ``
    $(`input`).focus()
}

// Variables
let API_URL = "https://api.datamuse.com/words?sp="
let todaysWordle = `apple`
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