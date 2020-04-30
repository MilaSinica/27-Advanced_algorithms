// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//     let shouldCapitalize = true;
//     let newStr = '';
//     for(let char of str) {
//         if(shouldCapitalize && /[A-Za-z]/.exec(char)) {
//             newStr = newStr + char.toUpperCase();
//         } else  {
//             newStr = newStr + char;
//         };
//         shouldCapitalize = char === ' ' ?  true : false;
//     }
//     return newStr;
// }


function capitalize(str) {
    let wordArray = str.split(' ');
    const newArr = wordArray.map(word => {
        return word[0].toUpperCase() + word.slice(1);
    });
    return newArr.join(' ');
}

capitalize("mila will work in Atlassian");



module.exports = capitalize;
