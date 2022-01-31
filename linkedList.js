// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class SinglyLinkedList {
//   constructor(val) {
//     this.head = null;
//     this.tail = null;
//   }
//   insert(val) {
//     let newNode = new Node(val);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     return this;
//   }
//   delete(val) {
//     //[4,45,5]
//     let temp = this.head;
//     // 4
//     let prev = null;
//     if (temp !== null && temp.val === val) {
//       // the list does not equal to null, and 4 is equal to the val being inserted
//       this.head = temp.next;
//       // 4 equal to the next value, which is 45
//       // The pointer is set to the next value. Removing the first value
//       return;
//     }
//     while (temp !== null && temp.val !== val) {
//       // while the list is not null, and while the value is Not equal to the value that's beening
//       // inserted
//       prev = temp;
//       // 1: prev = 4
//       // 2: prev 45;
//       temp = temp.next;
//       // 1: temp = 45
//       // 2: temp = 5
//     }

//     if (temp === null) return;
//     prev.next = temp.next;
//     // prev.next = 3
//   }
//   reverse() {
//     let node = this.head;
//     this.head = this.tail;
//     this.tail = node;
//     let next;
//     let prev = null;
//     for (let i = 0; i < this.length; i++) {
//       next = node.next;
//       node.next = prev;
//       prev = node;
//       node = next;
//     }
//     return this;
//   }
//   pop() {
//     let current = this.head;
//     let prev = current;
//     if (!this.head) {
//       return undefined;
//     }
//     while (current.next) {
//       prev = current;
//       current = current.next;
//     }
//     this.tail = prev;
//     this.tail.next = null;
//   }
//   unshift(val) {
//     let newNode = new Node(val)
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = this.head
//     }
//     newNode.next = this.head;
//     this.head = newNode
//   }
//   position(pos) {
//     if (this.head === null) {
//       return;
//     }
//     let temp = this.head;

//     if (pos === 0) {
//       this.head = temp.next;
//       return;
//     }
//     //[4,45,5]
//     for (let i = 0; temp !== null && i < pos - 1; i++) {
//       temp = temp.next;

//       if (temp === null || temp.next === null) return;

//       let next = temp.next.next;

//       temp.next = next;
//     }
//   }
//   search(value) {
//     if (!this.head) {
//       return undefined;
//     }
//    let  current = this.head;
//     while (current !== null) {
//       if (current.val === value) {
//         return true;
//       }
//        current = current.next
//     }
//     return false
//   }
// }

// let singlyLinkedList = new SinglyLinkedList();
// singlyLinkedList.insert(4);
// singlyLinkedList.insert(45);
// singlyLinkedList.insert(5);
// singlyLinkedList.insert(8);
// singlyLinkedList.search(8);
// //singlyLinkedList.position(0);
// console.log(singlyLinkedList.search(9));

// ******************************************************************
/// SEARCH LINKED LIST
// ******************************************************************
class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

let head;

let push = (new_data) => {
  let newNode = new Node(new_data);
  //Node { data: 5, next: null }
  newNode.next = head;
  head = newNode;
};
push(14);
push(13);
push(12);
push(11);
push(10);
push(9);
push(5);
push(6);
push(7);

// function search(head, x) {
//   console.log(head)
//   // Base case
//   if (head == null) return false;

//   // If key is present in current node,
//   // return true
//   if (head.data == x) return true;

//   // Recur for remaining list
//   return search(head.next, x);
// }

// if (search(head, 5)) console.log("Yes");
// else console.log("No");

// ******************************************************************
/// GET NTH NODE IN A LINKED LIST
// ******************************************************************
// RECURSIVE
function getNth(head, n) {
  console.log(head)
  var count = 0;
  if (head === null)
    // edge case - if head is null
    return -1;
  // if count equal to n return node.data
  if (count === n) return head.data;

  // recursively decrease n and increase
  // head to next pointer
  return getNth(head.next, n - 1);
}
console.log("Element at index 5 is ", getNth(head, 6));

// ITERATIVE
// let getNth = (index) => {
//   let current = head;
//   console.log(current)
//   let count = 0;

//   while (current !== null) {
//     if (count === index) {
//       return current.data;
//     }
//     count++;
//     current = current.next;
//   }
// }

//  console.log("Element at index 3 is " + getNth(3));
