// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const str = n.toString();
    const reversed = str.split('').reduce((rev, char) => char + rev, '');
    // return n < 0 ? parseInt(reversed) * -1 : parseInt(reversed);
    return Math.sign(n) * parseInt(reversed);
}

reverseInt(-51);

module.exports = reverseInt;
