class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
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
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }
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
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }
  shift() {
    if (this.length === 0) return undefined;

    let temp = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }
    this.length--;

    return this;
  }
  get(index) {
    if (index < 0 || index > this.length) return undefined;

    let temp = this.head;

    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        temp = temp.next;
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        temp = temp.prev;
      }
    }
    return temp;
  }

  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp.next;

    while (temp) {
      next = temp.next;
      temp.next = temp.prev;
      temp.prev = next;

      temp = next;
    }

    return this;
  }
  swapFirstLast() {
    let temp = this.head;
    let tempNext = temp.next;
    let lastPrev = this.tail.prev;

    this.head = this.tail;
    this.head.next = tempNext;

    this.tail = temp;
    this.tail.prev = lastPrev;
    lastPrev.next = this.tail;

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
  }
}

const myDouble = new doublyLinkedList(1);
myDouble.push(2);
myDouble.push(3);
myDouble.push(4);
myDouble.push(5);

console.log(myDouble.swapFirstLast());
console.log(myDouble.allValues());
