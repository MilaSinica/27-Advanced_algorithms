// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

//st1 = [<--1, 2, 3, 4 --> ]
//st2 = 

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stackOne = new Stack();
        this.stackTwo = new Stack();

    }
    add(el) {
        this.stackOne.push(el);
    }
    remove() {
        this.moveFromOneToTwo();
        const deleted = this.stackTwo.pop();
        this.moveFromTwoToOne()
        return deleted;
    }
    peek() {
        this.moveFromOneToTwo();
        const peeked = this.stackTwo.peek();
        this.moveFromTwoToOne()
        return peeked;
        //return this.stackOne.data[0];
    }
    moveFromOneToTwo() {
        while(this.stackOne.peek()) {
            this.stackTwo.push(this.stackOne.pop());
        }
    }
    moveFromTwoToOne() {
        while(this.stackOne.peek()) {
            this.stackTwo.push(this.stackOne.pop());
        }
    }
}

    const q = new Queue();
    q.add(1);
    q.add(2);
    q.add(3);
    q.add(5);
    console.log(q);  
    console.log(q.peek()); // returns 1
    const x = q.remove(); // returns 1
    console.log(x);
    console.log(q.remove());// returns 2

module.exports = Queue;
