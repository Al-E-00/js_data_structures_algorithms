const __VOWELS = ['a', 'e', 'i', 'o', 'u'];

function countVowels(str) {
  const stringLength = str.length;
  const stringLowerCase = str.toLowerCase();

  const letterInStringArray = stringLowerCase.split('');

  let vowelsCount = 0;

  for (let i = 0; i < stringLength; i++) {
    if (__VOWELS.includes(letterInStringArray[i])) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

module.exports = countVowels;
