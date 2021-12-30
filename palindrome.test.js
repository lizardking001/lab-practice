const palindromeCheck = require('./palindromeCheck');

test('to enter abba will be true', () => {
  expect(palindromeCheck('abba')).toBe(true);
});

test('to enter aaba will be false', () => {
  expect(palindromeCheck('aaba')).toBe(false);
});