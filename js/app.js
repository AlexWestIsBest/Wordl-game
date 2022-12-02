// const btn = document.querySelector(`button`)

// btn.addEventListener(`click`, handleButtonClick)

const $btn = $(`button`)
$btn.on(`click`, processGuess)

// const $guess = $(`input`)
// if ($guess.on('keyup', function(evt) {
//     if (evt.which === 13) processGuess
// }))

function processGuess(evt) {
    const listItem = document.createElement(`li`)
    const inp = document.querySelector(`input`)
    listItem.textContent = inp.value
    document.querySelector(`ul`).appendChild(listItem)
    inp.value = ``
}


