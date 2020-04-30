// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let newStr = "";
    debugger;
    for(let char of str) {
        newStr = char + newStr;
        debugger;
    }
    return newStr;
}

// function reverse(str) {
//     //convert to char array
//     let newArr = str.split('').reverse();
//     return newArr.join('');
// }

// const reverse = str  => str.split('').reduce((reversedStr, char) => char + reversedStr, '');

reverse("Mila");



module.exports = reverse;


