// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(curr, next = null) {
        this.data = curr;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(node, next) {
        this.head = this.head ? new Node(node, this.head) : new Node(node, next);
    }
    getFirst() {
        return this.head;
    }
    size() {
        let count = 0;
        let currNode = this.head;
        while(currNode) {
            count++;
            currNode = currNode.next;
        }
        return count;
    }
    getLast() {
        let last = this.head;
        if(last){
            while(last.next) {
                last = last.next;
            }
        }
        return last;
    }
    removeLast() {
        const last = this.getLast();
        let currN = this.head;
        if(!currN) return null;
        if(!currN.next) return this.clear();
        //let preLast = null;
        let nextN = currN.next;
        while(nextN.next) {
            currN = nextN;
            nextN = nextN.next;
        }
        currN.next = null;
    }
    clear() {
        this.head = null;
    }
    removeFirst() {
        if(!this.head) return null;
        this.head = this.head.next;
    }
    insertLast(newN) {
        if(this.getLast()) this.getLast().next = new Node(newN);
        else this.head = new Node(newN);
    }
    getAt(indx) {
        let currNode = this.head;
        if(indx > this.size()) return null;
        let counter = 0;
        while(currNode) {
            if(counter === indx) {
                return currNode;
            }
            counter++;
            currNode = currNode.next;
        }
        return null;
    }
    removeAt(indx) {
        // if(indx === 0)  return this.removeFirst();
        // if(!this.head) return null;
        // if(!this.head.next) return this.clear();
        // let currN = this.head;
        // let prevN = null;
        // let counter = 0;
        // while (counter < indx && currN.next) {
        //     prevN = currN;
        //     currN = currN.next;
        //     counter++;
        // }
        // prevN.next = currN.next;
        // return null;

        const toRemove = this.getAt(indx);
        if(toRemove === this.head) {
            return this.head = this.getAt(indx+1);
        }
        if(toRemove === this.getLast()) {
            return this.removeLast();
        }
        if(toRemove) {
            return this.getAt(indx-1).next = this.getAt(indx+1);
        }
    }
    insertAt(data, indx) {
        const prevN = this.getAt(indx-1);
        const currN = prevN ? prevN.next : null;
        const nextN = currN ? currN.next : null;
        if(indx === 0) {
            if(!nextN) return this.insertFirst(data)
            else return this.insertFirst(data, nextN);
        }
        if(!nextN || !currN) {
            return this.insertLast(data);
        }
        prevN.next = new Node(data, currN);
    }
    forEach(fn) {
        let node = this.head;
        while(node) {
            fn(node);
            node = node.next;
        }
        // if(this.size()) {
        //     for(let i = 0; i<= this.size(); i++) {
        //         if(this.getAt(i)) fn(this.getAt(i));
        //     }
        // }
    }

    *[Symbol.iterator] () {
        let node = this.head;
        while(node) {
            yield node;
            node = node.next;
        }
    }
}
const list = new LinkedList();
n0 = new Node("Mila");
n1 = new Node("Lol", n0);
n2 = new Node("Sinica", n1);
list.insertFirst('Hi There', n2); 

console.log(list.size());
list.insertAt("MM", 4);
for (node of list) {
    console.log(node);
}



// console.log(n1);
// console.log(n2);


//console.log(list.head); // null

module.exports = { Node, LinkedList };
