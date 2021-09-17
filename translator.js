import { alphabet } from "./data"
import { capAlphabet } from "./data"
import { morseCode } from "./data"

export const translator = (letter) => {

    let position = alphabet.indexOf(letter)
    let morsePosition = morseCode[position]
    return morsePosition
}

