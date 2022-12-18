//the time complexity of this solution in O(nlogn + mlogm)
//  and space is O(n)
function mergeTwoSortedArrays2(arr1, arr2) {
  let myMap = new Map();

  for (let i = 0; i < arr1.length; i++) {
    myMap.set(arr1[i], true);
  }
  for (let i = 0; i < arr2.length; i++) {
    myMap.set(arr2[i], true);
  }

  let arr = [];

  for (const key of myMap.keys()) {
    arr.push(key);
  }

  arr.sort();
  return arr;
}

// console.log(mergeTwoSortedArrays2([1, 3, 5, 7], [2, 4, 6, 8]));

// mergeTwoSortedArrays([5, 8, 9], [4, 7, 8]);
