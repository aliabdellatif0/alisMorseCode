// import { alphabet } from "./data.js"
// import { capAlphabet } from "./data.js"
// import { morseCode } from "./data.js"

// import { translator } from "./translator";
import {transformInputToArray} from "./translator.js"
import {morseOutput} from "./translator.js"

const theInput = document.querySelector("#input")
const theButton = document.querySelector("#button")

// theInput.addEventListener("click", () =>{
//     // let theCode = morseOutput(transformInputToArray(theInput.innertext))
//     alert("HIU")
// })

theButton.addEventListener("click", () =>{
    // console.log(theInput.value)
    let theCode = morseOutput(transformInputToArray(theInput.value.toLowerCase()))
    alert(theCode)
})

