# Review

## Goals

1. Working morse code translator - done
   - english to morse - done
   - morse to english - close
2. Practice using TDD - not done
   - Got some practice writing tests first but 3 pass 4 fail at the moment
   - You will need to get all your tests passing
3. Application of what you're learning (pure functions etc.) - Clean functions, and the app works - done
   ​

## Specification

​

- Translator functions and Unit tests to be written in separate files. Functions to be brought into the main.js and unit test files - done
  - Has written tests and pure functions in separate files that have been brought into the main which is great.
- Readme - kinda done
  - Technically has a README although there it needs a bit of polishing.
- 10 commits during development
  - \>10 commits done. Judging by commit comments, they are of value.
- Mobile first/Responsive - done
  - Responsive and looks nice! Handles a large sentence translation
- No tutorials - done
  - This work looks original
    ​

## Overall

​
In terms of JS you have separated your files which is great. I like how you have began to strip your translator into different functions that are pure and you have started to test :).
​
You have started the extension which is great I just think you need to work on a couple of things with it
​

## To work on

### TDD​

Follow the TDD cycle more closely you want to get all of your tests passing before you move on.

Your translator functions, pointers to get it to pass.

```js
export const translator = letter => {
  // alphabet is a lowercase array
  // the letter might be A or a how can i make sure it is a?
  let position = alphabet.indexOf(letter);
  // If index of can't find something it returns -1
  // What if the position is -1?
  let morseTranslation = morseCode[position];
  return morseTranslation;
};
```

### House keeping

- Tidy up code base
  - scss files in a scss folder
  - js files in js folder
  - delete commented out code
- Style it
- Jazz up your readme
- Complete the extension
