class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  printQueue() {
    let temp = this.first;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getFirst() {
    if (this.first === null) {
      console.log("First: null");
    } else {
      console.log("First: " + this.first.value);
    }
  }

  getLast() {
    if (this.last === null) {
      console.log("Last: null");
    } else {
      console.log("Last: " + this.last.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (this.length === 0) return undefined;
    let temp = this.first;

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }

    this.length--;
    return temp;
  }
}

const myQueue = new Queue(13);
myQueue.enqueue(88);
myQueue.enqueue(45);
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.getFirst();

class Node2 {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  enqueue(value, priority) {
    const newNode = new Node2(value, priority);
    let contain = false;

    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].priority > newNode.priority) {
        this.items.splice(i, 0, newNode);
        contain = true;
        break;
      }
    }

    if (!contain) {
      this.items.push(newNode);
    }
  }
  dequeue() {
    if (this.items.length === 0) return undefined;

    return this.shift();
  }
}

// const newQueue = new PriorityQueue();

// newQueue.enqueue(3, 2);
// newQueue.enqueue(5, 1);
// newQueue.enqueue(2, 1);
// newQueue.enqueue(8, 2);
// newQueue.enqueue(1, 3);

// console.log(newQueue);
