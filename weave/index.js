// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');



function weave(sourceOne, sourceTwo) {
    const newQueue = new Queue();
    while(sourceTwo.peek() || sourceOne.peek()) {
        if(sourceOne.peek()) newQueue.add(sourceOne.remove())
        if(sourceTwo.peek()) newQueue.add(sourceTwo.remove());
    }
    return newQueue;
}


// function weave(sourceOne, sourceTwo) {
//     const newQueue = new Queue();
//     let sourceOneValue = true;
//     let sourceTwoValue = true;
//     while(sourceOneValue && sourceTwoValue) {
//         const sourceOneValue=sourceOne.remove();
//         const sourceTwoValue = sourceTwo.remove();
//         if(sourceOneValue) newQueue.add(sourceOneValue)
//         if(sourceTwoValue) newQueue.add(sourceTwoValue);
//     }
//     return newQueue;
// }

//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    queueOne.add(3);
//    queueOne.add(4);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    console.log(q);
//    const peeked = q.peek();
//    console.log(peeked);
//    q.remove() // 1;
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'


module.exports = weave;
