// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data = null) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    insert(data, node = this) {
        if(node.data > data){ 
            if(!node.left) {
                return node.left = new Node(data);
            } 
            this.insert(data, node.left);
        }
        if(node.data < data) {
            if(!node.right) { 
                return node.right = new Node(data);
            }
           this.insert(data, node.right);
        }
        return null;
    }

    contains(data, node = this) {
        if(node.data === data) return node;
        if(node.data > data && node.left) return this.contains(data, node.left);
        if(node.data < data && node.right) return this.contains(data, node.right);
        return null;

        // let node = this;
        // let result = null;
        // while(node) {
        //     if(node.data === data) return result = node;
        //     if(node.data > data)  node = node.left;
        //     if(node.data < data) node = node.right;
        // }
        // return result;

        // let nodeArr = [this];
        // let result = null;
        // while(nodeArr.length) {
        //     const curr = nodeArr.shift();
        //     if(curr.data === data) return result = curr;
        //     if(curr.left)   nodeArr.push(curr.left);
        //     if(curr.right) nodeArr.push(curr.right);
        // }
        // return result;
    }
}

const node = new Node(10);
node.insert(5);
node.insert(15);
node.insert(17);
node.insert(12);
console.log(node.contains(17));


module.exports = Node;


