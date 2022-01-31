// class Bst {
//   constructor(value) {
//     this.value = value;
//     this.right = null;
//     this.left = null;
//   }
// }

// class BinarySearchTree {
//   constructor(value) {
//     this.root = null;
//   }

//   insert(value) {
//     let newBst = new Bst(value);
//     if (!this.root) {
//       this.root = newBst;
//       //console.log(this.root)
//       return this;
//     } else {
//       let currentBst = this.root;
//       while (true) {
//         if (value < currentBst.value) {
//           if (currentBst.left === null) {
//             currentBst.left = newBst;
//             //console.log(this.root);
//             return this;
//           } else {
//             currentBst = currentBst.left;
//           }
//         } else if (value > currentBst.value) {
//           if (currentBst.right === null) {
//             currentBst.right = newBst;
//             //console.log(this.root);
//             return this;
//           } else {
//             currentBst = currentBst.right;
//           }
//         }
//       }
//     }
//   }
//   BreadthFirstSearch() {
//     let node = this.root; //10
//     let data = []; // /   \
//     let queue = []; //  5    1500
//     data.push(node); //   / \    /   \
//     while (queue.length) {
//       //   1    7   13  null
//       node = data.unshift(); //   / \  / \  / \
//       data.push(node); //     null 2 null 11  16
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right); //[10, 5, 1500, 1,7,13,2,11,16]
//     }
//     return data;
//   } // Post_order ==> [2, 1, 7, 5, 11, 16, 13, 1500, 10];

//   // PreOrder ==> [10, 5, 1, 2, 7, 1500, 13, 11, 16];
//   DFS_PreOrder() {
//     //Root->Left->Right
//     let data = [];
//     let current = this.root;
//     let helperFunc = (node) => {
//       console.log(node.value);
//       data.push(node.value);
//       if (node.left) helperFunc(node.left);
//       if (node.right) helperFunc(node.right);
//     };
//     helperFunc(current);
//     return data;
//   }
//   DFS_PostOrder() {
//     // Left->Right->Root
//     let data = [];
//     let current = this.root;
//     let helperFunc = (node) => {
//       if (node.left) helperFunc(node.left);
//       if (node.right) helperFunc(node.right);
//       console.log(node.value);
//       data.push(node.value);
//     };
//     helperFunc(current);
//     return data;
//   }
//   DFS_InOrder() {
//     let data = [];
//     let current = this.root;
//     let helperFunc = (node) => {
//       if (node.left) helperFunc(node.left);
//       data.push(node.value);
//       if (node.right) helperFunc(node.right);
//     };
//     helperFunc(current);
//     return data;
//   }
//   NodeDepths() {
//     let sumOfrDepths = 0;
//     const stack = [{ node: this.root, depth: 0 }];
//     console.log(stack)
//     while (stack.length > 0) {
//       const { node, depth } = stack.pop();
//       console.log("this is stack",stack);
//       if (node === null) continue;
//       sumOfrDepths += depth;
//       console.log("this is depth", sumOfrDepths)
//       stack.push({ node: node.left, depth: depth + 1 });
//       console.log("this is stack-1", stack);
//       stack.push({ node: node.right, depth: depth + 1 });
//       console.log("this is stack-2", stack);
//     }
//     return sumOfrDepths;
//   }

//   delete(value) {
//     if (this.root === null) {
//       return;
//     }
//   }
// }

// let binarySearchTree = new BinarySearchTree();

// //binarySearchTree.insert(10); // Post_order ==> [2, 1, 7, 5, 11, 16, 13, 1500, 10];

// // PreOrder ==> [10, 5, 1, 2, 7, 1500, 13, 11, 16];
// binarySearchTree.insert(5);
// binarySearchTree.insert(1500);
//  binarySearchTree.insert(1);
// // binarySearchTree.insert(13);
// // binarySearchTree.insert(11);
// // binarySearchTree.insert(2);
// // binarySearchTree.insert(16);
// // binarySearchTree.insert(7);
// console.log(binarySearchTree.NodeDepths());

// // class Node {
// //   constructor(data) {
// //     this.left = null;
// //     this.right = null;
// //     this.data = data;
// //   }
// // }

// // //let head;

// // /* Given a binary search tree and a number,
// //      inserts a new node with the given number in
// //      the correct place in the tree. Returns the new
// //      root pointer which the caller should then use
// //      (the standard trick to avoid using reference
// //      parameters). */
// // function insert(node, data) {
// //   /* 1. If the tree is empty, return a new,
// //          single node */
// //   if (node == null) {
// //     return new Node(data);
// //   } else {
// //     /* 2. Otherwise, recur down the tree */
// //     if (data <= node.data) {
// //       node.left = insert(node.left, data);
// //     } else {
// //       node.right = insert(node.right, data);
// //     }

// //     /* return the (unchanged) node pointer */
// //     return node;
// //   }
// // }

// // /* Given a non-empty binary search tree,
// //      return the minimum data value found in that
// //      tree. Note that the entire tree does not need
// //      to be searched. */

// //      //Find the node with minimum value in a Binary Search Tree

// // function minvalue(node) {
// //   let current = node;

// //   /* loop down to find the leftmost leaf */
// //   while (current.left != null) {
// //     current = current.left;
// //   }
// //   return current.data;
// // }

// // let root = null;
// // root = insert(root, 4);
// // insert(root, 2);
// // insert(root, 1);
// // insert(root, 3);
// // insert(root, 6);
// // insert(root, 5);

// // console.log("Minimum value in BST is " + minvalue(root));


function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length-1)
}

function binarySearchHelper(array, target, left, right) {
  if (left > right) return -1;
  console.log("this is left", left);"\n";
  console.log("this is right", right)
  const middle = Math.floor((left + right) / 2);
  console.log("this is middle", middle);
  const pontentialMatch = array[middle];
  console.log("this is potentialMatch",pontentialMatch)
  if (target === pontentialMatch) {
    return middle;
  } else if (target < pontentialMatch) {
    console.log(target)
    console.log(right)
    return binarySearchHelper(array, target, left, middle - 1);
  } else {
    return binarySearchHelper(array, target, middle + 1, right);
  }
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33))
