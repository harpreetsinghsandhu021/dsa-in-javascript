// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class linkedList {
//   constructor(value) {
//     const newNode = new Node(value);

//     this.head = newNode;
//     this.tail = this.head;
//     this.length = 1;
//   }
//   push(value) {
//     const newNode = new Node(value);

//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;

//     return this;
//   }

//   pop() {
//     if (!this.head) return undefined;

//     let temp = this.head;
//     let pre = this.head;
//     while (temp.next) {
//       pre = temp;
//       temp = temp.next;
//     }
//     this.tail = pre;
//     this.tail.next = null;

//     this.length--;
//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return temp;
//   }
//   unshift(value) {
//     const newNode = new Node(value);

//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;

//     return this;
//   }

//   shift() {
//     if (!this.head) return undefined;

//     let temp = this.head;

//     this.head = this.head.next;
//     temp.next = null;

//     this.length--;

//     if (this.length === 0) {
//       this.tail = null;
//     }
//   }
//   get(index) {
//     let temp = this.head;
//     if (index < 0 && index > this.length) return undefined;

//     for (let i = 0; i < index; i++) {
//       temp = temp.next;
//     }

//     return temp;
//   }
//   set(index, value) {
//     let nodeToUpdate = this.get(index);

//     if (nodeToUpdate) {
//       nodeToUpdate.value = value;

//       return true;
//     }
//     return false;
//   }
//   insert(index, value) {
//     if (index === 0) return this.unshift(value);
//     if (index === this.length) return this.push(value);
//     if (index < 0 && index > this.length) return undefined;

//     const newNode = new Node(value);
//     let temp = this.get(index - 1);
//     newNode.next = temp.next;
//     temp.next = newNode;

//     this.length++;

//     return true;
//   }
//   remove(index) {
//     if (index === 0) return this.shift();
//     if (index === this.length) return this.pop();
//     if (index < 0 && index > this.length) return undefined;
//   }
//   reverse() {
//     let temp = this.head;
//     this.head = this.tail;
//     this.tail = temp;

//     let next = temp.next;
//     let prev = null;

//     for (let i = 0; i < this.length; i++) {
//       next = temp.next;
//       temp.next = prev;
//       prev = temp;
//       temp = next;
//     }

//     return this;
//   }
// }

// const myLinkedList = new linkedList(2)

// myLinkedList.push(4)

// console.log(myLinkedList);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor(value) {
    const newNode = new Node(value);

    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.tail;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
  pop() {
    if (this.length === 0) return undefined;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;

    this.length--;

    return this;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  allValues() {
    let arr = [];
    let temp = this.head;
    for (let i = 0; i < this.length; i++) {
      arr.push(temp.value);
      temp = temp.next;
    }

    return arr.join(",").replaceAll(",", " -> ");
    // return arr[1] + arr[]
  }
  shift() {
    if (this.length === 0) return undefined;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      temp.next = null;
    }
    this.length--;
    return this;
  }

  get(index) {
    if (index < 0 || index > this.length) return undefined;

    let temp = this.head;

    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  set(index, value) {
    if (index < 0 || index > this.length) return undefined;

    let nodeToUpdate = this.get(index);

    if (nodeToUpdate) {
      nodeToUpdate.value = value;
      return true;
    }

    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Node(value);

    let before = this.get(index - 1);
    let next = before.next;

    before.next = newNode;
    newNode.next = next;

    this.length++;
    return this;
  }
  insertRec(value, index) {
    return this.insertHelp(value, index, this.head);
  }
  insertHelp(value, index, head) {
    if (head.next === null) return;

    if (index === 1) {
      const newNode = new Node(value);
      newNode.next = head.next;
      head.next = newNode;
      this.length++;
      return;
    }

    return this.insertHelp(value, index - 1, head.next);
  }
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();

    let before = this.get(index - 1);
    let temp = before.next;

    before.next = temp.next;
    temp.next = null;
    this.length--;
    return this;
  }
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let pre = null;
    let next = temp.next;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = pre;
      pre = temp;
      temp = next;
    }
    return this;
  }
  removeDuplicates() {
    let node = this.head;

    while (node.next !== null) {
      if (node.value === node.next.value) {
        node.next = node.next.next;
        this.length--;
      } else {
        node = node.next;
      }
    }

    this.tail = node;
  }
  checkCycle() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;

      if (fast.value === slow.value) {
        return true;
      }
    }
    return false;
  }
  findLength() {
    let curr = this.head;
    let length = 0;

    while (curr !== null) {
      curr = curr.next;
      length++;
    }

    return length;
  }
  removeNthFromEnd = function (n) {
    let end = this.length - n;
    let prev = this.head;
    let curr = this.head;

    for (let i = 0; i < end; i++) {
      prev = curr;
      curr = curr.next;
    }

    prev.next = curr.next;

    return true;
  };
  swapPairs() {
    let prev = null;
    let curr = this.head;

    let length = this.findLength();
    let k = 2;

    let count = Math.floor(length / k);

    while (count > 0) {
      let last = prev;
      let newEnd = curr;
      let next = curr.next;

      for (let i = 0; i < k; i++) {
        curr.next = prev;
        prev = curr;
        curr = next;

        if (next !== null) {
          next = curr.next;
        }
      }

      if (last !== null) {
        last.next = prev;
      } else {
        this.head = prev;
      }
      newEnd.next = curr;
      prev = newEnd;
      count--;
    }

    return true;
  }
  reverseKGroup(k) {
    let curr = this.head;
    let prev = null;

    let length = this.findLength();

    let count = Math.floor(length / k);

    while (count > 0) {
      let last = prev;
      let newEnd = curr;
      let next = curr.next;

      for (let i = 0; i < k; i++) {
        curr.next = prev;
        prev = curr;
        curr = next;

        if (next !== null) {
          next = curr.next;
        }
      }

      if (last !== null) {
        last.next = prev;
      } else {
        this.head = prev;
      }

      newEnd.next = curr;
      prev = newEnd;
      count--;
    }
    return true;
  }

  rotateList(head, k) {
    if (k <= 0 || head === null || head.next === null) {
      return head;
    }

    let last = head;
    let length = 1;
    while (last.next !== null) {
      last = last.next;
      length++;
    }

    last.next = head;

    let rotations = k % length;
    let skip = length - rotations;

    let newEnd = head;

    for (let i = 0; i < skip - 1; i++) {
      newEnd = newEnd.next;
    }
    console.log(newEnd.next.value);

    head = newEnd.next;
    newEnd.next = null;

    return true;
  }

  deleteDuplicates = function (head) {
    let curr = head;
    let prev = null;

    while (curr !== null && curr.next !== null) {
      let next = curr.next;

      if (curr.value === next.value) {
        while (next !== null && curr.value === next.value) {
          next = next.next;
        }

        console.log(prev.value);

        if (prev !== null) {
          prev.next = next;
        } else {
          head = next;
        }
      } else {
        prev = curr;
      }
      curr = next;
    }
    return true;
  };

  reverseList2(head, left, right) {
    let curr = head;
    let prev = null;

    for (let i = 0; i < left - 1; i++) {
      prev = curr;
      curr = curr.next;
    }

    let last = prev;
    let newStart = curr;
    let next = newStart.next;

    for (let i = 0; i < right - left; i++) {
      newStart.next = last;
      last = newStart;
      newStart = next;

      if (next !== null) {
        next = newStart.next;
      }
    }

    if (last === null) {
      head = newStart;
    } else {
      last.next = newStart;
    }

    if (prev !== null) {
      prev.next = last;
    }

    return true;
  }
  partitionList(x) {
    let head = this.head;
    let lesserHead = new Node(0);
    let greaterHead = new Node(0);

    let less = lesserHead;
    let greater = greaterHead;

    while (head !== null) {
      if (head.value < x) {
        less.next = head;
        less = less.next;
      } else {
        greater.next = head;
        greater = greater.next;
      }

      head = head.next;
    }

    greater.next = null;
    less.next = greaterHead.next;

    return true;
  }
}

const myLinkedList = new linkedList(1);
const secondLinkedList = new linkedList(5);

myLinkedList.push(4);
myLinkedList.push(3);
myLinkedList.push(2);
myLinkedList.push(5);
myLinkedList.push(2);

secondLinkedList.push(6);
secondLinkedList.push(4);

console.log(myLinkedList.allValues());
console.log(myLinkedList.partitionList(3));
console.log(myLinkedList.allValues());

// console.log(myLinkedList.removeNthFromEnd(2));
