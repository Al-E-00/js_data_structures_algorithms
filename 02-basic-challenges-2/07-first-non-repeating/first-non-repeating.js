const findFirstNonRepeatingCharacter = (str) => {
  const strArr = str.split("")

  for (let i = 0; i < str.length; i++) {
    const filteredArr = strArr.filter((string) => string === str[i])

    if (filteredArr.length === 1) {
      return filteredArr[0]
    }
  }

  return null
}

//WITH {}
/* const findFirstNonRepeatingCharacter = (str) => {
  const strChar = {}

  for (const char of str) {
    strChar[char] = (strChar[char] || 0) + 1
  }

  for (const char of str) {
    if (strChar[char] === 1) {
      return char
    }
  }

  return null
} */

//WITH Map
/* const findFirstNonRepeatingCharacter = (str) => {
  let strCharArr = new Map()

  for (const char of str) {
    strCharArr.set(char, (strCharArr.get(char) || 0) + 1)
  }

  for (const char of str) {
    if (strCharArr.get(char) === 1) {
      return char
    }
  }

  return null
} */

module.exports = findFirstNonRepeatingCharacter
