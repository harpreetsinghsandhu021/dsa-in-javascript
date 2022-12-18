//treat arrays as sets and return union of two unsorted arrays and
// intersection
// this method is not very effecient its time compelxity
function FindUnion(arr1, arr2) {
  let newArr = [];
  let newSet = new Set();

  for (let i = 0; i < arr1.length; i++) {
    newSet.add(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    newSet.add(arr2[i]);
  }

  newSet.forEach((s) => {
    newArr.push(s);
  });

  newArr.sort(function (a, b) {
    return a - b;
  });
  return newArr;
}
let arr1 = [1, 2, 5, 6, 2, 3, 5, 7, 3];
let arr2 = [2, 4, 5, 6, 8, 9, 4, 6, 5, 4];
console.log(FindUnion([5, 3], [1, 2, 3, 4, 5]));
function findIntersection(arr1, arr2) {
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        newArr.push(arr2[j]);
      }
    }
  }

  return newArr;
}
