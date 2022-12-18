// rotateArrayClockWise([1, 2, 3, 4, 5, 6, 7], 2);
//searching a key in array
function searchInArray(arr, key) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      index = i;
    }
  }

  if (!index) {
    return "no key found";
  }

  return index;
}
