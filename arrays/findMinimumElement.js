// finding minimum element in an array
function findMinimumElement(arr) {
  let curr;
  let min = arr[0];
  let index = 0;

  for (let i = 1; i < arr.length; i++) {
    curr = arr[i];

    if (curr < min) {
      min = curr;
    }
  }

  return min;
}
