const isPalindrome = (string) => {
  const stringLength = string.length;

  let originalStringNotAlphanumeric = '';
  let reversedStringNotAlphanumeric = '';

  const lowerCaseString = string.toLowerCase();

  for (let i = 0; i < stringLength; i++) {
    const analizedChar = lowerCaseString.charCodeAt(i);

    if (
      (analizedChar >= 48 && analizedChar <= 57) ||
      (analizedChar >= 61 && analizedChar <= 122)
    ) {
      originalStringNotAlphanumeric += lowerCaseString[i];
    }
  }

  for (let i = originalStringNotAlphanumeric.length - 1; i >= 0; i--) {
    reversedStringNotAlphanumeric += originalStringNotAlphanumeric[i];
  }

  if (originalStringNotAlphanumeric === reversedStringNotAlphanumeric) {
    return true;
  }

  return false;
};

/* const isPalindrome = (string) => {
  const formattedString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reversedString = formattedString.split('').reverse().join('');
  return formattedString === reversedString;
}; */

//TUTOR METHOD

/* function isPalindrome(str) {
  const formattedStr = removeNonAlphaNumeric(str.toLowerCase());

  const reverserdStr = reverseStr(formattedStr);

  if (formattedStr === reverserdStr) {
    return true;
  }

  return false;
}

function removeNonAlphaNumeric(str) {
  let formattedStr = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (isAlphaNumeric(char)) {
      formattedStr += char;
    }
  }

  return formattedStr;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || //numbers 0-9
    (code >= 97 && code <= 122) // Lowercase a-z
  );
}

function reverseStr(str) {
  const strLength = str.length;
  let reversedStr = '';

  for (let i = strLength - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
} */

module.exports = isPalindrome;
