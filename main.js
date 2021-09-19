// import { alphabet } from "./data.js"
// import { capAlphabet } from "./data.js"
// import { morseCode } from "./data.js"

// import { translator } from "./translator";
import {transformInputToArray} from "./translator.js"
import {morseOutput, morseOutputReverse} from "./translator.js"

const theInput = document.querySelector("#input")
const theButton = document.querySelector("#button")
const translationValue = document.querySelector(".translationValue")

// theInput.addEventListener("click", () =>{
//     // let theCode = morseOutput(transformInputToArray(theInput.innertext))
//     alert("HIU")
// })

theButton.addEventListener("click", () =>{
    let value = theInput.value
    let theCode = null
    if(value.charAt(0) == '.' || value.charAt(0) == '-'){
        theCode = morseOutputReverse(theInput.value)
    }
    else{
        theCode = morseOutput(theInput.value.toLowerCase())
    }
    // console.log(theInput.value)
    translationValue.innerHTML = theCode
})

