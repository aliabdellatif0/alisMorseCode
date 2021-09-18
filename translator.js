import { alphabet } from "./data"
import { capAlphabet } from "./data"
import { morseCode } from "./data"

export const translator = (letter) => {

    let position = alphabet.indexOf(letter)
    let morseTranslation = morseCode[position]
    return morseTranslation
}



export const transformInputToArray = (str) => {
    let stringToIterate = str;
    let arr = [];
    for(let i=0; i< stringToIterate.length; i++){
        arr[i] = stringToIterate.charAt(i);
    
    }
    

    return arr
}


export const morseOutput = (array) => {
    let morse = ""
    for(let i=0; i<array.length; i++){
        morse += translator(array[i])
    }

    return morse

}
