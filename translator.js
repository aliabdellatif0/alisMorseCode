import { alphabet } from "./data.js"
import { capAlphabet } from "./data.js"
import { morseCode } from "./data.js"

export const translator = (letter) => {

    let position = alphabet.indexOf(letter)
    let morseTranslation = morseCode[position]
    return morseTranslation
}

// export const translatorReverse = (letter) => {
//     let position = morseCode.indexOf(letter)
//     let morseTranslation = alphabet[position]
//     return morseTranslation
// }


// export const morseOutputReverse = (array) => {
//     let morse = ""
//     for(let i=0; i<array.length; i++){
//         morse += translatorReverse(array[i])
//     }

//     return morse

// }

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
        morse += `${translator(array[i])} `
    }

    return morse

}
