// multiplyElement([2, 3, 4, 5, 6, ]);
//swap 0 to end of array
// solution has a time complexity of O(n)
// and space complexity of O()
function swapZeroes(arr) {
  let k = 0;
  let combined = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      combined[k] = arr[i];
      k++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      combined[k] = arr[i];
      k++;
    }
  }

  return combined;
}
// swapping zeroes to end of array
// in O(n) time complexity and constant space
function swapZeroesTwo(arr) {
  let endIndex = arr.length - 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr[i] = arr[endIndex] ^ arr[i];
      arr[endIndex] = arr[endIndex] ^ arr[i];
      arr[i] = arr[endIndex] ^ arr[i];
      endIndex--;
    }
  }

  return arr;
}
// swapping two variables
function swap(arr, start, end) {
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
}
// swapping zeroes to end of the array
function swapZeroesThree(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      swap(arr, i, j);
      j++;
    }
  }

  return arr;
}
