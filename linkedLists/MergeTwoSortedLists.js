const linkedList = require("./linkedLists");

const myLinkedListOne = new linkedList(1);
const myLinkedListTwo = new linkedList(1);
myLinkedListOne.push(2);
myLinkedListOne.push(4);
myLinkedListTwo.push(3);
myLinkedListTwo.push(4);
// console.log(myLinkedListOne.get());
// console.log(myLinkedListTwo.allValues());

function merge(list1, list2) {
  let ans = new linkedList();
  let i = 0;
  let j = 0;

  while (list1.get(i).next !== null && list2.get(i).next !== null) {
    if (list1.get(i).value < list2.get(j).value) {
      ans.push(list1.get(i).value);
      i++;
    } else {
      ans.push(list2.get(j).value);
      j++;
    }
  }

  while (list1.get(i).next !== null) {
    ans.push(list1.get(i).value);
    i++;
  }

  while (list2.get(i).next !== null) {
    ans.push(list2.get(j).value);
    j++;
  }

  return ans.allValues();
}

console.log(merge(myLinkedListOne, myLinkedListTwo));
