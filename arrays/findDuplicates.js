//
// find duplicates in an array
//
// this method finds duplicates in time complexity
//  of O(n * n) so we will optimize it.
function findDuplicates(arr) {
  let index = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        index.push(arr[i]);
      }
    }
  }

  return index.join(" ");
}

// console.log(findDuplicates([1, 2, 3, 6, 3, 6, 1]));

// findDuplicates([1, 2, 3, 4, 3]);
