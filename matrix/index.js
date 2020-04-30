// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]



// function matrix(n) {
//     //initialization
//     let newArr = [];
//     let counter = 1;
//     let startCol = 0;
//     let endCol = n-1;
//     let startRow = 0;
//     let endRow = n-1;
//     for(let j = 0; j < n; j++) {
//         newArr.push([]);
//     }

//     while(counter <= n*n) {
//         //topRow
//         for(let i = startCol; i <= endCol; i++) {
//             newArr[startRow][i] = counter;
//             counter++;
//         }
//         startRow++;
//         //rightCol
//         for(let i = startRow; i <= endRow; i++) {
//             newArr[i][endRow] = counter;
//             counter++;
//         }
//         endCol--
//         //bottomRow
//         for(let i = endCol; i >= startCol; i--) {
//             newArr[endRow][i] = counter;
//             counter++;
//         }
//         endRow--;
//         //leftCol
//         for(let i = endRow; i >= startRow; i--) {
//             newArr[i][startCol] = counter;
//             counter++;
//         }
//         startCol++;
        
//     }
//     return newArr;

// }

function matrix(n) {
    //inialization
   const newArr = [];
   for(let i = 0; i < n; i++) {
        newArr.push([]);
   }
   let counter = 1;
   let rowStart = 0;
   let colStart = 0;
   let rowEnd = n-1;
   let colEnd = n-1;
   while(counter <= n*n) {
       //upperRow
       for(let i = colStart; i <= colEnd; i++) {
            newArr[rowStart][i] = counter;
            counter++;
       }
       rowStart++;
       //rightRow
       for(let i = rowStart; i <= rowEnd; i++) {
            newArr[i][colEnd] = counter;
            counter++;
        }
        colEnd--;
        //bottomRow
       for(let i = colEnd; i >= colStart; i--) {
            newArr[rowEnd][i] = counter;
            counter++;
        }
        rowEnd--;
        //lefttRow
       for(let i = rowEnd; i >= rowStart; i--) {
            newArr[i][colStart] = counter;
            counter++;
        }
        colStart++;
    }

    return newArr;
}

matrix(4);

matrix(4);
matrix(3);
matrix(2);

module.exports = matrix;
