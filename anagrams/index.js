// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function strToMap(str) {
    const arr = str.toLowerCase().split('');
    const map = {};
    arr.forEach(el => {
        if(/[a-zA-Z]/.exec(el))map[el] =  map[el] ?  map[el] + 1 : 1;
    }); 
    return map;
}

function anagrams(stringA, stringB) {
    stringAMap = strToMap(stringA);
    stringBMap = strToMap(stringB);
    aKeys = Object.keys(stringAMap);
    bKeys = Object.keys(stringBMap);
    if(aKeys.length !== bKeys.length) {
        return false;
    }
    for(let key in stringAMap) {
        if(stringAMap[key] !== stringBMap[key]) {
            return false;
        }
    }
    return true;
}   


// function sortAndFilterChar(str) {
//     const arr = str.replace(/[^\w]/g, '')
//             .toLowerCase()
//             .split('')
//             .sort();
//     return arr.join('');
// }

// function anagrams(stringA, stringB) {
//     sortedStrA = sortAndFilterChar(stringA);
//     sortedStrB = sortAndFilterChar(stringB);
//     return sortedStrA === sortedStrB;
// }   

anagrams( "A tree, a life, a bench", "A tree, a fence, a yard");



module.exports = anagrams;
