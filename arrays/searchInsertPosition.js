function searchInsertPosition(arr, target) {
  let index = arr.length;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] >= target) {
      index--;
    } else {
      break;
    }
  }

  return index;
}

console.log(searchInsertPosition([1, 3, 5, 6], 2));
