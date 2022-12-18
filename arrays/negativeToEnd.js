// console.log(negativeFirstAndPositiveEnd4([12, 11, -13, -5, 6, -7, 5, -3, -6]));
//move all negative elements to end with extra space allowed
// the space complexity of this approach is O(n)
function negativeToEnd(arr) {
  let combined = [];
  let k = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      combined[k] = arr[i];
      k++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      combined[k] = arr[i];
      k++;
    }
  }
  return combined;
}
