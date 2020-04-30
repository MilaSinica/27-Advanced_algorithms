// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// | \      |
// 4  5      6
// Answer: [1, 3, 2]

class Node {
    constructor(data) {
      this.data = data;
      this.children = [];
    }
  
    add(data) {
      this.children.push(new Node(data));
    }
  };

  //     0
// /  |  \
// 1  2   3
// 4      5

  function levelWidth(root) {
    let widthArr = [0];
    let nodeArr = [root, "STOP"];
    while(nodeArr.length > 1) {
        let curr = nodeArr.shift();
        if(curr === "STOP") {
            widthArr.push(0);
            nodeArr.push("STOP"); 
        }
        else {
            widthArr[widthArr.length-1] = widthArr[widthArr.length-1] +1 ;
            nodeArr.push(...curr.children); 
        }
    }
    return widthArr;
}

  

// function levelWidth(root) {
//     let widthArr = [1];
//     let nodeArr = [root];
//     let level = 0;
//     let counter = 0;
//     while(nodeArr.length) {
//         counter++; //3
//         let curr = nodeArr.shift(); // 3
//         nodeArr.push(...curr.children); // 4 5
//         if(curr.children.length) {  // 1
//             widthArr[level+1] = widthArr[level+1] ? widthArr[level+1] + curr.children.length : curr.children.length; //[1, 3, 4]
//         }
//         if(counter === widthArr[level]) { //3 = 3
//             counter = 0;  //0
//             level++; // 2
//         }
//     }
//     return widthArr;
// }

const root = new Node(0);
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);


console.log(root);
console.log(levelWidth(root));



module.exports = levelWidth;
