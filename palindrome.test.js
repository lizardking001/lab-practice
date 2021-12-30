const palindromeCheck = require('./palindromeCheck');

test('to enter abba will be true and aaba will be false', () => {
  expect(palindromeCheck('abba')).toBe(true);
  expect(palindromeCheck('aaba')).toBe(false);
});




