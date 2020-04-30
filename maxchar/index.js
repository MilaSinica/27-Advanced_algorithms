// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charNum = {};
    for(let char of str) {
        charNum[char] =  charNum[char] ? charNum[char]+1 : 1;
    }
    let result = '';
    let max = 0;
    // Object.keys(charNum).forEach(key => {
    //     if(charNum[key] > max) {
    //         max = charNum[key];
    //         result = key;
    //     } 
    // });
    for(let char in charNum) {
        if(charNum[char] > max) {
            max = charNum[char];
            result = char;
        } 
    }
    return result;
}

// function maxChar(str) {
//     const charNum = {};
//     for(let char of str) {
//         charNum[char] =  charNum[char] ? charNum[char]+1 : 1;
//     }
//     let result = [];
//     let max = 0;
//     Object.keys(charNum).forEach(key => {
//         if(charNum[key] > max) {
//             max = charNum[key];
//             result = [];
//             result.push(key);
//         } 
//         if (charNum[key] === max && result[0] !== key) {
//             result.push(key);
//         }
//     });
//     return result;
// }


maxChar("applelovermemellaaa");

module.exports = maxChar;
