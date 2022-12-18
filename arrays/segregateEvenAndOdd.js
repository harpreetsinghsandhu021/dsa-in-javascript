// clockWiseRotationUsingReversal([1, 2, 3, 4, 5, 6], 2);
// segregating even and odd
// using O(n) space complexity
function segregateEvenAndOdd(arr) {
  let combined = [];
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] & 1) === 0) {
      combined.push(arr[i]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] & 1) !== 0) {
      combined.push(arr[i]);
    }
  }

  return combined;
}
// segregating even and odd in time complexity of O(n)
// and constant space
function segregateEvenAndOdd2(arr) {
  let evenIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] & 1) === 0) {
      arr[evenIndex] = arr[i] ^ arr[evenIndex];
      arr[i] = arr[i] ^ arr[evenIndex];
      arr[evenIndex] = arr[i] ^ arr[evenIndex];
      evenIndex++;
    }
  }

  return arr;
}
// segregateEvenAndOdd([1, 3, 2, 4, 7, 6, 9, 10]);
// segregateEvenAndOdd2([1, 3, 2, 4, 7, 6, 9, 10]);
