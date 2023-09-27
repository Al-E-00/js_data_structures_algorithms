function fizzBuzzArray(num) {
  const finalArray = [];

  for (let i = 1; i <= num; i++) {
    switch (true) {
      case i % 15 === 0:
        finalArray.push('FizzBuzz');
        break;
      case i % 3 === 0:
        finalArray.push('Fizz');
        break;
      case i % 5 === 0:
        finalArray.push('Buzz');
        break;
      default:
        finalArray.push(i);
    }
  }

  return finalArray;
}

module.exports = fizzBuzzArray;
