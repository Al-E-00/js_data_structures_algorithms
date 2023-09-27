const removeDuplicates = require('./remove-duplicates');

const result = removeDuplicates([
  1,
  3,
  4,
  5,
  5,
  1,
  5,
  6,
  7,
  8,
  'hello',
  'hello',
  true,
  true,
]);

console.log(result);
