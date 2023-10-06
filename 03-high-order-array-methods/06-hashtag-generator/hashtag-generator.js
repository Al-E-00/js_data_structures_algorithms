function generateHashtag(str) {
  if (str.trim().length === 0 || str.length > 140) return false

  const wordsInStr = str.split(/\s+/)

  const concatWords = wordsInStr.map(
    (word) => word.charAt(0).toUpperCase() + word.substr(1)
  )

  return `#${concatWords.join("")}`
}

/* const generateHashtag = (str) => {
    if (str.trim().length === 0 || str.length > 140) return false
    const hastagReadyWords = str.split(/\s+/).reduce((acc, word) => {
        return acc + (word.charAt(0).toUpperCase() + word.substr(1))
    }, '#')

    return hastagReadyWords
} */

module.exports = generateHashtag
