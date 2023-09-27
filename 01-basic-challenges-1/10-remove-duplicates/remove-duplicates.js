function removeDuplicates(array) {
  const finalArray = [];
  for (let i = 0; i < array.length; i++) {
    isAlreadyInArray(array[i], finalArray);
  }
  return finalArray;
}

function isAlreadyInArray(value, finalArray) {
  if (!finalArray.includes(value)) {
    finalArray.push(value);
  }
}


/* function removeDuplicates(arr) {
  return Array.from(new Set(arr));
} */

module.exports = removeDuplicates;
