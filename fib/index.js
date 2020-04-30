// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// function fib(n) {
//     let fib = [0, 1];
//     for (let i = 1; i<n; i++) {
//         fib.push(fib[i] + fib[i-1]);
//     }
//    return fib[n];
// }



// function fib(n, fibNum=[0, 1]) {
//     if(fibNum.length === n+1) {
//         const x= fibNum[n];
//         return x;
//     }
//     fibNum.push(fibNum[fibNum.length-1]+fibNum[fibNum.length-2]);
//     return fib(n, fibNum);
// }



function fib(n) {
    if(n < 2) {
        return n;
    }
    return fib(n-1) + fib(n-2);
}
fib(10);


// function memoize(fn) {
//     const cache = {};
//     return function(...args) {
//         if(cache[args]) {
//             return cache[args];
//         } 
//         const result = fn.apply(this.args);
//         cashe[args] = result;
//         return result;
//     }
// }

// const fib = memoize(fib);



module.exports = fib;
