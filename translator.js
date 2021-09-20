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


export const morseOutputReverse = (value) => {
    let morse = ""
    let temp = value
    while(temp.length > 0){
        let foundMatch = false;
        for(let i=0; i<morseCode.length; i++){
            let morseCodeValue = morseCode[i]
            let morseCodeValueLength = morseCodeValue.length
            if(temp.length < morseCodeValueLength){
                //skip
            }
            else{
                if(temp.substring(0, morseCodeValueLength) == morseCodeValue){
                    morse += alphabet[i]
                    temp = temp.substring(morseCodeValueLength + 1)
                    alert(morse)
                    foundMatch = true;
                }
            }
            if(foundMatch){
                alert(i)
                break;
            }
        }
    }
    // for(let i=0; i<array.length; i++){
    //     morse += translatorReverse(array[i])
    // }

    return morse

}

export const transformInputToArray = (str) => {
    let stringToIterate = str;
    let arr = [];
    for(let i=0; i< stringToIterate.length; i++){
        arr[i] = stringToIterate.charAt(i);
    
    }
    

    return arr
}


export const morseOutput = (value) => {
    let morse = ""
    let array = transformInputToArray(value)
    for(let i=0; i<array.length; i++){
        morse += `${translator(array[i])} `
    }

    return morse

}
