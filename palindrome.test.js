const palindromeCheck = require('./palindromeCheck');

test.each([
  ['abba', true],
  ['aaba', false]
])('to enter abba will be true and aaba will be false', (str, expected) => {
  expect(palindromeCheck(str, expected)).toBe(expected);
});



// test.each([
//   [false, Error],
//   [1, Error],
//   [undefined, Error]
// ])('check other types', (str, Error) => {
//   expect(palindromeCheck(str, Error)).toBe(Error);
// });





