//find duplicate in an array of n + 1 integers
//this solution finds the duplicate in time
// complexity of O(n)
function findDuplicateInNPlusOne(arr, n) {
  for (let i = 0; i < n; i++) {
    let index = Math.abs(arr[i]);

    if (arr[index] < 0) return index;

    arr[index] = -arr[index];
  }
  return -1;
}
let arrNew = [3, 1, 3, 4, 2];

// console.log(findDuplicateInNPlusOne(arrNew, arrNew.length));
