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

    return arr.join(",").replaceAll(",", "");
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
}
var addTwoNumbers = function (l1, l2) {
  const myArr = [];
  for (let i = 0; i < l1.length; i++) {
    for (let j = 0; j < l2.length; j++) {
      let sum = l1[i] + l2[j];
    }
  }
};

const myLinkedList = new linkedList(2);
const secondLinkedList = new linkedList();

myLinkedList.push(4);
myLinkedList.push(3);
myLinkedList.reverse();
console.log(myLinkedList.allValues());
// console.log(myLinkedList);
