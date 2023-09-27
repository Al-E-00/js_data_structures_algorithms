function arrayIntersection(arr1, arr2) {
  const arr1NoDuplicates = noDuplicateArray(arr1);
  const arr2NoDuplicates = noDuplicateArray(arr2);

  const intersectedArray = [];

  for (let i = 0; i < arr1NoDuplicates.length; i++) {
    if (arr2NoDuplicates.includes(arr1NoDuplicates[i])) {
      intersectedArray.push(arr1NoDuplicates[i]);
    }
  }
  return intersectedArray;
}

function noDuplicateArray(arr) {
  const noDuplicateArray = [];
  for (let i = 0; i < arr.length; i++) {
    const analyzedChar = arr[i];

    if (!arr.slice(i).includes(analyzedChar)) {
      noDuplicateArray.push(analyzedChar);
    } else if (!noDuplicateArray.includes(analyzedChar)) {
      noDuplicateArray.push(analyzedChar);
    }
  }

  return noDuplicateArray;
}


/* function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  const intersectionArr = [];

  for (let num of arr2) {
    if (set1.has(num)) {
      intersectionArr.push(num);
    }
  }

  return intersectionArr;
} */

module.exports = arrayIntersection;
