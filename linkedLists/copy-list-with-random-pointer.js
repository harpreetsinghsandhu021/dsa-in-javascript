import { Node } from "./linkedLists";

var copyRandomList = function (head) {
  let map = new Map();

  let curr = head;

  while (curr !== null) {
    map.set(curr, new Node(curr.val));
    curr = curr.next;
  }

  curr = head;
};
