function sumOfEvenSquares(numbers) {
  if (numbers.length === 0) return 0

  const evenNumber = numbers.filter((num) => num % 2 === 0)
  const sumOfSquares = evenNumber.reduce((tot, num) => tot + num ** 2, 0)
  return sumOfSquares
}

/* const sumOfEvenSquares = (numbers) => {
    const evenSquares = numbers
        .filter(num % 2 === 0)
        .map(num => num ** 2)
        .reduce((num, total) => total + num, 0);

    return evenSquares;
} */

module.exports = sumOfEvenSquares
