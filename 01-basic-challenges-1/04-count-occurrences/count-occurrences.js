function countOccurrences(str, char) {
  let countOccurrences = 0;
  const stringSplittedArray = str
    .split('')
    .map((character) => character.toLowerCase());

  const stringLength = stringSplittedArray.length;

  for (let i = 0; i < stringLength; i++) {
    if (stringSplittedArray[i] === char) {
      countOccurrences++;
    }
  }

  return countOccurrences;
}

module.exports = countOccurrences;
