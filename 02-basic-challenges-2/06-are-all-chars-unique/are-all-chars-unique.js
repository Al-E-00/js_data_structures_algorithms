const areAllCharactersUnique = (str) => {
  if (str.length === 0) return true

  const arrFromString = str.split("")
  const arrFromSet = Array.from(new Set(arrFromString))

  if (arrFromString.length > arrFromSet.length) {
    return false
  }
  return true
}

/* const areAllCharactersUnique = (str) => {
  const charSet = new Set()

  for (let i = 0; i < str.length; i++) {
    const char = str[i]

    if (charSet.has(char)) {
      return false
    }

    charSet.add(char)
  }

  return true
} */

module.exports = areAllCharactersUnique
