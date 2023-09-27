const titleCase = (string) => {
  const wordsInString = string.split(' ');
  const upperCasedArrayOfString = [];

  for (let i = 0; i < wordsInString.length; i++) {
    upperCasedArrayOfString.push(
      wordsInString[i].slice(0, 1).toUpperCase() +
        wordsInString[i].slice(1).toLowerCase()
    );
  }

  const finalStringUpperCased = upperCasedArrayOfString.join(' ');
  return finalStringUpperCased;
};


module.exports = titleCase;
