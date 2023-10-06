function highestScoringWord(str) {
  const wordsInStr = str.split(" ")
  const wordScoreArray = []

  wordsInStr.forEach((word) => {
    const singleLetterArray = word.split("")

    const wordTotalScore = singleLetterArray.reduce(
      (total, letter) => total + letter.charCodeAt(0),
      0
    )

    wordScoreArray.push(wordTotalScore)
  })

  const highestWordScore = wordScoreArray.sort()[wordScoreArray.length - 1];
  const indexOfTheWinnerWord = wordScoreArray.findIndex(num => num === highestWordScore);

  return wordsInStr[indexOfTheWinnerWord];
}

module.exports = highestScoringWord
