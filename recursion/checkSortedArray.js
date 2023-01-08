// check if the array is sorted or not\

function checkSortedArray(arr, index) {
  if (index === arr.length - 1) return true;

  return arr[index] < arr[index + 1] && checkSortedArray(arr, index + 1);
}

console.log(checkSortedArray([1, 2, 3, 2, 4, 5, 6], 0));
