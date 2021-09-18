import { alphabet } from "./data"
import { capAlphabet } from "./data"
import { morseCode } from "./data"

export const translator = (letter) => {

    let position = alphabet.indexOf(letter)
    let morsePosition = morseCode[position]
    return morsePosition
}



export const transformInputToArray = (str) => {
    let stringToIterate = str;
    let arr = [];
    for(let i=0; i< stringToIterate.length; i++){
        arr[i] = stringToIterate.charAt(i);
    
    }
    

    return arr
}



console.log(transformInputToArray("hello"))