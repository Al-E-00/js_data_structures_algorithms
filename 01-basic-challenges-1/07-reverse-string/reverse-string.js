/* function reverseString(string) {
  const letterInString = string.split('');
  const stringLength = letterInString.length;

  const reversedStringLetterArray = [];

  for (let i = stringLength; i >= 0; i--) {
    reversedStringLetterArray.push(letterInString[i]);
  }

  const reversedString = reversedStringLetterArray.join('');
  return reversedString;
} */

function reverseString(string) {
  let reversed = '';

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return reversed;
}

//const reverseString = (string) => string.split('').reverse().join('');

module.exports = reverseString;
