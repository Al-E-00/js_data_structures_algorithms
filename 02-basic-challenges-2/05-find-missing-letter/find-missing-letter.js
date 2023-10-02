function findMissingLetter(lettersArr) {
  if (lettersArr.length === 0) return [];

  const startingChar = lettersArr[0].charCodeAt(0);
  let runTimes = 0;
  let expectedChar = startingChar;
  for (let i = 0; i < lettersArr.length; i++) {

    if(runTimes === 0) {
      runTimes += 1
    } else {
      expectedChar += 1;
    }

    if (lettersArr[i].charCodeAt(0) !== expectedChar) {
      return String.fromCharCode(expectedChar);
    }
  }
}


//SECOND SOLUTION
/* const findMissingLetter = (arr) => {
  let startingChar = arr[0].charCodeAt(0)

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i].charCodeAt(0)
    if (current - startingChar > 1) {
      return String.fromCharCode(startingChar + 1)
    }
    startingChar = current
  }

  return ""
} */

module.exports = findMissingLetter
