// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(4)
//       '   #   ' 1 - 7 -> 1  : 6    1 <= 3    1 >= 4+3
//       '  ###  ' 2- 7 -> 3  : 4    2<= 7-3  2>=4+4
//       ' ##### ' 3- 7 -> 5  : 2  
//       '#######' 4- 7 -> 7  : 0


//

// function pyramid(n) {
//     const nrOfCol = n*2-1; 
//     for(let row = 1; row<= n; row++){
//         let str = '';
//         const filled = row*2 - 1; 
//         const blanks = (nrOfCol - filled)/2;
//         for(let col = 1; col<= nrOfCol; col++){
//             let add = '';
//             if(col <= blanks || col > nrOfCol - blanks ) add = ' '
//             else add = '#' 
//             str = str+ add;
//         }
//         console.log(str);
//     }
// }

function pyramid(n, row=0, str='') {
    const rowLength = n * 2 -1; 
    const midPoint = n - 1;
    if(n === row) return;
    if(str.length === rowLength) {
        console.log(str);
        pyramid(n, row+1);
    } else {
        if(str.length < midPoint - row || str.length > midPoint + row) {
            pyramid(n, row, str + ' ');
        } else {
            pyramid(n, row, str + '#');
        }
    }
}
pyramid(10);
    

    // const nrOfCol = n*2-1; //7
    //     for(let row = 1; row<= n; row++){
    //         let str = '';
    //         const filled = row*2 - 1; //  5
    //         const blanks = (nrOfCol - filled)/2; //1
    //         for(let col = 1; col<= nrOfCol; col++){
    //             let add = '';
    //             if(col <= blanks || col > nrOfCol - blanks ) add = ' '
    //             else add = '#' 
    //             str = str+ add;
    //         }
    //         console.log(str);
    //     }
    // }



pyramid(10);

module.exports = pyramid;
