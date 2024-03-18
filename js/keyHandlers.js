import calculate from "./calculate.js"

const input = document.getElementById("input")
const resultInput = document.getElementById("result")

export function handleButtonPress(ev) {
    const btnValue = ev.currentTarget.dataset.value
    input.value += btnValue
    input.focus()
}

export function handleClearButton () {
    input.value = ''
    input.focus()
    resultInput.value = ''
    resultInput.classList.remove('error')
}

export function handleTyping (ev) {
    ev.preventDefault()

    const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

    if (allowedKeys.includes(ev.key)) {
        input.value += ev.key
        return
    }
    if (ev.key === "Backspace") {
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === "Enter") {
        calculate()
    }
}