/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/


function isPalindrome(str) {
  const cleanString = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const n = cleanString.length;
  if (n === 0) return true;

  for (let i = 0; i < Math.floor(n / 2); i++) {
      if (cleanString[i] !== cleanString[n - 1 - i]) {
          return false;
      }
  }
  return true;
}

module.exports = isPalindrome;
