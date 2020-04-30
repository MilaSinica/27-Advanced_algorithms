// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     let chunk = [];
//     for (let el of array) {
//         const lastChunked = chunk[chunk.length -1];
//         if(!lastChunked || lastChunked.length === size) {
//             chunk.push([el]);
//         } else {
//             lastChunked.push(el);
//         }
//     }
//     return chunk;
// }

function chunk(array, size) {
    let chunk = [];
    for(let i = 0; i < array.length; i = i+size) {
        chunk.push(array.slice(i, i + size));
    }
    return chunk;
}
chunk([1, 2, 3, 1, 2, 8], 3);

// function chunk(array, size) {
//     let start = 0;
//     let chunk = [];
//     const rest = array.length % size;
//     const chunkCount = rest ? Math.floor(array.length / size) + 1 : Math.floor(array.length / size);
//     for(let i = 0; i < chunkCount; i++) {
//         chunk.push(array.slice(start, start + size));
//         start = start + size;
//     }
//     return chunk;
// }

// function chunk(array, size) {
//     let chunk = [];
//     let newArr = [];
//     let newSize = size;
//     for(let i = 0; i < newSize; i++) {
//         if(array[i])newArr.push(array[i]);
//         if(i === newSize - 1) {
//             if (newArr.length) chunk.push(newArr);
//             newArr = [];
//             if(newSize <= array.length) newSize = newSize + size;
//         }
//     }
//     return chunk;
// }


module.exports = chunk;
