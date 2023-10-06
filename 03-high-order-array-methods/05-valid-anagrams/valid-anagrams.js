function validAnagrams(str1, str2) {
  const lettersStr1 = str1.split("")
  const lettersStr2 = str2.split("")

  const charCodeArr1 = []
  const charCodeArr2 = []
  lettersStr1.forEach((letter) => charCodeArr1.push(letter.charCodeAt(0)))
  lettersStr2.forEach((letter) => charCodeArr2.push(letter.charCodeAt(0)))

  const sortedCharCodeArr1 = charCodeArr1.sort()
  const sortedCharCodeArr2 = charCodeArr2.sort()

  if (
    sortedCharCodeArr1.every((char, index) => char === sortedCharCodeArr2[index])
  )
    return true

  return false
}

module.exports = validAnagrams
