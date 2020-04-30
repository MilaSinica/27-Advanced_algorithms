// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

const L = require('./linkedlist');
const List = L.LinkedList;

function fromLast(list, n) {
    let slow = list.head;
    let fast = list.head;


    if(!slow) return null;
    if(n === 0) return list.getLast();
   
    while(n > 0) {
        fast = fast.next;
        n--;
    }

    while(fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}

const l = new List();

l.insertLast('a');
l.insertLast('b');
l.insertLast('c');
l.insertLast('d');
l.insertLast('e');


console.log(fromLast(l, 2));



module.exports = fromLast;
