// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const reveresd = str.split('').reduce((reversed, char) => char + reversed, '');
    return reveresd === str;
}

// function palindrome(str) {
//     const arr = str.split('');
//     return arr.every((char, i) => char === arr[arr.length-i-1]);
// }

palindrome(". dd .");



module.exports = palindrome;
