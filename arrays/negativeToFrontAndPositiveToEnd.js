// bring negative to front and positive to end
//this method mixes the order of both positive and
// negative elements
function negativeToFrontAndPositiveToEnd(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    while (arr[i] < 0) i++;
    while (arr[j] > 0) j--;

    if (i < j) {
      swap(arr, i, j);
    }
  }
  return arr;
}
// console.log(
//   negativeToFrontAndPositiveToEnd([12, 11, -13, -5, 6, -7, 5, -3, -6])
// );
// bring negative to front and positive to end
//this method the order of negative elements but not the
// order of possitiv elements
function negativeFirstAndPositiveEnd(arr) {
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      reverseArray(arr, index, i);
      index++;
    }
  }

  // console.log(arr);
}
// negativeFirstAndPositiveEnd([12, 11, -13, -5, 6, -7, 5, -3, -6]);
// bring negative to front and positive to end
//this method solves the question
// in O(n) space which is not ideal
//  so we will optimize it
function negativeFirstAndPositiveEnd3(arr) {
  let combined = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      combined.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      combined.push(arr[i]);
    }
  }

  return combined;
}
