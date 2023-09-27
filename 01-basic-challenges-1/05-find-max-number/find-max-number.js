const findMaxNumber = (numberArray) => {
  const numberArrayLength = numberArray.length;
  let maxNumber = numberArray[0];

  for (let i = 0; i < numberArrayLength; i++) {
    if (maxNumber < numberArray[i]) {
      maxNumber = numberArray[i];
    }
  }

  return maxNumber;
};

/* const findMaxNumber = (numberArray) => {
  return Math.max(...numberArray);
}; */

module.exports = findMaxNumber;
