class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    const newNode = new Node(value);
    this.root = newNode;
  }
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;

    while (true) {
      if (temp.value === newNode.value) return undefined;

      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
        }
        temp = temp.left;
      } else {
        if (temp.right === null) {
          temp.right = newNode;
        }
        temp = temp.right;
      }
    }
  }
  contains(value) {
    if (this.root === null) return undefined;

    let temp = this.root;

    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }

    return false;
  }
  getMinValueNode(currNode) {
    while (currNode.left !== null) {
      currNode = currNode.left;
    }
    return currNode;
  }
  getMaxValueNode(currNode) {
    while (currNode.right !== null) {
      currNode = currNode.right;
    }
    return currNode;
  }
}

const Tree = new BST(12);
Tree.insert(89);
Tree.insert(67);
Tree.insert(23);
Tree.insert(5);
Tree.insert(1);
Tree.insert(8);
Tree.insert(11);
Tree.insert(51);
Tree.insert(99);

// console.log(Tree);
// console.log(Tree.contains(90));
// console.log(Tree.getMinValueNode(Tree.root));

console.log(Tree.getMaxValueNode(Tree.root));
