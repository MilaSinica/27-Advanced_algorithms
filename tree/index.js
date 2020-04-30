// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree


class Node {
    constructor(data = null) {
        this.data = data;
        this.children = [];
    }
    add(data, children = []) {
        this.children.push(new Node(data, children));
    }
    remove(node) {
        console.log(node);
        this.children = this.children.filter(n => n.data !== node);
    }
}

const newNode = new Node('a');
newNode.add('b');
newNode.add('c');
newNode.remove('c');

console.log(newNode);

class Tree {
    constructor(root = null) {
        this.root = root;
    }
     
    traverseBF(fun) {
        let arr = [];
        arr.push(this.root);
        while(arr.length) {
            let curr = arr.shift();
            arr.push(...curr.children);
            // for(let i = 0; i<curr.children.length; i++) {
            //     arr.push(curr.children[i]);
            // }
            fun(curr);
        }
    }

    traverseDF(fun) {
        let arr = [];
        arr.push(this.root);

        while(arr.length) {
            let curr = arr.shift();
            arr.unshift(...curr.children);
            fun(curr);
        }
    }
}

module.exports = { Tree, Node };
