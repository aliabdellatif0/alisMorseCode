# Review
​
## Goals
​
1. Working morse code translator - done
2. Practice using TDD - Got some practice but they all fail ❌
3. Application of what you're learning (pure functions etc.) - Clean functions, and the app works ✔
​
## Specification
​
- Translator functions and Unit tests to be written in separate files. Functions to be brought into the main.js and unit test files
  - Has written tests which I'm sure worked initially. Unfortunately didn't follow the TDD cycle, as the test have become broken over time and now none of them pass.
- Readme
  - Technically has a README although there is no information here about the application.
- 10 commits during development
  - \>10 commits done. Judging by commit comments, they are of value.
- Mobile first/Responsive
  - Responsive and looks nice! Will break if you try to translate too much though.
- No tutorials
  - This work looks original
​
## Overall
​
A very nice morse code translator which works well, provides some feedback if the character you type isn't able to be translate and the styling isn't too bad either.
​
Overall, very impressive, only let down by the tests not working.
​
## To work on
​
Follow the TDD cycle more closely. It looks to me like you changed both the inputs and output of your translate function which would probably require a rewrite of your tests. On the other side you can make this work without changing your tests by passing the `value` of the `<input>` directly into the translate function.
​
FROM:
​
```js
translateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  textOutput.innerHTML = translateToMorse(textInput);
});
```
​
TO:
​
```js
translateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  textOutput.innerHTML = translateToMorse(textInput.value);
});
```
​
You can also add the wrapping `<p></p>` tags after you have called the function, or create a another wrapping function in order to achieve this functionality as *technically* adding `<p></p>` tags aren't included in having to translate english to morse so it shouldn't live in this function.
​
Consider adding these in after you've called the function.